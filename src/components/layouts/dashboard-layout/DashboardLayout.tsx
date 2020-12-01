import Head from '@components/core/head/Head';
import Header from '@components/core/header/Header';
import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    description: string;
    title: string;
};
const DashboardLayout: FC<Props> = (props) => {
    const { children, description, title } = props;

    return (
        <>
            <Head description={description} title={title} />
            <Header />
            <main className="main pt-header min-h-screen bg-gray-100">
                <div className="mx-auto py-0 sm:px-6 md:py-6 lg:px-8">
                    <div className="px-4 sm:px-0">{children}</div>
                </div>
            </main>
        </>
    );
};

export default DashboardLayout;
