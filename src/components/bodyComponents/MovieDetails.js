import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { resetLoading, performSearch } from '../../actions';
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
    if(this.props.activeMovie.info.title === undefined) {
      this.props.performSearch(this.props.match.params.title)
      this.props.history.push('/search') //eventually update this to just jump to first results' page?
    }
     return (
      <Movie>
        <Wrapper>
           <PosterWrapper> 
             <MoviePoster
               src={`https://image.tmdb.org/t/p/original${this.props.activeMovie.info.poster_path}`}
             />
             <a href={this.props.activeMovie.info.homepage}>Website</a>
           </PosterWrapper>
           <InfoRight>
             <div>
              <h2>{this.props.activeMovie.info.title}</h2>
               <Credits cast={this.props.activeMovie.cast} crew={this.props.activeMovie.crew} />
              <h4>{this.props.activeMovie.info.tagline}</h4>
             </div>
             <div>
               <p></p>
             </div>
           </InfoRight>
        </Wrapper>
        <div>
          <p>{this.props.activeMovie.info.overview}</p>
        </div>
        <Wrapper>
          <Trailers id={this.props.activeMovie.info.id}/>
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

export default connect(mapStateToProps, { resetLoading, performSearch })(MovieDetails);