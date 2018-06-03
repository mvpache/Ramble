import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { activateMovie, activatePerson } from '../../actions';
import AccordianChild from './AccordianChild';

class AccordianParent extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  activate(item) {
    if (item.title) {
      this.props.activateMovie(item.id);
    }
    if (item.name) {
      this.props.activatePerson(item.id);
    }
  }

  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  //write function for logic on what to do display
  titleOfAccordian() {
    if (this.props.category) {
      return (
        <h3
          onClick={() => {
            this.toggleShow();
          }}
        >
          {this.props.category}:{' '}
        </h3>
      );
    } else if (this.props.contents[0].cast_id) {
      //should display "Starring whoever as whatever"
      return (
        <h3
          onClick={() => {
            this.toggleShow();
          }}
        >
          Starring:{' '}
        </h3>
      );
    } else {
      return (
        <h3
          onClick={() => {
            this.toggleShow();
          }}
        >
          Appeared in:{' '}
        </h3>
      );
    }
  }

  render() {
    if (this.props.loading === 'activeMovie Loaded') {
      this.props.history.push(`/movie/${this.props.activeMovie.info.title}`);
    }
    return (
      <div>
        {this.titleOfAccordian()}
        <div style={{ display: this.state.show ? 'inherit' : 'none' }}>
          {this.props.contents.map(item => {
            return (
              <AccordianChild
                key={item.index}
                item={item}
                activate={() => this.activate(item)}
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
  connect(mapStateToProps, { activateMovie, activatePerson })(AccordianParent)
);
