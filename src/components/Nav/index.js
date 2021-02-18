import Head from 'next/head';
import Link from 'next/link';

import styles from './nav.module.scss';

export default () => (
  <nav className={styles.container} role="navigation">
    <ul className={styles.menu}>
      <li>
        <Link href="/">
          <a className={styles.logo}>tp</a>
        </Link>
      </li>

      {/* <li>workshop</li>
      <li>about</li>
      <li>resume</li> */}
    </ul>
  </nav>
);
