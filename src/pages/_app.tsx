import '@styles/index.css';
import '@utils/amplify';

import { initSentry } from '@utils/sentry';
import { initWhyDidYouRender } from '@utils/whyDidYouRender';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

initSentry();
initWhyDidYouRender();

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <>
        <ToastContainer hideProgressBar autoClose={3000} />
        <Component {...pageProps} />
    </>
);

export default App;
