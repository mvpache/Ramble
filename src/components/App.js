import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

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

//make a routes map
//add routes map to store
//make route changing actions
//make route changing reducers
//set up body renderProp



/*
<Body render={(component) => (
  <Component />>
)


Body

render()
  return(
    <div>
      {this.props.render(component)}
    </div>
  )
*/