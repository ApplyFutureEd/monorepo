import UserMenu from '@components/auth/user-menu/UserMenu';
import Button from '@components/core/button/Button';
import LanguageMenu from '@components/core/language-menu/LanguageMenu';
import Logo from '@components/core/logo/Logo';
import MobileMenu from '@components/core/mobile-menu/MobileMenu';
import Nav from '@components/core/nav/Nav';
import Transition from '@components/core/transition/Transition';
import { faBars } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuthenticatedUser from '@utils/hooks/useAuthenticatedUser';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

const unloggedRoutes = [
    {
        href: '/programs',
        label: 'navigation:programs'
    },
    {
        href: '/schools',
        label: 'navigation:schools'
    },
    {
        href: '/about',
        label: 'navigation:about-us'
    },
    {
        href: '/#contact',
        label: 'navigation:contact'
    }
];

const loggedRoutes = [
    {
        href: '/profile',
        label: 'navigation:profile'
    },
    {
        href: '/programs',
        label: 'navigation:programs'
    },
    {
        href: '/schools',
        label: 'navigation:schools'
    },
    {
        href: '/applications',
        label: 'navigation:applications'
    },
    {
        href: '/help',
        label: 'navigation:help'
    }
];

const Header: FC = () => {
    const { t } = useTranslation();
    const user = useAuthenticatedUser();
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed z-40 w-full bg-gray-50 border-b border-gray-200">
            <div className="relative bg-white">
                <div className="mx-auto px-4 max-w-7xl sm:px-6">
                    <div className="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
                        <div className="flex">
                            <Link href="/">
                                <div className="inline-flex cursor-pointer">
                                    <Logo />
                                </div>
                            </Link>
                        </div>

                        <div className="flex -mr-2 -my-2 space-x-2 lg:hidden">
                            <button
                                aria-label={t('common:open')}
                                className="inline-flex items-center justify-center p-2 text-gray-500 focus:text-gray-500 hover:text-indigo-500 hover:bg-gray-100 focus:bg-gray-100 rounded-md focus:outline-none transition duration-150 ease-in-out"
                                type="button"
                                onClick={() => setOpen(true)}>
                                <FontAwesomeIcon icon={faBars} size="lg" />
                            </button>
                        </div>
                        <Nav routes={user ? loggedRoutes : unloggedRoutes} />
                        <div className="hidden items-center justify-end ml-4 whitespace-no-wrap space-x-8 lg:flex lg:flex-1 lg:w-0">
                            <LanguageMenu />
                            {user ? (
                                <UserMenu />
                            ) : (
                                <>
                                    <Link href="/sign-in">
                                        <Button variant="secondary">{t('auth:sign-in')}</Button>
                                    </Link>
                                    <Link href="/sign-up">
                                        <Button variant="primary">{t('auth:sign-up')}</Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <Transition show={open}>
                    <MobileMenu routes={user ? loggedRoutes : unloggedRoutes} setOpen={setOpen} />
                </Transition>
            </div>
        </div>
    );
};

export default Header;
