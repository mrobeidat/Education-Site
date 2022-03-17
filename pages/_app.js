import Header from "../Components/Header";
import Main from "../Components/Main";

import "../styles/global.scss"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Main/>
      <Component {...pageProps} />
   
    </>
  );
}

export default MyApp;
