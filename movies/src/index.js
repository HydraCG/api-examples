const express = require('express');
const app = express();

const entrypoint = require('./resources/entrypoint.json');
const context = require('./resources/context.json');

app.get('/', function (req, res) {
  sendJsonLd(res, entrypoint);
});

app.get('/context.jsonld', function (req, res) {
  sendJsonLd(res, context);
});

function sendJsonLd (res, resource) {
  res.header("Content-Type", 'application/ld+json');
  res.send(JSON.stringify(resource));
}

app.listen(3000, function () {
  console.log('Example API listening on port 3000!');
});