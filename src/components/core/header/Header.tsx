import Button from '@components/core/button/Button';
import Logo from '@components/core/logo/Logo';
import MobileMenu from '@components/core/mobile-menu/MobileMenu';
import Nav from '@components/core/nav/Nav';
import { faBars } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

const routes = [
    {
        href: '/programs',
        label: 'landing:nav-programs'
    },
    {
        href: '/schools',
        label: 'landing:nav-schools'
    },
    {
        href: '/about',
        label: 'landing:nav-about-us'
    },
    {
        href: '/#contact',
        label: 'landing:nav-contact'
    }
];

const Header: FC = () => {
    const { t } = useTranslation(['auth']);
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed z-40 w-full bg-gray-50 border-b border-gray-200">
            <div className="relative bg-white">
                <div className="mx-auto px-4 max-w-7xl sm:px-6">
                    <div className="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
                        <div className="flex">
                            <a className="inline-flex" href="/">
                                <Logo />
                            </a>
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
                        <Nav routes={routes} />
                        <div className="hidden items-center justify-end ml-4 whitespace-no-wrap space-x-4 lg:flex lg:flex-1 lg:w-0">
                            <a>
                                <Button variant="secondary">{t('auth:sign-in')}</Button>
                            </a>
                            <a>
                                <Button variant="primary">{t('auth:sign-up')}</Button>
                            </a>
                        </div>
                    </div>
                </div>
                {open && <MobileMenu routes={routes} setOpen={setOpen} />}
            </div>
        </div>
    );
};

export default Header;
