import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import styles from './Header.css';

export class Header extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  };

  static propTypes = {
    signOutUser: PropTypes.func.isRequired
  };

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <ul className={styles['menu-items']}>
          <li>
            <Link className={styles['header-button']} to="/add-post">
              Add Post
            </Link>
          </li>
          <li>
            <a
              className={styles['header-button']}
              href="#"
              onClick={() => this.props.signOutUser()}>
              Sign Out
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={styles['menu-items']}>
          <li>
            <Link className={styles['header-button']} to="/signin">
              Sign In
            </Link>
          </li>
          <li>
            <Link className={styles['header-button']} to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      );
    }
  }

  render() {

    return (
      <div className={styles.header}>
        <div className={styles['language-switcher']}>
          <ul>
            <li className={styles['site-title']}>
              <Link to="/">Blog</Link>
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
