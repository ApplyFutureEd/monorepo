import Head from '@components/core/head/Head';
import Footer from '@components/layout/footer/Footer';
import Header from '@components/layout/header/Header';
import React, { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    description: string;
    title: string;
};

const LandingLayout: FC<Props> = (props) => {
    const { children, description, title } = props;

    return (
        <>
            <Head description={description} title={title} />
            <Header />
            <main className="pt-header">{children}</main>
            <Footer />
        </>
    );
};

export default LandingLayout;
