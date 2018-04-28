import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { apiKey } from '../../config';

const PersonPic = styled.img`
  margin: 2%;
  display: inline-block;
  width: 216px;
  height: 328px;
`;

class PersonDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      <p>{this.props.activePerson.info.name}</p>
        <PersonPic src={`https://image.tmdb.org/t/p/original/${this.props.activePerson.info.profile_path}`}/>
      <p>{this.props.activePerson.info.biography}</p>
      <p>{this.props.activePerson.info.birthday}</p>
    </div>
  )}
}

const mapStateToProps = state => {
  return {
    activePerson: state.activePerson,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(PersonDetails);

// birthday(pin): "1972-05-02"
// deathday(pin): null
// id(pin): 18918
// name(pin): "Dwayne Johnson"
// gender(pin): 2
// biography(pin): "Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock, is an American and Canadian actor, producer and semi-retired professional wrestler, signed with WWE. "
// popularity(pin): 25.790974
// place_of_birth(pin): "Hayward, California, USA"
// profile_path(pin): "/akweMz59qsSoPUJYe7QpjAc2rQp.jpg"
// adult(pin): false
// imdb_id(pin): "nm0425005"
// homepage(pin): null
