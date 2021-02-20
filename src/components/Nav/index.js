import Head from 'next/head';
import Link from 'next/link';

import styles from './nav.module.scss';

const Nav = () => (
  <nav className={styles.container} role="navigation">
    <ul className={styles.menu}>
      <li>
        <Link href="/">
          <a className={styles.logo}>tp</a>
        </Link>
      </li>

      <li>
        <Link href="#projects">
          <a>projects</a>
        </Link>
      </li>
      {/* <li>
        <Link href="/">
          <a className={'secondary'}>resume</a>
        </Link>
      </li> */}
    </ul>
  </nav>
);

export default Nav;
