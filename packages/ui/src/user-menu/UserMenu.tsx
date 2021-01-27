import { useAuthenticatedUser } from '@applyfuture/utils';
import { faUser } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

import { Dropdown, DropdownItem } from './../dropdown/Dropdown';

type Props = {
    /**
     * User menu items
     */
    items: Array<DropdownItem>;
};

export const UserMenu: FC<Props> = (props) => {
    const { items } = props;

    const { user } = useAuthenticatedUser();
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prev) => !prev);

    const handleClose = () => {
        setOpen(false);
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

    return (
        <Dropdown
            handleClose={handleClose}
            items={items}
            open={open}
            trigger={trigger}
            onOutsideClick={handleClose}
        />
    );
};
