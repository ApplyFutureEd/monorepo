import '@styles/index.css';
import '@utils/services/amplify';
import 'yup-phone';

import { initWhyDidYouRender } from '@utils/helpers/whyDidYouRender';
import { AuthenticatedUserProvider } from '@utils/hooks/useAuthenticatedUser';
import { initSentry } from '@utils/services/sentry';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

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
