import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import Divider from 'material-ui/Divider';

import SignInContainer from './../../../Auth/containers/SignInContainer/SignInContainer';
import SignUpContainer from './../../../Auth/containers/SignUpContainer/SignUpContainer';
import { authError } from './../../../Auth/AuthActions';

import styles from './Header.css';

export class Header extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  };

  static propTypes = {
    signOutUser: PropTypes.func.isRequired
  };

  state = {
    isSignInOpen: false,
    isSignUpOpen: false
  };

  handleOpenSignIn = () => {
    this.props.authError();
    this.setState({
      ...this.state,
      isSignInOpen: true
    });
  };

  handleCloseSignIn = () => {
    this.setState({
      ...this.state,
      isSignInOpen: false
    });
  };

  handleOpenSignUp = () => {
    this.props.authError();
    this.setState({
      ...this.state,
      isSignUpOpen: true
    });
  };

  handleCloseSignUp = () => {
    this.setState({
      ...this.state,
      isSignUpOpen: false
    });
  };

  renderLinks() {
    if (this.props.authenticated) {

      return (
        <ul className={styles['menu-items']}>
          <li className={styles['add-post']}>
            <Link to="/add-post">
              Write a story
            </Link>
          </li>
          <li>
            <IconMenu
              iconButtonElement={ <IconButton style={{ height: 0, width: 0, padding: '3px' }}>
                <Avatar size={30} src={ require('./../../../../../server/images/users/sav.jpg') } /></IconButton>
              }
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <Divider />
              <MenuItem primaryText="Sign out" onClick={() => this.props.signOutUser()} />
            </IconMenu>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={styles['menu-items']}>
          <li>
            <FlatButton
              label="Sign In"
              primary={true}
              onTouchTap={ this.handleOpenSignIn } />
          </li>
          <li>
            <FlatButton
              label="Sign Up"
              primary={true}
              onTouchTap={ this.handleOpenSignUp } />
          </li>
          <SignInContainer
            isOpen={ this.state.isSignInOpen }
            onCloseAction={ this.handleCloseSignIn }
          />
          <SignUpContainer
            isOpen={ this.state.isSignUpOpen }
            onCloseAction={ this.handleCloseSignUp }
          />
        </ul>
      );
    }
  }

  render() {

    return (
      <div className={styles.header}>
        <div className={styles['header-left-side']}>
          <ul>
            <li className={styles['site-title']}>
              <Link to="/">
                <div className={styles['site-title-logo']}>
                  <img className={styles['logo-icon']} src={ require('./logo-icon.gif') } alt="Logo"/>
                </div>
                <div className={styles['site-name']}>Simple Blog</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          { this.renderLinks() }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authError }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
