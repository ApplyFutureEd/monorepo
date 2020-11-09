import Head from '@components/core/Head';
import React, { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const LandingLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Head />
            <main>{children}</main>
        </>
    );
};

export default LandingLayout;
