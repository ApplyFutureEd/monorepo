import { Dropdown, DropdownItem } from '..';
import { faHeart, faSignOut } from '@fortawesome/pro-light-svg-icons';
import { faUser } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthenticatedUser } from '@applyfuture/utils';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

export const UserMenu: FC = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const user = useAuthenticatedUser();
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prev) => !prev);

    const handleClose = () => {
        setOpen(false);
    };

    const handleFavorites = () => {
        handleClose();
        router.push('/favorites');
    };

    const handleSignOut = () => {
        Auth.signOut();
        window.location.reload();
    };

    const trigger = (
        <button className="flex items-center space-x-2 lg:space-x-0" onClick={handleToggle}>
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
    );

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

    return <Dropdown items={items} open={open} trigger={trigger} onOutsideClick={handleClose} />;
};
