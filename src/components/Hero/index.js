import Head from 'next/head';

import styles from './hero.module.scss';

const Home = () => (
  <section className={styles.container}>
    <h1 className={styles.title}>
      👋 &nbsp;Hey, I'm Thomas.
      <br />I am a{' '}
      <a className={'highlight highlight--secondary'}>
        javascript developer
      </a>{' '}
      based in France 🇫🇷
    </h1>
    <h2 className={styles.subtitle}>
      Since I started my career as a developer, I have been experimenting and
      trying to bring great ideas, passion, and quality to what I code.
    </h2>
    <h3 className={styles.contact}>
      You can contact me on{' '}
      <a
        className={'highlight highlight--primary'}
        href="mailto:thomas.philippini@gmail.com"
      >
        thomas.philippini@gmail.com
      </a>{' '}
      .
    </h3>
  </section>
);

export default Home;
