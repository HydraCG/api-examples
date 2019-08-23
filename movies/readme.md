## Movies API

This API shows how a basic CRUD (Create, Read, Update, Delete) API can be designed using Hydra Core Vocabulary.

Features (planned):
  * List movies
  * Filter (search) movies
  * Page through a collection of movies
  * Show movie data
  * Create new movies resources
  * Update an existing movie resource
  * Delete a movie resource

### Live demo

To explore the API on the web take a look at the [live demo](https://hydra-movies.herokuapp.com/).

### Developer documentation

See `./docs` directory.`

### Running tests

1. Start the local server

        npm start

2. Run hydra analyser and [hypertest](http://testing.hypermedia.app)

        npm test

The `test:analyse` script performs a static analysis of the API Documentation using [hydra-validator-analyse](https://www.npmjs.com/package/hydra-validator-analyse).

The script `test:e2e` runs the scenarios defined in `src/tests/*.hydra`. These scenarios
are written in hydra flavour of [Hypertest DSL](https://testing.hypermedia.app/dsl/).

Additionally, jest script is included to run tests not (yet) possible in Hypertest.
