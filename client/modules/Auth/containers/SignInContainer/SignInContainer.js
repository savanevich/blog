import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from './../../components/SignIn/SignIn';
import { signInUser } from './../../AuthActions';

class SignInContainer extends Component {

  handleSignIn = (email, password) => {
    this.props.dispatch(signInUser({ email, password }));
  };

  render() {
    return (
      <SignIn signIn={ this.handleSignIn }/>
    );
  }
}

export default connect(null)(SignInContainer);
