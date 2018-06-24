import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { activateMovie } from '../../actions';

const MovieImage = styled.img`
  margin: 2%;
  display: inline-block;
  width: 120px;
  height: 182px;
`;

class MovieLink extends Component {
  activate() {
    console.log('isnide movielink', this.props.id);
    this.props.activateMovie(this.props.id);
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
  connect(
    mapStateToProps,
    { activateMovie }
  )(MovieLink)
);
