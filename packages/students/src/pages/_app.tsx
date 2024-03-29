import '@styles/index.css';
import '@styles/shared.css';

import { AuthenticatedUserProvider, configure, initAnalytics, initCrisp } from '@applyfuture/utils';
import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

configure();
initAnalytics();
initCrisp();
fontawesomeConfig.autoAddCss = false;

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <AuthenticatedUserProvider>
                <ToastContainer />
                <Component {...pageProps} />
            </AuthenticatedUserProvider>
        </>
    );
};

export default App;
