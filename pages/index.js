import Head from 'next/head';
import Hero from '../src/components/Hero';
import styles from '../styles/landing.module.scss';

export default function Landing() {
  return (
    <>
      <Head>
        <title>Thomas Philippini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}
