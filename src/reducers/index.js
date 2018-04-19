import { LOADING, SEARCH_SUCESSFUL, ERROR, ACTIVATE_MOVIE } from '../actions';

const intialState = {
  activeMovie: { title: '' },
  activeUser: {},
  loading: false,
  message: null,
  searchResults: [],
}

export default (state = intialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case SEARCH_SUCESSFUL:
      return { ...state, searchResults: action.payload.results };
    case ACTIVATE_MOVIE:
      console.log('payload', action.payload)
      return { ...state, activeMovie: (action.payload) } ;
    case ERROR:
      return { ...state, message: action.message };
    default:
      return state
  }
}

//need reducer functions for search, loading, search succesful
//Split an error handler reducer?