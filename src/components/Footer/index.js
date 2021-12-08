import React from 'react';
// import Link from 'next/link';
import styles from './footer.module.scss';
import packageJson from '../../../package.json';

const Footer = () => (
  <footer className={styles.container}>
    <ul className={styles.menu}>
      {/* <li>Made with 💜 &nbsp;by Thomas Philippini</li> */}
      {/* <li>Twitter</li> */}
      {/* <li>
        <Link href="https://github.com/tphilippini">
          <a>
            <i className="fab fa-github"></i>
          </a>
        </Link>
      </li> */}
      <li>☕</li>
      <li className={styles.version}>v{packageJson.version}</li>
    </ul>
  </footer>
);

export default Footer;
