import { faBars } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC, ReactNode } from 'react';

import { LanguageMenu } from './../language-menu/LanguageMenu';
import { Logo } from './../logo/Logo';
import { Nav } from './../nav/Nav';

export type Route = {
    href: string;
    label: string;
};

export type Props = {
    /**
     * Components displayed in the header.
     */
    components?: Array<ReactNode>;
    /**
     * Callback function to open the mobile menu.
     */
    handleOpenMobileMenu: () => void;
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
    const { components, handleOpenMobileMenu, mobileMenu, routes } = props;
    const { t } = useTranslation();

    return (
        <div className="bg-gray-50 fixed z-40 w-full border-b border-gray-200">
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
                        <div className="flex">
                            <Link href="/">
                                <div className="inline-flex cursor-pointer">
                                    <Logo />
                                </div>
                            </Link>
                        </div>

                        <div className="flex items-center -mr-2 -my-2 space-x-4 lg:hidden">
                            <LanguageMenu />
                            <button
                                aria-label={t('common:open')}
                                className="inline-flex items-center justify-center p-2 text-gray-500 focus:text-gray-500 hover:text-indigo-500 hover:bg-gray-100 focus:bg-gray-100 rounded-md focus:outline-none transition duration-150 ease-in-out"
                                type="button"
                                onClick={handleOpenMobileMenu}>
                                <FontAwesomeIcon icon={faBars} size="lg" />
                            </button>
                        </div>

                        <Nav routes={routes} />

                        <div className="hidden items-center justify-end ml-4 whitespace-no-wrap space-x-8 lg:flex lg:flex-1 lg:w-0">
                            {components}
                        </div>
                    </div>
                </div>
                {mobileMenu}
            </div>
        </div>
    );
};
