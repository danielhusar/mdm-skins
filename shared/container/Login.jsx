import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <Helmet title="Login" />
        <a href="/auth/google" className="login__link login__google">Login</a>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
