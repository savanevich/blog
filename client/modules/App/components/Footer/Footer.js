import React from 'react';

import styles from './Footer.css';
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; 2016 Using MERN stack &middot;</p>
      <p>Github link: <a href="https://github.com/savonevich" target="_Blank">@savonevich</a></p>
    </div>
  );
}

export default Footer;
