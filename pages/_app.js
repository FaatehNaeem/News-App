// pages/_app.js
import '../Components/App.css';
import Head from 'next/head';
import Navbar from '../Components/Navbar';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);

  

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pcyQZzw3q2dR2b2S6ZxF9vjvZ6v8oAsVvQjG5rR3YQ0mXJbWmtTDV5P0fQHjv6H5"
          crossOrigin="anonymous"
          defer
        />
      </Head>
      <Navbar />
      <LoadingBar color='#f11946' progress={progress} height={3} />
      <Component {...pageProps} setProgress={setProgress} />
    </>
  );
}

export default MyApp;
