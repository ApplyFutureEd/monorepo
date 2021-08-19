import logo from '@assets/images/logo.png';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

import { Logo } from './../logo/Logo';
import { Nav } from './../nav/Nav';

export type Route = {
    href: string;
    label: string;
};

type Props = {
    /**
     * Components displayed in the header.
     */
    components?: Array<ReactNode>;
    /**
     * Mobile components displayed in the header.
     */
    mobileComponents?: Array<ReactNode>;
    /**
     * Mobile menu component.
     */
    mobileMenu: ReactNode;
    /**
     * Routes displayed in the header.
     */
    routes: Array<Route>;
};

export const Header: FC<Props> = (props) => {
    const { components, mobileComponents, mobileMenu, routes } = props;

    return (
        <div className="bg-gray-50 fixed z-40 w-full border-b border-gray-200">
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
                        <div className="flex">
                            <Link href="/">
                                <div className="inline-flex cursor-pointer">
                                    <Logo src={logo} />
                                </div>
                            </Link>
                        </div>

                        <div className="flex items-center -mr-2 -my-2 space-x-4 lg:hidden">
                            {mobileComponents}
                        </div>

                        <Nav routes={routes} />

                        <div className="whitespace-nowrap hidden items-center justify-end ml-4 space-x-8 lg:flex lg:flex-1 lg:w-0">
                            {components}
                        </div>
                    </div>
                </div>
                {mobileMenu}
            </div>
        </div>
    );
};
