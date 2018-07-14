import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { activatePerson } from '../../../actions';

class MovieCredits extends Component {
  activate(id) {
    this.props.activatePerson(id);
  }

  allCredits() {
    this.props.history.push(
      `/movie/${this.props.activeMovie.info.title}/credits`,
    );
  }

  render() {
    if (this.props.loading === 'activePerson Loaded') {
      this.props.history.push(`/person/${this.props.activePerson.info.name}`);
    }
    return (
      // if no writer, directed listed, don't display
      <div>
        Directed by:{' '}
        {this.props.crew.map(
          item => !item.job === 'Director' || (
              <p
                key={item.id}
                onClick={() => {
                  this.activate(item.id);
                }}>
                {item.name}
              </p>
          ),
        )}
        Screenplay by:{' '}
        {this.props.crew.map(
          item => !item.job === 'Screenplay' || (
              <p
                key={item.id}
                onClick={() => {
                  this.activate(item.id);
                }}>
                {item.name}
              </p>
          ),
        )}
        Starring:{' '}
        {this.props.cast.map(
          item => this.props.cast.indexOf(item) < 4 || (
              <p
                key={item.id}
                onClick={() => {
                  this.activate(item.id);
                }}>
                {item.name}
              </p>
          ),
        )}
        <p
          onClick={() => {
            this.allCredits(); // need to pass in ID
          }}>
          See Full Cast & Crew
        </p>{' '}
        {/* should link to full credit comp */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activePerson: state.activePerson,
  activeMovie: state.activeMovie,
  error: state.error,
  loading: state.loading,
});

export default withRouter(
  connect(
    mapStateToProps,
    { activatePerson },
  )(MovieCredits),
);
