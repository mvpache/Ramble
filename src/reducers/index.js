import { LOADING, SEARCH_SUCESSFUL, ERROR } from '../actions';

const intialState = {
  activeMovie: {},
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
      return { ...state, searchResults: action.payload.results }
    case ERROR:
      return { ...state, message: action.message };
    default:
      return state
  }
}

//need reducer functions for search, loading, search succesful
//Split an error handler reducer?