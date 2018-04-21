import { LOADING, SEARCH_SUCESSFUL, ERROR, ACTIVATE_MOVIE, RESET_LOADING } from '../actions';

const intialState = {
  activeMovie: {
    info: {},
    cast: [],
    crew: [],
  },
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
      return { ...state, searchResults: action.payload.results, loading: false };
    case ACTIVATE_MOVIE:
      return { ...state, activeMovie: action.payload, loading: 'activeMovie Loaded' } ;
    case RESET_LOADING:
      return { ...state, loading: false };
    case ERROR:
      return { ...state, message: action.message };
    default:
      return state
  }
}

//TODO: add an unactivate movie action 