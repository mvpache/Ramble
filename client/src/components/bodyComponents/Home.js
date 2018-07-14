import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import MovieLink from './MovieLink';

const url = 'https://ramble-app.herokuapp.com';

const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  background: whitesmoke;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      outNow: [],
      comingSoon: [],
    };
  }

  componentDidMount() {
    // axios get call to get moviesOutnow
    // refactor into action
    axios.get(`${url}/api/nowplaying`).then((response) => {
      const sixMovies = response.data.results.slice(0, 6);
      // slices first six(usually the most popular)
      this.setState({ outNow: sixMovies });
    });

    axios.get(`${url}/api/upcoming`).then((response) => {
      const threeMovies = response.data.results.slice(0, 3);
      this.setState({ comingSoon: threeMovies });
    }); // might have to filter out lower popular titles?
  }

  render() {
    return (
      <Wrapper>
        <h2>Now Playing...</h2>
        <Movies>
          {this.state.outNow.map(movie => (
            <MovieLink key={movie.id} movie={movie} />
          ))}
        </Movies>
        <h2>Coming Soon...</h2>
        <Movies>
          {this.state.comingSoon.map(movie => (
            <MovieLink key={movie.id} movie={movie} />
          ))}
        </Movies>
      </Wrapper>
    );
  }
}

export default Home;
