import Head from 'next/head';
import Hero from '../src/components/Hero';
import Work from '../src/components/Work';
import Footer from '../src/components/Footer';
import styles from '../styles/landing.module.scss';

export default function Landing() {
  return (
    <>
      <Head>
        <title>Thomas Philippini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Work />
      <Footer />
    </>
  );
}
