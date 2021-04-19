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
          <a target="_blank">
            <i className="fab fa-github-alt fa-lg" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="mailto:thomas.philippini@gmail.com">
          <a target="_blank">
            <i className="far fa-envelope fa-lg" />
          </a>
        </Link>
      </li>
      <li>
        <a
          href="/pdf/resume_tphilippini.pdf"
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
