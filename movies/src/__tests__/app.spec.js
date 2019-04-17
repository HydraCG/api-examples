const request = require('supertest');
const app = require('../app');

describe('app', function () {

  describe('entrypoint', function () {

    let response;
    beforeEach(() => {
      response = request(app).get('/');
    });

    it('sends a correct response status and headers',
        () => response
        .expect(200)
        .expect('Content-Type', 'application/ld+json; charset=utf-8')
        .expect('Access-Control-Allow-Origin', '*')
        .expect('Access-Control-Expose-Headers', 'Location, Link')
        .expect('Link', '</doc>; rel="http://www.w3.org/ns/hydra/core#apiDocumentation"')
    );
  });

  describe('api documentation', function () {

    let response;
    beforeEach(() => {
      response = request(app).get('/doc');
    });

    it('sends a json-ld response',
        () => response
        .expect(200)
        .expect('Content-Type', 'application/ld+json; charset=utf-8')
    );
  });
});