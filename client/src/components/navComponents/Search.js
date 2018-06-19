import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { performSearch } from '../../actions';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
    };
  }

  handleInput = (event) => {
    this.setState({ searchValue: event.target.value })
  };

  submitSearch = (event) => {
    event.preventDefault();
    this.props.performSearch(this.state.searchValue);
    this.props.history.push('/search')
  }

  render() {
    return (
        <form onSubmit={this.submitSearch}>
          <input name="search" type="text"
            onChange={this.handleInput}
            placeholder="Search..." />
        </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    error: state.error,
    loading: state.loading,
  };
};

export default withRouter(connect(mapStateToProps, { performSearch })(Search));