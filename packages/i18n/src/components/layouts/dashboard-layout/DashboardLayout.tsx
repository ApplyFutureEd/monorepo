import { DropdownItem, Head, Header, MobileMenu, Transition, UserMenu } from '@applyfuture/ui';
import { Button } from '@applyfuture/ui';
import { routes } from '@components/layouts/routes';
import Search from '@components/search/Search';
import Tabs from '@components/tabs/Tabs';
import { faBars, faFilter, faPlus, faSignOut, faTimes } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Filter } from '@pages/index';
import { Auth } from 'aws-amplify';
import { FC, ReactNode, useState } from 'react';

type Props = {
    children: ReactNode;
    description?: string;
    displayForm: boolean;
    handleSearch: (query: string) => void;
    handleFilter: (filter: Filter) => void;
    handleSelected: (tab: string) => void;
    handleDisplayForm: () => void;
    title: string;
    selected: string;
    filter: Filter;
};

const DashboardLayout: FC<Props> = (props) => {
    const {
        children,
        description,
        displayForm,
        handleSearch,
        handleFilter,
        handleSelected,
        handleDisplayForm,
        title,
        selected,
        filter
    } = props;

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
                    <Tabs handleSelected={handleSelected} selected={selected} />
                    <div className="flex flex-col px-0 bg-white sm:px-8">
                        <div className="flex flex-col mt-8 px-1 space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                            <Search handleSearch={handleSearch} />
                            <div className="flex space-x-2">
                                <Button
                                    key={1}
                                    startIcon={faFilter}
                                    variant={isTranslated ? 'primary' : 'secondary'}
                                    onClick={() => {
                                        isTranslated
                                            ? handleFilter(null)
                                            : handleFilter('TRANSLATED');
                                    }}>
                                    Translated
                                </Button>
                                <Button
                                    key={2}
                                    startIcon={faFilter}
                                    variant={isUntranslated ? 'primary' : 'secondary'}
                                    onClick={() => {
                                        isUntranslated
                                            ? handleFilter(null)
                                            : handleFilter('UNTRANSLATED');
                                    }}>
                                    Untranslated
                                </Button>
                                {displayForm ? (
                                    <Button
                                        startIcon={faPlus}
                                        type="button"
                                        variant="primary"
                                        onClick={handleDisplayForm}>
                                        New
                                    </Button>
                                ) : (
                                    <Button
                                        startIcon={faTimes}
                                        type="button"
                                        variant="danger"
                                        onClick={handleDisplayForm}>
                                        Cancel
                                    </Button>
                                )}
                            </div>
                        </div>
                        <div className="px-2 sm:px-0">{children}</div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default DashboardLayout;
