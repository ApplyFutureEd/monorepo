import { DropdownItem, Head, Header, MobileMenu, Transition, UserMenu } from '@applyfuture/ui';
import { routes } from '@components/layouts/routes';
import { faSignOut } from '@fortawesome/pro-light-svg-icons';
import { Auth } from 'aws-amplify';
import React, { FC, ReactNode, useState } from 'react';

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

    const items: Array<DropdownItem> = [
        {
            label: 'Sign out',
            onClick: handleSignOut,
            startIcon: faSignOut
        }
    ];

    const components = [<UserMenu key={0} items={items} />];

    const mobileMenu = (
        <Transition show={openMobileMenu}>
            <MobileMenu
                components={components}
                handleCloseMobileMenu={handleCloseMobileMenu}
                routes={routes}
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
                routes={routes}
            />
            <main className="main pt-header min-h-screen bg-gray-100">
                <div className="max-w-7xl mx-auto py-0 sm:px-6 md:py-6 lg:px-8">
                    <div className="px-4 sm:px-0">{children}</div>
                </div>
            </main>
        </>
    );
};

export default DashboardLayout;
