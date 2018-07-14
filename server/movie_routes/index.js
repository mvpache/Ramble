const express = require('express');
const request = require('request');
// move over all the actions/get logic from FE to here
// this is where all the passively displayed contect goes

const configAPIKEY = require('../../client/src/config');

const router = express.Router();
const apiKey = process.env.APIKEY || configAPIKEY;

router.route('/api/nowplaying').get((req, res) => {
  request
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1&region=US`,
    )
    .pipe(res);
});

router.route('/api/upcoming').get((req, res) => {
  request
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1&region=US`,
    )
    .pipe(res);
});

router.route('/api/search/:id').get((req, res) => {
  const searchTerm = req.params.id;
  request
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
    )
    .pipe(res);
});

router.route('/api/activate/movie/:id').get((req, res) => {
  const movieID = req.params.id;
  request
    .get(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`,
    )
    .pipe(res);
});

router.route('/api/activate/movie/credits/:id').get((req, res) => {
  const movieID = req.params.id;
  request
    .get(
      `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${apiKey}`,
    )
    .pipe(res);
});

router.route('/api/activate/person/:id').get((req, res) => {
  const personID = req.params.id;
  request
    .get(
      `https://api.themoviedb.org/3/person/${personID}?api_key=${apiKey}&language=en-US`,
    )
    .pipe(res);
});

router.route('/api/activate/person/credits/:id').get((req, res) => {
  const personID = req.params.id;
  request
    .get(
      `https://api.themoviedb.org/3/person/${personID}/movie_credits?api_key=${apiKey}&language=en-US`,
    )
    .pipe(res);
});

router.route('/api/trailer/:id').get((req, res) => {
  const movieID = req.params.id;
  request
    .get(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}&language=en-US`,
    )
    .pipe(res);
});

module.exports = router;
