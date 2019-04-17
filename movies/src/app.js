const express = require('express');
const entrypoint = require('./resources/entrypoint.json');
const context = require('./resources/context.json');
const doc = require('./resources/doc.json');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'Location, Link');
  res.header('Link', '</doc>; rel="http://www.w3.org/ns/hydra/core#apiDocumentation"');
  next();
});

app.get('/', function (req, res) {
  sendJsonLd(res, entrypoint);
});

app.get('/context.jsonld', function (req, res) {
  sendJsonLd(res, context);
});

app.get('/doc', function (req, res) {
  sendJsonLd(res, doc);
});

function sendJsonLd (res, resource) {
  res.header("Content-Type", 'application/ld+json');
  res.send(JSON.stringify(resource));
}

module.exports = app;