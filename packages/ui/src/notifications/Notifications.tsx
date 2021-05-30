import { onUpdateStudentById, updateStudent } from '@applyfuture/graphql';
import { Notification, SupportedLocale } from '@applyfuture/models';
import { date, getAppNotificationById, useSubscription } from '@applyfuture/utils';
import { faBell } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

import { graphql } from '../../../utils/src/helpers/graphql';
import { OutsideAlerter } from './../outside-alerter/OutsideAlerter';
import { Transition } from './../transition/Transition';

type Props = {
    /**
     * Notifications
     */
    notifications: Notification[];
    /**
     * Student ID required to initiate the subscription
     */
    studentId: string;
};

export const Notifications: FC<Props> = (props) => {
    const { notifications: initialNotifications, studentId } = props;

    const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
    const [item] = useSubscription<any>({
        config: {
            key: 'onUpdateStudentById',
            query: onUpdateStudentById,
            variables: {
                id: studentId
            }
        }
    });

    useEffect(() => {
        if (item?.id) {
            setNotifications(item.notifications);
        }
    }, [item]);

    const unseenNotifications = notifications?.filter((notification) => !notification.seen);
    const { t } = useTranslation();
    const router = useRouter();
    const locale = router.locale as SupportedLocale;

    const [open, setOpen] = useState(false);
    const [showOldNotifications, setShowOldNotifications] = useState(false);

    const handleToggle = () => setOpen((prev) => !prev);

    const updateNotificationsStatus = async () => {
        if (!notifications.find((notification) => !notification.seen)) {
            return;
        }
        const newNotifications = notifications.map((notification) => ({
            ...notification,
            seen: true
        }));
        await graphql(updateStudent, {
            input: { id: studentId, notifications: newNotifications }
        });
    };

    const handleClose = () => {
        setOpen(false);
        setShowOldNotifications(false);
        updateNotificationsStatus();
    };

    const handleShowOldNotifications = () => setShowOldNotifications(true);

    const handleClick = (link: string) => {
        handleClose();
        router.push(link);
    };

    const sortByDate = (a: Notification, b: Notification) =>
        new Date(b.date).getTime() - new Date(a.date).getTime();

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
                        <div
                            className="absolute z-40 right-0 mt-2 truncate rounded-md shadow-lg origin-top-right"
                            style={{ maxHeight: '500px', width: '300px' }}>
                            <div className="py-1 bg-white rounded-md shadow-xs">
                                {unseenNotifications.length === 0 && !showOldNotifications && (
                                    <div className="px-6 py-5 bg-white">
                                        <img
                                            alt={t('application:no-new-notifications-illustration')}
                                            src="/assets/images/application/no-new-notifications.svg"
                                        />
                                        <div className="mt-4 text-center text-gray-800 text-sm font-medium">
                                            {t('application:no-new-notifications')}
                                        </div>
                                        {unseenNotifications.length > 0 && (
                                            <button
                                                className="mt-2 text-center text-gray-600 hover:text-indigo-500 underline text-sm font-normal"
                                                onClick={handleShowOldNotifications}>
                                                {t('application:show-old-notifications')}
                                            </button>
                                        )}
                                    </div>
                                )}
                                {(unseenNotifications.length > 0 || showOldNotifications) &&
                                    notifications.sort(sortByDate).map((notification, index) => {
                                        const appNotification = getAppNotificationById(
                                            notification.id
                                        );

                                        if (!appNotification) {
                                            return null;
                                        }

                                        return (
                                            <div key={index} className="cursor-pointer">
                                                <button
                                                    className="relative z-50 px-6 py-5 text-left whitespace-normal hover:bg-gray-100 bg-white"
                                                    onClick={() => {
                                                        handleClick(notification.link);
                                                    }}>
                                                    <div className="text-gray-800 text-sm font-medium">
                                                        {t(
                                                            appNotification.title,
                                                            JSON.parse(notification.variables)
                                                        )}
                                                    </div>
                                                    <div className="mt-2 text-gray-600 text-sm font-normal">
                                                        {t(
                                                            appNotification.description,
                                                            JSON.parse(notification.variables)
                                                        )}
                                                    </div>
                                                    <div className="mt-2 text-gray-700 text-xs">
                                                        {t('common:elapsed-time-ago', {
                                                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                                            elapsedTime: date({
                                                                locale: locale,
                                                                method: 'DISTANCE',
                                                                value: notification.date
                                                            })!
                                                        })}
                                                    </div>
                                                </button>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </OutsideAlerter>
    );
};
