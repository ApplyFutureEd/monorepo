import '@styles/index.css';
import 'yup-phone';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';

import {
    AuthenticatedUserProvider,
    configure,
    eggs,
    initAnalytics,
    initCrisp,
    initSentry,
    initWhyDidYouRender
} from '@applyfuture/utils';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

configure();
initSentry();
initAnalytics();
initCrisp();
initWhyDidYouRender();

import '@fortawesome/fontawesome-svg-core/styles.css';

import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core';

fontawesomeConfig.autoAddCss = false;

const App: FC<AppProps> = ({ Component, pageProps }) => {
    eggs[0].useEgg();

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
