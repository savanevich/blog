import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Header.css';

export class Header extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  };

  static propTypes = {
    switchLanguage: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired
  };

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <ul className={styles['menu-items']}>
          <li>
            <Link className={styles['header-button']} to="/add-post">
              <FormattedMessage id="addPost"/>
            </Link>
          </li>
          <li>
            <Link className={styles['header-button']} to="/signout">
              <FormattedMessage id="signOut"/>
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={styles['menu-items']}>
          <li>
            <Link className={styles['header-button']} to="/signin">
              <FormattedMessage id="signIn"/>
            </Link>
          </li>
          <li>
            <Link className={styles['header-button']} to="/signup">
              <FormattedMessage id="signUp"/>
            </Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    const languageNodes = this.props.intl.enabledLanguages.map(
      lang => <li
        key={lang}
        onClick={() => this.props.switchLanguage(lang)}
        className={lang === this.props.intl.locale ? styles.selected : ''}>
        {lang}</li>
    );

    return (
      <div className={styles.header}>
        <div className={styles['language-switcher']}>
          <ul>
            <li className={styles['site-title']}>
              <Link to="/"><FormattedMessage id="siteTitle"/></Link>
            </li>
            <li>
              <FormattedMessage id="switchLanguage"/>
            </li>
            {languageNodes}
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
