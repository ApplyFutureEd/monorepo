import UserMenu from '@components/auth/user-menu/UserMenu';
import Button from '@components/core/button/Button';
import Logo from '@components/core/logo/Logo';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuthenticatedUser from '@utils/hooks/useAuthenticatedUser';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    routes: {
        href: string;
        label: string;
    }[];
    setOpen: (value: boolean) => void;
};

const MobileMenu: FC<Props> = (props) => {
    const { routes, setOpen } = props;
    const user = useAuthenticatedUser();
    const { t } = useTranslation();

    return (
        <div className="absolute z-10 z-30 inset-x-0 top-0 p-2 transform origin-top-right transition lg:hidden">
            <div className="rounded-lg shadow-lg">
                <div className="bg-white rounded-lg shadow-xs divide-gray-50 divide-y-2">
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
                                    onClick={() => setOpen(false)}>
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
                                        onClick={() => setOpen(false)}>
                                        <Link href={route.href}>
                                            <div className="flex -m-3 p-3 hover:bg-gray-50 transition duration-150 ease-in-out">
                                                {t(route.label)}
                                            </div>
                                        </Link>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                    <div className="flex items-center p-3 space-x-4">
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
        </div>
    );
};

export default MobileMenu;
