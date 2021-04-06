import Head from 'next/head';
import Waves from '../Waves';

import styles from './work.module.scss';
import projects from './projects';

const Work = () => (
  <section id="projects" className={styles.container}>
    <h2 className={styles.title}>Projects</h2>
    <h3 className={styles.subtitle}>
      Below you can find some of my latest projects
    </h3>

    <section className={styles.projects}>
      {projects.map((item) => (
        <article key={item.title} className={styles.project}>
          <a
            className={'highlight'}
            href={item.source}
            key={item.source}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
          </a>
          <div className={styles.description}>{item.description}</div>
        </article>
      ))}
    </section>
  </section>
);

export default Work;
