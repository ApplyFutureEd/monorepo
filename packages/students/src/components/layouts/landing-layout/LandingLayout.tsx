import {
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import { Notification } from '@applyfuture/models';
import {
    Button,
    DropdownItem,
    Footer,
    Head,
    Header,
    LanguageMenu,
    MobileMenu,
    Notifications,
    Transition,
    UserMenu
} from '@applyfuture/ui';
import { useAuthenticatedUser, useQuery } from '@applyfuture/utils';
import CookiesBanner from '@components/common/cookies-banner/CookiesBanner';
import { loggedRoutes, unloggedRoutes } from '@components/layouts/routes';
import { faBars, faSignOut } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Auth } from 'aws-amplify';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC, ReactNode, useState } from 'react';

type Props = {
    children: ReactNode;
    description?: string;
    title: string;
};

const LandingLayout: FC<Props> = (props) => {
    const { children, description, title } = props;
    const { user } = useAuthenticatedUser();
    const { t } = useTranslation();

    const { data: studentData } = useQuery<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(
        getStudentByEmail,
        { email: user?.attributes.email }
    );
    const notifications = studentData?.getStudentByEmail?.items?.[0]
        ?.notifications as Notification[];
    const studentId = studentData?.getStudentByEmail?.items?.[0]?.id;

    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const handleCloseMobileMenu = () => {
        setOpenMobileMenu(false);
    };

    const handleOpenMobileMenu = () => {
        setOpenMobileMenu(true);
    };

    const handleSignOut = () => {
        Auth.signOut();
        window.location.reload();
    };

    const userMenuItems: Array<DropdownItem> = [
        {
            label: t('navigation:sign-out'),
            onClick: handleSignOut,
            startIcon: faSignOut
        }
    ];

    const headerComponents = [
        <LanguageMenu key={0} />,
        <div key={1}>
            {user ? (
                <div className="flex space-x-8">
                    <Notifications notifications={notifications} studentId={studentId} />
                    <UserMenu items={userMenuItems} />
                </div>
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

    const headerMobileComponents = [
        <LanguageMenu key={0} />,
        <button
            key={1}
            aria-label={t('common:open')}
            className="inline-flex items-center justify-center p-2 text-gray-500 focus:text-gray-500 hover:text-indigo-500 hover:bg-gray-100 focus:bg-gray-100 rounded-md focus:outline-none transition duration-150 ease-in-out"
            type="button"
            onClick={handleOpenMobileMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
    ];

    const mobileMenuComponents = [
        <div key={0}>
            {user ? (
                <div className="flex space-x-8">
                    <Notifications notifications={notifications} studentId={studentId} />
                    <UserMenu items={userMenuItems} />
                </div>
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
                components={mobileMenuComponents}
                handleCloseMobileMenu={handleCloseMobileMenu}
                routes={user ? loggedRoutes : unloggedRoutes}
            />
        </Transition>
    );

    return (
        <>
            <Head description={description} title={title} />
            <Header
                components={headerComponents}
                mobileComponents={headerMobileComponents}
                mobileMenu={mobileMenu}
                routes={user ? loggedRoutes : unloggedRoutes}
            />
            <main className="pt-header">{children}</main>
            <CookiesBanner />
            <Footer />
        </>
    );
};

export default LandingLayout;
