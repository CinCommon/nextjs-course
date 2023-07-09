import React from "react";
import Head from 'next/head';
import {appWithTranslation} from 'next-i18next';
import Layout from '../components/layout/layout';
import '../styles/globals.css';
import {AppProps} from "next/app";

const MyApp = ({ Component, pageProps }: AppProps ) => {
  return (
    <Layout>
      <Head>
        <title>Steven's Blog</title>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
