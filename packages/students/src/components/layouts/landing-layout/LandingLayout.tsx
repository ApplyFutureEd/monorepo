import { Footer, Head, Header } from '@applyfuture/ui';
import { loggedRoutes, unloggedRoutes } from '@components/layouts/routes';
import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    description?: string;
    title: string;
};

const LandingLayout: FC<Props> = (props) => {
    const { children, description, title } = props;

    return (
        <>
            <Head description={description} title={title} />
            <Header loggedRoutes={loggedRoutes} unloggedRoutes={unloggedRoutes} />
            <main className="pt-header">{children}</main>
            <Footer />
        </>
    );
};

export default LandingLayout;
