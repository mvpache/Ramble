import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { activateMovie } from '../../actions';
import AccordianChild from './AccordianChild';

class AccordianParent extends Component {
  activate(id) {
    this.props.activateMovie(id);
  };

  render() {
    if (this.props.loading === 'activeMovie Loaded') {
      this.props.history.push(`/movie/${this.props.activeMovie.info.title}`);
    }
    return (
      <div>
        {this.props.category ? <h3>{this.props.category}: </h3> : <h3>Appeared in: </h3>}
        {this.props.contents.map(movie => {
          return <AccordianChild movie={movie}
          activate={() => this.activate(movie.id)} />
        }
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeMovie: state.activeMovie,
    error: state.error,
    loading: state.loading,
  };
};

export default withRouter(
  connect(mapStateToProps, { activateMovie })(AccordianParent)
);