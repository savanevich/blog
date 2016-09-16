import React from 'react';

import styles from './Footer.css';

export function Footer() {
  return (
    <div className={styles['footer']}>
      <p>&copy; 2016 Using MERN stack &middot; by <a href="https://github.com/savonevich" target="_Blank">@savonevich</a></p>
    </div>
  );
}

export default Footer;
