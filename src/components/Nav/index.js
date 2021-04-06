import Head from 'next/head';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './nav.module.scss';

const Nav = () => (
  <nav className={styles.container} role="navigation">
    <ul className={styles.menu}>
      <li>
        <Link href="/">
          <a className={styles.logo}>
            <div className={styles.icon}>💻</div>
            <h1>tp</h1>
          </a>
        </Link>
      </li>

      <li>
        <Link href="https://github.com/tphilippini">
          <a>
            <i class="fab fa-github-alt fa-2x" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="mailto:thomas.philippini@gmail.com">
          <a>
            <i class="far fa-envelope fa-2x" />
          </a>
        </Link>
      </li>
      <li>
        <a
          href="/pdf/thomas_philippini.pdf"
          target="_blank"
          className={classnames('secondary', styles.resume)}
        >
          Download my resume
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
