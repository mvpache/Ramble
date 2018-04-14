import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieLink from './MovieLink';

class SearchResults extends Component {
  render() {
    return (
      <div>
        {this.props.searchResults.map(movie => {
          return <MovieLink key={movie.id} movie={movie} />
        })}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    error: state.error,
    loading: state.loading,
  }
};

export default connect(mapStateToProps)(SearchResults)

//need to map out search results
//need to be redirected here upon search submit

