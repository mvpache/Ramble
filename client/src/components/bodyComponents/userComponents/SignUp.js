import React, { Component } from 'react';

import SignUpForm from './SignUpForm';

class SignUp extends Component {
  constructor() {
    super();

    this.state = { success: null };
  }

  setSucess = (value) => {
    this.setState({ success: value });
  };

  render() {
    if (this.state.success === true) {
      return <h1>Sign Up Sucessful</h1>;
    } if (this.state.success === false) {
      return (
        <div>
          <h1>Sign Up Failed</h1>{' '}
          <button onClick={() => this.setSucess(null)}>Retry</button>
        </div>
      );
    }
    return <SignUpForm setSucess={this.setSucess} />;
  }
}

export default SignUp;
