import React from "react";
import Head from 'next/head';
import {appWithTranslation} from 'next-i18next';
import Layout from '../components/layout/layout';
import '../styles/globals.css';
import {AppProps} from "next/app";
import {I18nextProvider} from "react-i18next";
import i18n from '../i18n'

const MyApp = ({ Component, pageProps }: AppProps ) => {
  return (
  <I18nextProvider i18n={i18n}>
    <Layout>
      <Head>
        <title>Steven's Blog</title>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  </I18nextProvider>
  );
}

export default appWithTranslation(MyApp);
