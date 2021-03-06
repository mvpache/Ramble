import {
  LOADING,
  SEARCH_SUCESSFUL,
  ERROR,
  ACTIVATE_MOVIE,
  RESET_LOADING,
  ACTIVATE_PERSON,
} from '../actions';

const intialState = {
  activeMovie: {
    info: {},
    cast: [],
    crew: [],
  },
  activePerson: {},
  activeUser: {},
  loading: false,
  message: null,
  searchResults: [],
  token: localStorage.getItem('TOKEN'),
};

export default (state = intialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case SEARCH_SUCESSFUL:
      return {
        ...state,
        searchResults: action.payload.results,
        loading: false,
      };
    case ACTIVATE_MOVIE:
      return {
        ...state,
        activeMovie: action.payload,
        loading: 'activeMovie Loaded',
      };
    case ACTIVATE_PERSON:
      return {
        ...state,
        activePerson: action.payload,
        loading: 'activePerson Loaded',
      };
    case RESET_LOADING:
      return { ...state, loading: false };
    case ERROR:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

// TODO: add an unactivate movie action
