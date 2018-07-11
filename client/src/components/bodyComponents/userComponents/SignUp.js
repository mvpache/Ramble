import React, { Component } from 'react';

import SignUpForm from './SignUpForm';

class SignUp extends Component {
  constructor() {
    super();

    this.state = { success: null };
  }

  setSucess = value => {
    this.setState({ success: value });
  };

  render() {
    if (this.state.success == true) {
      return <h1>Sign Up Sucessful</h1>;
    } else if (this.state.success == false) {
      return <h1>Sign Up Failed</h1>;
    } else {
      return <SignUpForm setSucess={this.setSucess} />;
    }
  }
}

export default SignUp;
