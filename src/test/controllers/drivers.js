import assert from 'assert';
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../app';

const Driver = mongoose.model('Driver');

describe('Drivers controller', () => {
  it('POST to /api/drivers to create a new driver', (done) => {
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

  it('PUT to /api/drivers to edit an existing driver', (done) => {
    const driver = new Driver({ email: 't@t.com', driving: false })
    // create a driver
    driver.save().then(() => {
      request(app)
      .put(`/api/drivers/${driver._id}`)
      // update it with true driving status
      .send({ driving: true })
      .end(() => {
        Driver.findOne({ email: 't@t.com' })
        .then(driver => {
          // check the driver
          assert(driver.driving === true);
          done()
        })
      })
    })
  });

  it('DELETE to /api/drivers to delete an existing driver', (done) => {
    const driver = new Driver({ email: 't@t.com', driving: false })
    // create a driver
    driver.save().then(() => {
      request(app)
      .delete(`/api/drivers/${driver._id}`)
      .end(() => {
        Driver.findOne({ email: 't@t.com' })
        .then(driver => {
          assert(driver === null)
          done()
        })
      })
    })
  })
});
