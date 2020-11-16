import Footer from '@components/core/footer/Footer';
import Head from '@components/core/head/Head';
import Header from '@components/core/header/Header';
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
