import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

import Search from './navComponents/Search';

const Wrapper = styled.div`
  background: Black;
  display: inline-block;
  width: 100%;
  margin: 0;
`;

const Title = styled.h1`
  color: white;
`;

class NavBar extends Component {
  render() {
    return (
      <Wrapper>
        <Title
          onClick={() => {
            this.props.history.push('/');
          }}>
          Movie Ramble
        </Title>
        <Search />
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </Wrapper>
    );
  }
}

export default withRouter(NavBar);
