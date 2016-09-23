import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';

import SignUp from './../../components/SignUp/SignUp';
import { signUpUser } from './../../AuthActions';

class SignUpContainer extends Component {

  handleSignUp = (props) => {
    this.props.dispatch(signUpUser(props));
  };

  render() {
    return (
      <Dialog
        title="Sign Up Form"
        modal={ false }
        open={ this.props.isOpen }
        onRequestClose={ this.props.onCloseAction } >
        <SignUp signUp={ this.handleSignUp } onCloseAction={ this.props.onCloseAction } errorMessage={ this.props.errorMessage } />
      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
}

SignUpContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(SignUpContainer);
