import { Notification } from '@applyfuture/models';
import { faBell } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';

import { OutsideAlerter } from './../outside-alerter/OutsideAlerter';
import { Transition } from './../transition/Transition';

type Props = {
    /**
     * Notifications
     */
    notifications: Array<Notification>;
};

export const Notifications: FC<Props> = (props) => {
    const { notifications } = props;
    const unseenNotifications = notifications?.filter((notification) => !notification.seen);

    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prev) => !prev);

    const handleClose = () => {
        setOpen(false);
    };

    const trigger = (
        <button className="flex items-center focus:outline-none" onClick={handleToggle}>
            <div
                aria-haspopup="true"
                aria-label="Notifications"
                className="relative flex items-center justify-center w-10 h-10 text-gray-500 hover:bg-gray-100 bg-white rounded-full cursor-pointer"
                id="notifications">
                <FontAwesomeIcon icon={faBell} size="lg" />
                {unseenNotifications.length > 0 && (
                    <div
                        className="absolute z-10 flex items-center justify-center w-6 h-6 text-white text-xs bg-red-500 border-2 border-white rounded-full"
                        style={{ right: '-4px', top: '-4px' }}>
                        {unseenNotifications.length}
                    </div>
                )}
            </div>
        </button>
    );

    return (
        <OutsideAlerter callback={handleClose}>
            <div className="flex items-center">
                <div className="relative">
                    {trigger}
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
                                {notifications.map((notification) => {
                                    return <div key={notification.id}>{notification.id}</div>;
                                })}
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </OutsideAlerter>
    );
};
