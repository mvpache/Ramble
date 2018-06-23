import axios from 'axios';
const url = 'https://ramble-app.herokuapp.com';
const apiKey = 'https://ramble-app.herokuapp.com'; //placeholder

export const SEARCH_SUCESSFUL = 'SEARCH_SUCESSFUL';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const ACTIVATE_MOVIE = 'ACTIVATE_MOVIE';
export const RESET_LOADING = 'RESET_LOADING';
export const ACTIVATE_PERSON = 'ACTIVATE_PERSON';

const movie = {
  info: {},
  cast: [],
  crew: [],
};

const person = {
  info: {},
  credits: {},
};

export const performSearch = searchTerm => dispatch => {
  dispatch({ type: LOADING });

  axios
    .get(`${url}/api/search/${searchTerm}`)
    .then(response => {
      dispatch({ type: SEARCH_SUCESSFUL, payload: response.data });
    })
    .catch(response => {
      dispatch({ type: ERROR, message: 'Error with Search' });
    });
};

export const activateMovie = id => dispatch => {
  dispatch({ type: LOADING });

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
    .then(response => {
      movie.info = response.data;
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
        )
        .then(response => {
          movie.cast = response.data.cast;
          movie.crew = response.data.crew;
          dispatch({ type: ACTIVATE_MOVIE, payload: movie });
        })
        .catch(response => {
          dispatch({ type: ERROR, message: 'Error with Credit GET' });
        });
    })
    .catch(response => {
      dispatch({ type: ERROR, message: 'Error with Activating Movie' });
    });
};

export const activatePerson = id => dispatch => {
  dispatch({ type: LOADING });

  axios
    .get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`
    )
    .then(response => {
      person.info = response.data;
      axios
        .get(
          `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`
        )
        .then(response => {
          person.credits = response.data;
          dispatch({ type: ACTIVATE_PERSON, payload: person });
        })
        .catch(response => {
          dispatch({ type: ERROR, payload: 'Error with credit GET' });
        });
    })
    .catch(response => {
      dispatch({ type: ERROR, payload: 'Error with Activating Person' });
    });
};

export const resetLoading = () => {
  return {
    type: RESET_LOADING,
    payload: false,
  };
};

/*need a search AC using 
https://developers.themoviedb.org/3/search/search-movies

also possible to do a key word search using 
https://developers.themoviedb.org/3/search/search-keywords

keywords could be wonky, but allow more options
*/
