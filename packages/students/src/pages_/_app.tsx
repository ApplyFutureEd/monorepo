import '@styles/index.css';
import 'yup-phone';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';

import {
    AuthenticatedUserProvider,
    configure,
    initSentry,
    initWhyDidYouRender,
    setCountryCode
} from '@applyfuture/utils';
import type { AppProps } from 'next/app';
import { FC, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

configure();
initSentry();
initWhyDidYouRender();

const App: FC<AppProps> = ({ Component, pageProps }) => {
    useEffect(() => {
        setCountryCode();
    }, []);

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
