import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MovieLink from './MovieLink';
import { apiKey } from '../../config';

const PersonPic = styled.img`
  margin: 2%;
  display: inline-block;
  width: 216px;
  height: 328px;
`;

const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MovieCredit = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 133px;
  margin: 2%;
`;

class PersonDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <p>{this.props.activePerson.info.name}</p>
          <PersonPic
            src={`https://image.tmdb.org/t/p/original/${
              this.props.activePerson.info.profile_path
            }`}
          />
          <p>{this.props.activePerson.info.biography}</p>
          <p>{this.props.activePerson.info.birthday}</p>
        </div>
        Appeared in:{' '}
        <Movies>
          {this.props.activePerson.credits.cast.map(movie => {
            return (
              <MovieCredit>
                <MovieLink key={movie.id} movie={movie} />
                <p>as {movie.character}</p>
              </MovieCredit>
            );
          })}
        </Movies>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activePerson: state.activePerson,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(PersonDetails);
