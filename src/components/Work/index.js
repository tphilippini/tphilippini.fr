import Head from 'next/head';

import styles from './work.module.scss';

const data = require('./projects.json');
console.log(data);

const Work = () => (
  <section id="projects" className={styles.container}>
    <h2 className={styles.title}>Projects</h2>
    <h3 className={styles.subtitle}>
      Below you can find some of my latest projects
    </h3>

    <section className={styles.cards}>
      {data.map((item, index) => (
        <article key={index} className={styles.card}>
          {item.id} In progress...
        </article>
      ))}
    </section>
  </section>
);

export default Work;
