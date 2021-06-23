import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, ReactNode } from 'react';

import { Route } from '../header/Header';
import { OutsideAlerter } from '../outside-alerter/OutsideAlerter';
import { Logo } from './../logo/Logo';

type Props = {
    /**
     * Components displayed at the bottom of the mobile menu.
     */
    components?: Array<ReactNode>;
    /**
     * Callback function to close the mobile menu.
     */
    handleCloseMobileMenu: () => void;
    /**
     * Routes displayed in the header.
     */
    routes: Array<Route>;
};

export const MobileMenu: FC<Props> = (props) => {
    const { components, handleCloseMobileMenu, routes } = props;
    const { t } = useTranslation();

    return (
        <OutsideAlerter callback={handleCloseMobileMenu}>
            <div className="absolute z-10 z-30 inset-x-0 top-0 p-2 transform origin-top-right transition lg:hidden">
                <div className="rounded-lg shadow-lg">
                    <div className="divide-gray-50 bg-white rounded-lg shadow-xs divide-y-2">
                        <div className="pb-6 pt-5 px-5 space-y-6">
                            <div className="flex items-center justify-between">
                                <Link href="/">
                                    <div className="inline-flex cursor-pointer">
                                        <Logo />
                                    </div>
                                </Link>
                                <div className="-mr-2">
                                    <button
                                        aria-label={t('common:close')}
                                        className="inline-flex items-center justify-center p-2 text-gray-500 focus:text-gray-500 hover:text-indigo-500 hover:bg-gray-100 focus:bg-gray-100 rounded-md focus:outline-none transition duration-150 ease-in-out"
                                        type="button"
                                        onClick={handleCloseMobileMenu}>
                                        <FontAwesomeIcon icon={faTimes} size="lg" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <nav className="grid gap-y-8">
                                    {routes.map((route) => (
                                        <button
                                            key={route.href}
                                            type="button"
                                            onClick={handleCloseMobileMenu}>
                                            <Link href={route.href}>
                                                <div className="hover:bg-gray-50 flex -m-3 p-3 transition duration-150 ease-in-out">
                                                    {t(route.label)}
                                                </div>
                                            </Link>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="flex items-center p-3 space-x-4">{components}</div>
                    </div>
                </div>
            </div>
        </OutsideAlerter>
    );
};
