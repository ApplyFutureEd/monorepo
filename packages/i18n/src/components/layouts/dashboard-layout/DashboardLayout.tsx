import { DropdownItem, Head, Header, MobileMenu, Transition, UserMenu } from '@applyfuture/ui';
import { Button } from '@applyfuture/ui';
import { routes } from '@components/layouts/routes';
import Search from '@components/search/Search';
import Tabs from '@components/tabs/Tabs';
import TabsView from '@components/tabs/TabsView';
import { faBars, faSignOut } from '@fortawesome/pro-light-svg-icons';
import { faFilter } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Auth } from 'aws-amplify';
import { FC, ReactNode, useState } from 'react';

const Filter = require('../../../pages/index');

type Props = {
    children: ReactNode;
    description?: string;
    title: string;
    handleSearch: any;
    handleFilter: any;
    filter: Filter;
};

export type Filter = 'TRANSLATED' | 'UNTRANSLATED' | null;

const DashboardLayout: FC<Props> = (props) => {
    const { children, description, title, handleSearch, handleFilter, filter } = props;
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

    const isTranslated = filter === 'TRANSLATED';
    const isUntranslated = filter === 'UNTRANSLATED';

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
                <div className="mx-auto py-0 max-w-7xl sm:px-6 md:py-6 lg:px-8">
                    <Tabs />
                    <TabsView />
                    <div style={{ display: 'flex' }}>
                        <Search handleSearch={handleSearch} />
                        <Button
                            startIcon={faFilter}
                            variant={isTranslated ? 'primary' : 'secondary'}
                            onClick={() => {
                                isTranslated ? handleFilter(null) : handleFilter('TRANSLATED');
                            }}>
                            Translated
                        </Button>
                        <Button
                            startIcon={faFilter}
                            variant={isUntranslated ? 'primary' : 'secondary'}
                            onClick={() => {
                                isUntranslated ? handleFilter(null) : handleFilter('UNTRANSLATED');
                            }}>
                            Untranslated
                        </Button>
                    </div>
                    <div className="px-4 sm:px-0">{children}</div>
                </div>
            </main>
        </>
    );
};

export default DashboardLayout;
