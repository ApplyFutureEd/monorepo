import { DropdownItem, Head, Header, MobileMenu, Transition, UserMenu } from '@applyfuture/ui';
import { routes } from '@components/layouts/routes';
import Tabs from '@components/tabs/Tabs';
import { faBars, faSignOut } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Auth } from 'aws-amplify';
import { FC, ReactNode, useState } from 'react';

type Props = {
    children: ReactNode;
    description?: string;
    title: string;
};
const DashboardLayout: FC<Props> = (props) => {
    const { children, description, title } = props;
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
            label: 'Sign out',
            onClick: handleSignOut,
            startIcon: faSignOut
        }
    ];

    const headerComponents = [<UserMenu key={0} items={userMenuItems} />];

    const mobileHeaderComponents = [
        <button
            key={1}
            aria-label="Open"
            className="inline-flex items-center justify-center p-2 text-gray-500 focus:text-gray-500 hover:text-indigo-500 hover:bg-gray-100 focus:bg-gray-100 rounded-md focus:outline-none transition duration-150 ease-in-out"
            type="button"
            onClick={handleOpenMobileMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
    ];

    const mobileMenuComponents = [<UserMenu key={0} items={userMenuItems} />];

    const mobileMenu = (
        <Transition show={openMobileMenu}>
            <MobileMenu
                components={mobileMenuComponents}
                handleCloseMobileMenu={handleCloseMobileMenu}
                routes={routes}
            />
        </Transition>
    );

    return (
        <>
            <Head description={description} title={title} />
            <Header
                components={headerComponents}
                mobileComponents={mobileHeaderComponents}
                mobileMenu={mobileMenu}
                routes={routes}
            />
            <main className="main pt-header min-h-screen bg-gray-100">
                <div className="max-w-7xl mx-auto py-0 sm:px-6 md:py-6 lg:px-8">
                    <Tabs />
                    <div className="px-4 sm:px-0">{children}</div>
                </div>
            </main>
        </>
    );
};

export default DashboardLayout;
