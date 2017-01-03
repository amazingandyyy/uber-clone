const assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe('the express App', () => {
  it('handles a request to root route', (done) => {
    request(app)
      .get('/')
      .end((err, response) => {
        done();
      });
  });
});