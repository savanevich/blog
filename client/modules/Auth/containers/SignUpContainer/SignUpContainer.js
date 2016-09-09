import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from './../../components/SignUp/SignUp';
import { signUpUser } from './../../AuthActions';

class SignUpContainer extends Component {

  handleSignUp = (props) => {
    this.props.dispatch(signUpUser(props));
  };

  render() {
    return (
      <SignUp signUp={ this.handleSignUp } errorMessage={ this.props.errorMessage } />
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
}

export default connect(mapStateToProps)(SignUpContainer);
