import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { activateMovie } from '../../actions';
import AccordianChild from './AccordianChild';

class AccordianParent extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  activate(id) {
    this.props.activateMovie(id);
  }

  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  render() {
    if (this.props.loading === 'activeMovie Loaded') {
      this.props.history.push(`/movie/${this.props.activeMovie.info.title}`);
    }
    return (
      <div>
        {' '}
        {/* for each parent either display the category title or "appeared in*/}
        {this.props.category ? (
          <h3
            onClick={() => {
              this.toggleShow();
            }}
          >
            {this.props.category}:{' '}
          </h3>
        ) : (
          <h3
            onClick={() => {
              this.toggleShow();
            }}
          >
            Appeared in:{' '}
          </h3>
        )}
        <div style={{ display: this.state.show ? 'inherit' : 'none' }}>
          {this.props.contents.map(movie => {
            return (
              <AccordianChild
                key={movie.index}
                movie={movie}
                activate={() => this.activate(movie.id)}
              />
            );
          })}
        </div>
      </div>
    );
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
