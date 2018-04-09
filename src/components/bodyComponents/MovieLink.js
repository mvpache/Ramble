import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2%;
`;

class MovieLink extends Component {
  render() {
    return (
      <Wrapper>
        <img 
        src={`https://image.tmdb.org/t/p/original${this.props.movie.poster_path}`} 
        style={{height: 200}}/>
      </Wrapper>
    )
  }
}

export default MovieLink;








adult: 
false
backdrop_path:
"/q7fXcrDPJcf6t3rzutaNwTzuKP1.jpg"
genre_ids: 
Array[3]
id: 
333339
original_language:
"en"
original_title:
"Ready Player One"
overview:
"When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune."
popularity:
227.490324
poster_path:
"/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg"
release_date:
"2018-03-29"
title:
"Ready Player One"

video:
false
vote_average:
8
vote_count:
935