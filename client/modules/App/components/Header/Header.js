import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li
      key={lang}
      onClick={() => props.switchLanguage(lang)}
      className={lang === props.intl.locale ? styles.selected : ''}>
      {lang}</li>
  );

  return (
    <div className={styles.header}>
      <div className={styles['language-switcher']}>
        <ul>
          <li className={styles['site-title']}>
            <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
          </li>
          <li>
            <FormattedMessage id="switchLanguage" />
          </li>
          {languageNodes}
        </ul>
      </div>
      <div className={styles.content}>
        <ul className={styles['menu-items']}>
          <li><Link className={styles['header-button']} to="/add-post" ><FormattedMessage id="addPost" /></Link></li>
          <li><Link className={styles['header-button']} to="/signin"><FormattedMessage id="signIn" /></Link></li>
          <li><Link className={styles['header-button']} to="/signup"><FormattedMessage id="signUp" /></Link></li>
        </ul>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired
};

export default Header;
