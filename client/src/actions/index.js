import axios from 'axios';
const url =
  process.env.NODE_ENV === 'production'
    ? 'https://ramble-app.herokuapp.com'
    : 'http://localhost:5000';

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
  console.log(id);
  axios
    .get(`${url}/api/activate/movie/${id}`)
    .then(response => {
      movie.info = response.data;
      axios
        .get(`${url}/api/activate/movie/credits/${id}`)
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
    .get(`${url}/api/activate/person/${id}`)
    .then(response => {
      person.info = response.data;
      axios
        .get(`${url}/api/activate/person/credits/${id}`)
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
