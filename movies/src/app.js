const express = require('express');
const path = require('path');
const setLink = require('set-link');

const app = express();
app.use(setLink);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'Location, Link');
  res.setLink('/doc', 'http://www.w3.org/ns/hydra/core#apiDocumentation');
  next();
});

app.use(express.static(path.join(__dirname, '/resources'),
    {
      index: 'index.jsonld',
      extensions: ['jsonld']
    })
);

module.exports = app;
