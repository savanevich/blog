import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from './../../components/SignUp/SignUp';
import { signUpUser } from './../../AuthActions';

class SignUpContainer extends Component {

  handleSignUp = (email, password) => {
    this.props.dispatch(signUpUser({ email, password }));
  };

  render() {
    return (
      <SignUp signUp={ this.handleSignUp }/>
    );
  }
}

export default connect(null)(SignUpContainer);
