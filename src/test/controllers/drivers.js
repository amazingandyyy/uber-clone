import assert from 'assert';
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../app';

const Driver = mongoose.model('Driver');

describe('Drivers controller', () => {
  it('Post to /api/drivers creates a new driver', (done) => {
    Driver
      .count()
      .then(count => {
        request(app)
          .post('/api/drivers')
          .send({email: 'email'})
          .end(() => {
            Driver
              .count()
              .then(newCount => {
                assert(count + 1 === newCount);
                done();
              });
          });
      });
  });
});
