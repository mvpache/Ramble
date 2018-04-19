import axios from 'axios';
import { apiKey } from '../config';

export const SEARCH_SUCESSFUL = 'SEARCH_SUCESSFUL';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const ACTIVATE_MOVIE = 'ACTIVATE_MOVIE';


export const performSearch = (searchTerm) => dispatch => {
  dispatch({ type: LOADING });

  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
  .then(response => {
    dispatch({ type: SEARCH_SUCESSFUL, payload: response.data})
  })
  .catch(response => {
    dispatch({ type: ERROR, message: 'Error with Search' })
  });
};

export const activateMovie = (movie) => {
  return {
    type: ACTIVATE_MOVIE,
    payload: movie
  };
}

/*need a search AC using 
https://developers.themoviedb.org/3/search/search-movies

also possible to do a key word search using 
https://developers.themoviedb.org/3/search/search-keywords

keywords could be wonky, but allow more options
*/
