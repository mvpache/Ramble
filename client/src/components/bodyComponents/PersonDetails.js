import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AccordianWrapper from '../accordianComponents/AccordianWrapper';

const PersonPic = styled.img`
  margin: 2%;
  display: inline-block;
  width: 216px;
  height: 328px;
`;

class PersonDetails extends Component {
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
        <AccordianWrapper credits={this.props.activePerson.credits} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activePerson: state.activePerson,
  error: state.error,
  loading: state.loading,
});

export default connect(mapStateToProps)(PersonDetails);
