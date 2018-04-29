import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { activatePerson } from '../../actions';

class Credits extends Component {
  constructor(props) {
    super(props)
  }

  activate(id) {
    this.props.activatePerson(id);
  };

  render() {
    if (this.props.loading === 'activePerson Loaded') {
      this.props.history.push(`/person/${this.props.activePerson.info.name}`);
    }
    return(
      <div>
        Directed by: {this.props.crew.map(item => {
        if (item.job === 'Director') {
          return <p key={item.id}
            onClick={() => { this.activate(item.id) }}>
          {item.name}</p>
          }})}
        Screenplay by: {this.props.crew.map(item => {
        if (item.job === 'Screenplay') {
          return <p key={item.id}
            onClick={() => { this.activate(item.id) }}>
            {item.name}</p>
        }})}
        Starring: {this.props.cast.map(item => {
          if (this.props.cast.indexOf(item) < 4) {
            return <p key={item.id}
            onClick={() => { this.activate(item.id) }}>
            {item.name}</p>
          }
        })}
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activePerson: state.activePerson,
    error: state.error,
    loading: state.loading,
  };
};

export default withRouter(connect(mapStateToProps, { activatePerson })(Credits));