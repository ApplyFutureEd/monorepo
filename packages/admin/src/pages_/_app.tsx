import '@styles/index.css';
import '@applyfuture/utils/src/services/amplify';
import 'react-contexify/dist/ReactContexify.css';
import 'react-mde/lib/styles/css/react-mde-all.css';
import 'react-datepicker/dist/react-datepicker.css';

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
