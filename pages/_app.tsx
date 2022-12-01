import { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from 'next/head';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/global/styles.global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico"></link>
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2C2C2C" />
        <meta name="color-scheme" content="#2C2C2C"></meta>
        <title>Кинокаталог</title>
      </Head>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}