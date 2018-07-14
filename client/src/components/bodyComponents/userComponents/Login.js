import React, { Component } from 'react';

import LoginForm from './LoginForm';

class Login extends Component {
  constructor() {
    super();

    this.state = { success: null };
  }

  setSucess = (value) => {
    this.setState({ success: value });
  };

  render() {
    if (this.state.success === true) {
      return <h1>Login Sucessful</h1>;
    } if (this.state.success === false) {
      return (
        <div>
          <h1>Login Failed</h1>
          <button onClick={() => this.setSucess(null)}>Retry</button>
        </div>
      );
    }
    return <LoginForm setSucess={this.setSucess} />;
  }
}

export default Login;
