import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import {
  Home,
  SearchResults,
  MovieDetails,
  PersonDetails,
} from './bodyComponents';
import FullCredits from './bodyComponents/creditsComponents/FullCredits';

const Wrapper = styled.div`
  background: whitesmoke;
  display: inline-block;
  width: 100%;
  margin: 0;
`;

class Body extends Component {
  render() {
    return (
      <Wrapper>
        <Route path="/person/:name" component={PersonDetails} />
        <Route exact path="/movie/:title/credits" component={FullCredits} />
        <Route exact path="/movie/:title" component={MovieDetails} />
        <Route path="/search" component={SearchResults} />
        <Route exact path="/" component={Home} />
      </Wrapper>
    );
  }
}

export default Body;
