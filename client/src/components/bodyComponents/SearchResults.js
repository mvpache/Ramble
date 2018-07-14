import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieLink from './MovieLink';

class SearchResults extends Component {
  render() {
    return (
      <div>
        {this.props.searchResults.map(movie => <MovieLink key={movie.id} movie={movie} />)}
      </div>

    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  error: state.error,
  loading: state.loading,
});

export default connect(mapStateToProps)(SearchResults);
