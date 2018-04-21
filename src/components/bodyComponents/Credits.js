import React, { Component } from 'react';

class Credits extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
      {this.props.crew.map(item => {
        if (item.job == 'Director') {
          return <p key={item.id}>Directed by: {item.name}</p>
          }})}
      {this.props.crew.map(item => {
        if (item.job == 'Screenplay') {
          return <p key={item.id}>Screenplay by: {item.name}</p>
        }})}
        {this.props.cast.map(item => {
          if (this.props.cast.indexOf(item) < 4) {
            return <p key={item.id}>Starring: {item.name}</p>
          }
        })}
    </div>
    )
  }
}

export default Credits;