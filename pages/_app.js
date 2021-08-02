import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Fix SSR rendering for Material UI
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
