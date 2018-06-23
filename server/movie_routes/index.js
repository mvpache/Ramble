const express = require('express');
const request = require('request');
//move over all the actions/get logic from FE to here
//this is where all the passively displayed contect goes

const router = express.Router();
const apiKey = process.env.APIKEY;

router.route('/api/nowplaying').get((req, res) => {
  request
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1&region=US`
    )
    .pipe(res);
});

router.route('/api/upcoming').get((req, res) => {
  request
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1&region=US`
    )
    .pipe(res);
});

router.route('/api/search/').get((req, res) => {
  const searchTerm = req.params.search;
  request
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    )
    .pipe(res);
});

//activateMovie
//movieCredits
//activatePerson
//personCredits

module.exports = router;
