const request = require('supertest');
const app = require('../app');

describe('Given a movies API', () => {

  describe('when the entrypoint is fetched', () => {

    let response;
    beforeEach(() => {
      response = request(app).get('/');
    });

    it('then the response contains JSON-LD, allows CORS and links to the API documentation',
        () => response
        .expect(200)
        .expect('Content-Type', 'application/ld+json')
        .expect('Access-Control-Allow-Origin', '*')
        .expect('Access-Control-Expose-Headers', 'Location, Link')
        .expect('Link', '</doc>; rel="http://www.w3.org/ns/hydra/core#apiDocumentation"')
    );
  });

  describe('when the API documentation is fetched', () => {

    let response;
    beforeEach(() => {
      response = request(app).get('/doc');
    });

    it('then the response contains JSON-LD',
        () => response
        .expect(200)
        .expect('Content-Type', 'application/ld+json')
    );
  });
});