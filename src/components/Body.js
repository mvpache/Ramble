import React, { Component } from 'react';
import { Home } from './bodyComponents';

import styled from 'styled-components';

const Wrapper = styled.div`
  background: whitesmoke;
  display:inline-block;
  width: 100%;
  margin: 0;
`;

class Body extends Component {
  render() {
    return (
      <Wrapper>
        <Home />
      </Wrapper>
    )
  }
}

export default Body;