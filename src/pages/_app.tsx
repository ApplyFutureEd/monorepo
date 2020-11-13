import '@styles/index.css';
import '@utils/amplify';

import { initWhyDidYouRender } from '@utils/whyDidYouRender';
import type { AppProps } from 'next/app';
import React, { FC } from 'react';

initWhyDidYouRender();

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;
