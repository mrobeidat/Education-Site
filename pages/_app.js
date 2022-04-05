import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from 'next/head'
import "../styles/global.scss";
import { SpinnerDotted } from 'spinners-react';
import React, { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);
  return (
    <>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      {loading ? (
        <SpinnerDotted className="spinner" size={200} thickness={45} speed={121} color="rgba(57, 172, 169, 1)" secondaryColor="rgba(57, 107, 172, 1)" />
      ) : (
      <div className="main__div">
      <Navbar />

      <Component {...pageProps} />
      <Footer />
      </div>
      )}
    </>
  );
}

export default MyApp;
