import '@styles/index.css';
import 'yup-phone';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';

import {
    AuthenticatedUserProvider,
    configure,
    eggs,
    initSentry,
    initWhyDidYouRender
} from '@applyfuture/utils';
import CookieBanner from '@components/common/cookies-banner/CookiesBanner';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

configure();
initSentry();
initWhyDidYouRender();

const App: FC<AppProps> = ({ Component, pageProps }) => {
    eggs[0].useEgg();

    return (
        <>
            <AuthenticatedUserProvider>
                <ToastContainer />
                <CookieBanner />
                <Component {...pageProps} />
            </AuthenticatedUserProvider>
        </>
    );
};

export default App;
