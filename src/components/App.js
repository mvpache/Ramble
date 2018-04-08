import React, { Component } from 'react';

import NavBar from './NavBar';
import Body from './Body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NavBar />
        <Body />
      </div>
    );
  }
}

export default App;


//two main components in APP - Search Bar and content