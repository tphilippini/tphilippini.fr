import React from 'react';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.container}>
    <ul className={styles.menu}>
      {/* <li>Made with 💜 &nbsp;by Thomas Philippini</li> */}
      {/* <li>Twitter</li>
      <li>Github</li> */}
      <li>☕</li>
    </ul>
  </footer>
);

export default Footer;
