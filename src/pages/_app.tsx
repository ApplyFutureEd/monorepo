import '@styles/index.css';
import '@utils/amplify';

import { initSentry } from '@utils/sentry';
import { initWhyDidYouRender } from '@utils/whyDidYouRender';
import type { AppProps } from 'next/app';
import { FC } from 'react';

initSentry();
initWhyDidYouRender();

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;
