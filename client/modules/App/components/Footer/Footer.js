import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; 2016 &middot; Using MERN stack &middot;</p>
      <p><FormattedMessage id="githubMessage" /> : <a href="https://github.com/savonevich" target="_Blank">@savonevich</a></p>
    </div>
  );
}

export default Footer;
