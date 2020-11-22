import OutsideAlerter from '@components/core/outside-alerter/OutsideAlerter';
import Transition from '@components/core/transition/Transition';
import { faHeart, faSignOut } from '@fortawesome/pro-light-svg-icons';
import { faUser } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuthenticatedUser from '@utils/useAuthenticatedUser';
import { Auth } from 'aws-amplify';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';

const UserMenu: FC = () => {
    const { t } = useTranslation();
    const user = useAuthenticatedUser();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => setOpen(!open);

    const handleSignOut = () => {
        Auth.signOut();
        window.location.reload();
    };

    return (
        <OutsideAlerter callback={handleClose}>
            <div className="flex items-center">
                <div className="relative">
                    <button
                        className="flex items-center space-x-2 lg:space-x-0"
                        onClick={handleToggle}>
                        <div
                            aria-haspopup="true"
                            aria-label="User menu"
                            className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded-full cursor-pointer"
                            id="user-menu">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="text-base font-medium leading-6 lg:hidden">
                            {user?.attributes.email}
                        </div>
                    </button>

                    <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        show={open}>
                        <div className="absolute z-40 right-0 mt-2 truncate rounded-md shadow-lg origin-top-right">
                            <div className="py-1 bg-white rounded-md shadow-xs">
                                <a
                                    className="flex items-center px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 space-x-2"
                                    href="/favorites"
                                    onClick={handleClose}>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <div>{t('navigation:favorites')}</div>
                                </a>
                                <button
                                    className="flex items-center px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer space-x-2"
                                    onClick={handleSignOut}>
                                    <FontAwesomeIcon icon={faSignOut} />
                                    <div>{t('navigation:sign-out')}</div>
                                </button>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </OutsideAlerter>
    );
};

export default UserMenu;
