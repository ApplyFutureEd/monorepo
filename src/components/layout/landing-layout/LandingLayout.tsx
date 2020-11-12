import Head from '@components/core/head/Head';
import Footer from '@components/layout/footer/Footer';
import React, { FC, ReactNode } from 'react';

type Props = {
    title: string;
    children: ReactNode;
};

const LandingLayout: FC<Props> = (props) => {
    const { title, children } = props;

    return (
        <>
            <Head title={title} />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default LandingLayout;
