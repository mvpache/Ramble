import React, { Component } from 'react';
import styled from 'styled-components';

const MovieImage = styled.img`
  margin: 2%;
  display: inline-block;
  width: 27%;
  height: 54%;
`;

class MovieLink extends Component {
  render() {
    return (
        <MovieImage 
        src={`https://image.tmdb.org/t/p/original${this.props.movie.poster_path}`} 
        />
    )
  }
}

export default MovieLink;