import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {
  render() {
    return (
      <div>
        {this.props.activeMovie.title}
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