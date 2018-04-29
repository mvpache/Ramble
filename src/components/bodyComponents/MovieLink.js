import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { activateMovie } from '../../actions';

const MovieImage = styled.img`
  margin: 2%;
  display: inline-block;
  width: 130px;
  height: 197px;
`;

class MovieLink extends Component {
  activate() {
    this.props.activateMovie(this.props.movie.id);
  }

  render() {
    if (this.props.loading === 'activeMovie Loaded') {
      this.props.history.push(`/movie/${this.props.activeMovie.info.title}`);
    }
    return (
      <MovieImage
        src={`https://image.tmdb.org/t/p/original${
          this.props.movie.poster_path
        }`}
        onClick={() => {
          this.activate();
        }}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    activeMovie: state.activeMovie,
    error: state.error,
    loading: state.loading,
  };
};

export default withRouter(
  connect(mapStateToProps, { activateMovie })(MovieLink)
);
