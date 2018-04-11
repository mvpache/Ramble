import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { apiKey }from '../../config'

import MovieLink from './MovieLink';


const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  background: whitesmoke;
`;

class Home extends Component {
  constructor(){
    super();
    this.state = {
      outNow: [],
      comingSoon: [],
    }
  }

  componentDidMount() {
    //axios get call to get moviesOutnow
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1&region=US`)
      .then(response => {
        const sixMovies = response.data.results.slice(0, 6);
        this.setState({ outNow: sixMovies })
      });

    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1&region=US`)
      .then(response => {
        const threeMovies = response.data.results.slice(0, 3);
        this.setState({ comingSoon: threeMovies })
      }); //might have to filter out lower popular titles?
  }

  render() {
    return (
    <Wrapper>
      <h2>Now Playing...</h2>
      <Movies>
        {this.state.outNow.map(movie => {
          return <MovieLink key={movie.id} movie={movie} />
        })}
      </Movies>
      <h2>Coming Soon...</h2>
      <Movies>
        {this.state.comingSoon.map(movie => {
          return <MovieLink key={movie.id} movie={movie} />
        })}
      </Movies>
    </Wrapper>
    )
  }
}

export default Home;