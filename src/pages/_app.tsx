import '@styles/index.css';

import { whyDidYouRender } from '@utils/whyDidYouRender';
import type { AppProps } from 'next/app';
import React, { FC } from 'react';

whyDidYouRender();

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;
