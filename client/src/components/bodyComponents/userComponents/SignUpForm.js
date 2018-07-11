import React, { Component } from 'react';
import axios from 'axios';

//TODO feedback for signing up correctly
//thinking component either displays subCo A or B depending on "sucess" status
const url =
  process.env.NODE_ENV === 'production'
    ? 'https://ramble-app.herokuapp.com'
    : 'http://localhost:5000';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submitHandler = event => {
    event.preventDefault();

    axios
      .post(`${url}/api/user/register`, this.state)
      .then(response => {
        this.props.setSucess(true);
        console.log('response', response.data);
      })
      .catch(err => {
        this.props.setSucess(false);
        console.log('ERROR', err);
      });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>Username: </label>
          <input
            name={'username'}
            value={this.state.username}
            onChange={this.inputHandler}
            type="text"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            name={'password'}
            value={this.state.password}
            onChange={this.inputHandler}
            type="text"
          />
        </div>
        <button>Sign Up</button>
      </form>
    );
  }
}

export default SignUpForm;
