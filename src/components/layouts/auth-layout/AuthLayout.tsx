import Head from '@components/core/head/Head';
import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    title: string;
};

const AuthLayout: FC<Props> = (props) => {
    const { children, title } = props;

    return (
        <>
            <Head title={title} />
            <div className="flex min-h-screen bg-white">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">{children}</div>
                </div>
                <div className="relative hidden flex-1 w-0 lg:block">
                    <img
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain"
                        src="/assets/images/landing/auth.svg"
                    />
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
