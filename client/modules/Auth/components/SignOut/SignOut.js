import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOutUser } from './../../AuthActions';

class SignOut extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  };

  componentWillMount() {
    this.props.signOutUser();
  }

  render() {
    return (
      <div>Sorry to see you go...</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signOutUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignOut);
