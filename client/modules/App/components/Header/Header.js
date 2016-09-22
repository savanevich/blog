import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SignInContainer from './../../../Auth/containers/SignInContainer/SignInContainer';

import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import styles from './Header.css';

export class Header extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  };

  static propTypes = {
    signOutUser: PropTypes.func.isRequired
  };

  state = {
    isSignInOpen: false
  };

  handleOpenSignIn = () => {
    this.setState({isSignInOpen: true});
  };

  handleCloseSignIn = () => {
    this.setState({isSignInOpen: false});
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
            <a href="#">
              <FlatButton label="Sign In"
                          primary={true}
                          onTouchTap={this.handleOpenSignIn} />
            </a>
          </li>
          <li>
            <Link to="/signup">
              <FlatButton label="Sign Up" primary={true} />
            </Link>
          </li>
          <Dialog
            title="Sign In Form"
            actions={[
              <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseSignIn}
              />,
              <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCloseSignIn}
              />
            ]}
            modal={false}
            open={this.state.isSignInOpen}
            onRequestClose={this.handleCloseSignIn}
          >
            <SignInContainer />
          </Dialog>
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

export default connect(mapStateToProps)(Header);
