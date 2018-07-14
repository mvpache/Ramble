import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { activatePerson } from '../../../actions';
import AccordianWrapper from '../../accordianComponents/AccordianWrapper';

class FullCredits extends Component {
  activate(id) {
    this.props.activatePerson(id);
  }

  render() {
    if (this.props.loading === 'activePerson Loaded') {
      this.props.history.push(`/person/${this.props.activePerson.info.name}`);
    }

    return (
      <div>
        <AccordianWrapper credits={this.props.activeMovie} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeMovie: state.activeMovie,
  activePerson: state.activePerson,
  error: state.error,
  loading: state.loading,
});

export default withRouter(
  connect(
    mapStateToProps,
    { activatePerson },
  )(FullCredits),
);
