import React, { Component } from 'react';
import { connect } from 'react-redux';

import { activateMovie } from '../../actions';

class MovieDetails extends Component {
  render() {
    return (
      <div>
        'hello'
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeMovie: state.activeMovie,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(MovieDetails);