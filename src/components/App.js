import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './NavBar';
import Body from './Body';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Body />
        </div>
      </Router>
    );
  }
}

export default App;

//!Features To do

//TODO: Fuller styling

//TODO: Component unmount to deactivate movie/person

//TODO: Add a footer

//TODO: Add similar?

//TODO: Add a loading component/animation

//TODO: Click on poster to see a larger version/or take you to poster viewer

//TODO: if no active movie(didn't arrive by link) grab movie based on URL

//TODO: Start the backend finally
