import Head from 'next/head';

import styles from './hero.module.scss';

export default () => (
  <section className={styles.container}>
    <h1 className={styles.title}>
      👋 &nbsp;Hey, I am Thomas,
      <br />a javascript developer based in France 🇫🇷
    </h1>
    <h2 className={styles.subtitle}>
      Since I started my career as a developer, I have been experimenting and
      trying to bring great ideas, passion, and quality to what I code.
    </h2>
    <h3 className={styles.contact}>
      You can contact me on&nbsp;
      <a href="mailto:thomas.philippini@gmail.com">
        thomas.philippini@gmail.com
      </a>
      .
    </h3>
  </section>
);
