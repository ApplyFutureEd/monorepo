import '@styles/index.css';
import '@applyfuture/utils/src/services/amplify';
import 'yup-phone';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';

import {
    AuthenticatedUserProvider,
    initSentry,
    initWhyDidYouRender,
    setCountryCode
} from '@applyfuture/utils';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

setCountryCode();
initSentry();
initWhyDidYouRender();

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <AuthenticatedUserProvider>
                <ToastContainer hideProgressBar autoClose={3000} />
                <Component {...pageProps} />
            </AuthenticatedUserProvider>
        </>
    );
};

export default App;
