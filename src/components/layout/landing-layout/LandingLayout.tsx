import Head from '@components/core/head/Head';
import Footer from '@components/layout/footer/Footer';
import Header from '@components/layout/header/Header';
import { FC, ReactNode } from 'react';

type Props = {
    title: string;
    children: ReactNode;
};

const LandingLayout: FC<Props> = (props) => {
    const { title, children } = props;

    return (
        <>
            <Head title={title} />
            <Header />
            <main className="pt-header">{children}</main>
            <Footer />
        </>
    );
};

export default LandingLayout;
