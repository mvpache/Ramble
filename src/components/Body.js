import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import { Home, SearchResults } from './bodyComponents';

const Wrapper = styled.div`
  background: whitesmoke;
  display:inline-block;
  width: 100%;
  margin: 0;
`;

class Body extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route path='/search' component={ SearchResults } />
          <Route exact path='/' component={ Home } />
        </Wrapper>
      </Router>
    )
  }
}

export default Body;