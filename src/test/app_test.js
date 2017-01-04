import assert from 'assert';
import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';

before((done) => {
  mongoose.connect(`mongodb://localhost/muber_testing`);
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', error => console.warn('Warning', error));
});

beforeEach((done) => {
  const { drivers } = mongoose.connection.collections;
  drivers.drop(() => {
    done();
  });
});

describe('the express App', () => {
  it('handles a request to api route', (done) => {
      request.agent(app.listen(8888))
      .get('/api')
      .end((err, response) => {
        assert(response.status === 200);
        done();
      });
  });
});