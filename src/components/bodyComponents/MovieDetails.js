import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { resetLoading } from '../../actions';
import Credits from './Credits'

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
  //make a new component for mapping/displaying cast crew due to logic requirements maybe even one for the videos?
  render() {
    const movie = this.props.activeMovie;
     return (
      <Movie>
        <Wrapper>
           <PosterWrapper> 
             <MoviePoster
               src={`https://image.tmdb.org/t/p/original${movie.info.poster_path}`}
             />
             <a>{movie.info.homepage}</a>
           </PosterWrapper>
           <InfoRight>
             <div>
              <h2>{movie.info.title}</h2>
              <h3>{movie.info.tagline}</h3>
              <Credits cast={movie.cast} crew={movie.crew} />
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
          <div>Trailers/Videos</div>
        </Wrapper>
      </Movie>
    )
  }
}



//TODO: make a get call depending on the activeMovie to get more info
//TODO: component willunmount deactivatemovie
//TODO: if no active movie(didn't arrive by link) grab movie based on URL

const mapStateToProps = state => {
  return {
    activeMovie: state.activeMovie,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { resetLoading })(MovieDetails);

/* 
Reponse Values To Use:
{
    "budget": 94000000,
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 14,
            "name": "Fantasy"
        }
    ],
    "homepage": "http://www.tombraidermovie.com/",
    "overview": "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
    "poster_path": "/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
    "production_companies": [
        {
            "id": 10038,
            "logo_path": "/3dWAlOgygJ7rU6cws2DHaI265Dz.png",
            "name": "Square Enix",
            "origin_country": "JP"
        },
        {
            "id": 19105,
            "logo_path": "/7RdbaZqDLb4q2PdtMZx0SIrAyDt.png",
            "name": "Eidos Interactive",
            "origin_country": "GB"
        },
        {
            "id": 3281,
            "logo_path": "/pfmb82VUfN9VKB1YuBSY69WVNVm.png",
            "name": "GK Films",
            "origin_country": "GB"
        },
        {
            "id": 21,
            "logo_path": "/mjofSXiHpG5t6KYmU4l4FrUhT7m.png",
            "name": "Metro-Goldwyn-Mayer",
            "origin_country": "US"
        },
        {
            "id": 174,
            "logo_path": "/6rFNo5taSC9i0Sxnl81nucQMsw9.png",
            "name": "Warner Bros. Pictures",
            "origin_country": "US"
        },
        {
            "id": 103225,
            "logo_path": null,
            "name": "Moonlighting Filmmakers Pty Ltd.",
            "origin_country": ""
        }
    ],
    "release_date": "2018-03-08",
    "revenue": 268036569,
    "runtime": 118,
    "spoken_languages": [
        {
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "tagline": "Her legend begins",
    "title": "Tomb Raider",
}


Response Format:
{
    "adult": false,
    "backdrop_path": "/yVlaVnGRwJMxB3txxwA24XurSNp.jpg",
    "belongs_to_collection": null,
    "budget": 94000000,
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 14,
            "name": "Fantasy"
        }
    ],
    "homepage": "http://www.tombraidermovie.com/",
    "id": 338970,
    "imdb_id": "tt1365519",
    "original_language": "en",
    "original_title": "Tomb Raider",
    "overview": "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
    "popularity": 106.663197,
    "poster_path": "/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
    "production_companies": [
        {
            "id": 10038,
            "logo_path": "/3dWAlOgygJ7rU6cws2DHaI265Dz.png",
            "name": "Square Enix",
            "origin_country": "JP"
        },
        {
            "id": 19105,
            "logo_path": "/7RdbaZqDLb4q2PdtMZx0SIrAyDt.png",
            "name": "Eidos Interactive",
            "origin_country": "GB"
        },
        {
            "id": 3281,
            "logo_path": "/pfmb82VUfN9VKB1YuBSY69WVNVm.png",
            "name": "GK Films",
            "origin_country": "GB"
        },
        {
            "id": 21,
            "logo_path": "/mjofSXiHpG5t6KYmU4l4FrUhT7m.png",
            "name": "Metro-Goldwyn-Mayer",
            "origin_country": "US"
        },
        {
            "id": 174,
            "logo_path": "/6rFNo5taSC9i0Sxnl81nucQMsw9.png",
            "name": "Warner Bros. Pictures",
            "origin_country": "US"
        },
        {
            "id": 103225,
            "logo_path": null,
            "name": "Moonlighting Filmmakers Pty Ltd.",
            "origin_country": ""
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "ZA",
            "name": "South Africa"
        },
        {
            "iso_3166_1": "GB",
            "name": "United Kingdom"
        },
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2018-03-08",
    "revenue": 268036569,
    "runtime": 118,
    "spoken_languages": [
        {
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "Her legend begins",
    "title": "Tomb Raider",
    "video": false,
    "vote_average": 6.1,
    "vote_count": 1022
}*/