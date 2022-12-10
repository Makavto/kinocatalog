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
import { wrapper } from "../core/store";
import { Provider } from "react-redux";
import { setSeriesGenre } from "../core/store/action-creators/series";
import { getRandomGenre } from "../core/helpers/randomGenre.helper";

export default function App({ Component, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return(
    <Provider store={store}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico"></link>
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2C2C2C" />
        <meta name="color-scheme" content="#2C2C2C"></meta>
        <title>Кинокаталог</title>
      </Head>
      <Layout>
        <Component {...props.pageProps}/>
      </Layout>
    </Provider>
  )
}