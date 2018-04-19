import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { activateMovie } from '../../actions';

const MovieImage = styled.img`
  margin: 2%;
  display: inline-block;
  width: 27%;
  height: 54%;
`;

class MovieLink extends Component {
  activate() {
    this.props.activateMovie(this.props.movie.id);
    this.props.history.push(`/movie/${this.props.movie.title}`);
  };

  render() {
    return (
      <MovieImage
        src={`https://image.tmdb.org/t/p/original${this.props.movie.poster_path}`}
        onClick={ () => { this.activate() }}
      />
    )
  }
}
const mapStateToProps = state => {
  return {
    error: state.error,
    loading: state.loading,
  };
};

export default withRouter(connect(mapStateToProps, { activateMovie })(MovieLink));