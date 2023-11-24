import Head from 'next/head';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import '../../app/globals.css';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UFT-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Header />
      <main className="page-wrapper">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
