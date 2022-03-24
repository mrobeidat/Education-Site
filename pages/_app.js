import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from 'next/head'

import "../styles/global.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
