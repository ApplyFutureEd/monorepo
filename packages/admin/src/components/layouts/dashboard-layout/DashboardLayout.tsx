import { Head, Header } from '@applyfuture/ui';
import { loggedRoutes, unloggedRoutes } from '@components/layouts/routes';
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
            <Header loggedRoutes={loggedRoutes} unloggedRoutes={unloggedRoutes} />
            <main className="main pt-header min-h-screen bg-gray-100">
                <div className="max-w-7xl mx-auto py-0 sm:px-6 md:py-6 lg:px-8">
                    <div className="px-4 sm:px-0">{children}</div>
                </div>
            </main>
        </>
    );
};

export default DashboardLayout;
