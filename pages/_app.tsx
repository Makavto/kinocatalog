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
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
      </Head>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}