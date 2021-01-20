import {
    Button,
    DropdownItem,
    Footer,
    Head,
    Header,
    LanguageMenu,
    MobileMenu,
    Transition,
    UserMenu
} from '@applyfuture/ui';
import { useAuthenticatedUser } from '@applyfuture/utils';
import { loggedRoutes, unloggedRoutes } from '@components/layouts/routes';
import { faHeart, faSignOut } from '@fortawesome/pro-light-svg-icons';
import { Auth } from 'aws-amplify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, ReactNode, useState } from 'react';

type Props = {
    children: ReactNode;
    description?: string;
    title: string;
};

const LandingLayout: FC<Props> = (props) => {
    const { children, description, title } = props;
    const { user } = useAuthenticatedUser();
    const router = useRouter();
    const { t } = useTranslation();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const handleCloseMobileMenu = () => {
        setOpenMobileMenu(false);
    };

    const handleOpenMobileMenu = () => {
        setOpenMobileMenu(true);
    };

    const handleFavorites = () => {
        router.push('/favorites');
    };

    const handleSignOut = () => {
        Auth.signOut();
        window.location.reload();
    };

    const items: Array<DropdownItem> = [
        {
            label: t('navigation:favorites'),
            onClick: handleFavorites,
            startIcon: faHeart
        },
        {
            label: t('navigation:sign-out'),
            onClick: handleSignOut,
            startIcon: faSignOut
        }
    ];

    const components = [
        <LanguageMenu key={0} />,
        <div key={1}>
            {user ? (
                <UserMenu items={items} />
            ) : (
                <div className="flex space-x-4">
                    <Link href="/sign-in">
                        <Button variant="secondary">{t('auth:sign-in')}</Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button variant="primary">{t('auth:sign-up')}</Button>
                    </Link>
                </div>
            )}
        </div>
    ];

    const mobileComponents = [
        <div key={0}>
            {user ? (
                <UserMenu items={items} />
            ) : (
                <div className="flex space-x-4">
                    <Link href="/sign-in">
                        <Button variant="secondary">{t('auth:sign-in')}</Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button variant="primary">{t('auth:sign-up')}</Button>
                    </Link>
                </div>
            )}
        </div>
    ];

    const mobileMenu = (
        <Transition show={openMobileMenu}>
            <MobileMenu
                components={mobileComponents}
                handleCloseMobileMenu={handleCloseMobileMenu}
                routes={user ? loggedRoutes : unloggedRoutes}
            />
        </Transition>
    );

    return (
        <>
            <Head description={description} title={title} />
            <Header
                components={components}
                handleOpenMobileMenu={handleOpenMobileMenu}
                mobileMenu={mobileMenu}
                routes={user ? loggedRoutes : unloggedRoutes}
            />
            <main className="pt-header">{children}</main>
            <Footer />
        </>
    );
};

export default LandingLayout;
