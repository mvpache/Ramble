import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { resetLoading } from '../../actions';
import Credits from './Credits';
import Trailers from './Trailers';

const Movie = styled.div`
  box-sizing: border-box;
  margin: 2%;
`;

const InfoRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding: 1%;
`;

const PosterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  padding: 1%;
`;

const MoviePoster = styled.img`
  margin: 2%;
  display: inline-block;
  width: 216px;
  height: 328px;
`;

const Wrapper = styled.div`
  display: flex;
`;

class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.resetLoading();
  }

  render() {
    const movie = this.props.activeMovie;
     return (
      <Movie>
        <Wrapper>
           <PosterWrapper> 
             <MoviePoster
               src={`https://image.tmdb.org/t/p/original${movie.info.poster_path}`}
             />
             <a href={movie.info.homepage}>Website</a>
           </PosterWrapper>
           <InfoRight>
             <div>
              <h2>{movie.info.title}</h2>
               <Credits cast={movie.cast} crew={movie.crew} />
              <h4>{movie.info.tagline}</h4>
             </div>
             <div>
               <p></p>
             </div>
           </InfoRight>
        </Wrapper>
        <div>
          <p>{movie.info.overview}</p>
        </div>
        <Wrapper>
          <Trailers id={movie.info.id}/>
        </Wrapper>
      </Movie>
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

export default connect(mapStateToProps, { resetLoading })(MovieDetails);