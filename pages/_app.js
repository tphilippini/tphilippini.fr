import Head from 'next/head';

import Nav from '../src/components/Nav';
import Waves from '../src/components/Waves';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, minimal-ui, shrink-to-fit=no"
        />
      </Head>

      <Waves />

      <Nav />

      <Component {...pageProps} />
    </>
  );
}
