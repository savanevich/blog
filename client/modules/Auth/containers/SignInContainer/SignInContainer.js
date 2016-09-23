import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';

import SignIn from './../../components/SignIn/SignIn';
import { signInUser } from './../../AuthActions';

class SignInContainer extends Component {

  handleSignIn = (props) => {
    this.props.dispatch(signInUser(props));
  };

  render() {
    return (
      <Dialog
          title="Sign In Form"
          modal={ false }
          open={ this.props.isOpen }
          onRequestClose={ this.props.onCloseAction } >
        <SignIn signIn={ this.handleSignIn } onCloseAction={ this.props.onCloseAction } errorMessage={ this.props.errorMessage } />
      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
}

SignInContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(SignInContainer);
