import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignIn from './../../components/SignIn/SignIn';
import { signInUser } from './../../AuthActions';

class SignInContainer extends Component {

  handleSignIn = (props) => {
    this.props.dispatch(signInUser(props));
  };

  render() {
    return (
      <SignIn signIn={ this.handleSignIn } errorMessage={ this.props.errorMessage } />
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
}

export default connect(mapStateToProps)(SignInContainer);
