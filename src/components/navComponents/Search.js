import React, { Component } from 'react';
import { connect } from 'react-redux';

import { performSearch } from '../../actions';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
      redirect: false,
    };
  }

  handleInput = (event) => {
    this.setState({ searchValue: event.target.value })
  };

  submitSearch = (event) => {
    event.preventDefault();
    this.props.performSearch(this.state.searchValue);
    this.setState({
      searchValue: '',
      redirect: true,
    });
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

export default connect(mapStateToProps, { performSearch })(Search);