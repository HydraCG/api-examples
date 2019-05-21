const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Example API listening on port ${port}!`);
});

app.post('/movies', (req, res) => {
  res.status(201);
  res.setHeader('Location', '/movies/d517cae6-6cdc-11e9-a923-1681be663d3e');
  res.setHeader('Content-Type', 'application/ld+json');
  res.send({
    "@context": "https://hydra-movies.herokuapp.com/context.jsonld",
    "@id": "/movies/d517cae6-6cdc-11e9-a923-1681be663d3e",
    "@type": "schema:Movie",
    "schema:name": "Fake Movie"
  });
});
