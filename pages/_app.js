import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../styles/global.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
