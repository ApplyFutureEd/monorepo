import '../../../admin/src/pages/node_modules/@applyfuture/students/styles/index.css';
import '@applyfuture/utils/src/services/amplify';
import 'yup-phone';

import { AuthenticatedUserProvider, initSentry, initWhyDidYouRender } from '@applyfuture/utils';
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
