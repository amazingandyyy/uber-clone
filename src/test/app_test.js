import assert from 'assert';
import request from 'supertest';
import app from '../server';

describe('the express App', () => {
  it('handles a request to api route', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        assert(response.status === 200);
        done();
      });
  });
});