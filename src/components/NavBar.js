import React, { Component } from 'react';
import styled from 'styled-components';

import Search from './navComponents/Search'

const Wrapper = styled.div`
  background: Black;
  display:inline-block;
  width: 100%;
  margin: 0;
`;

const Title = styled.h1`
  color: white;
`

class NavBar extends Component {

  render() {
    return (
      <Wrapper>
        <Title>Movie Ramble</Title>
        <Search/>
      </Wrapper>
    )
  }
}

export default NavBar;