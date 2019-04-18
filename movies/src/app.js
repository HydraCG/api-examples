const express = require('express');
const path = require('path');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'Location, Link');
  res.header('Link', '</doc>; rel="http://www.w3.org/ns/hydra/core#apiDocumentation"');
  next();
});

app.use(express.static(path.join(__dirname, '/resources'),
    {
      index: 'index.jsonld',
      extensions: ['jsonld']
    })
);

module.exports = app;