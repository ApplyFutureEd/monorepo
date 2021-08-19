import { onUpdateStudentById, updateStudent } from '@applyfuture/graphql';
import { Notification, SupportedLocale } from '@applyfuture/models';
import { date, getAppNotificationById, useSubscription } from '@applyfuture/utils';
import { faBell } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

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
    studentId?: string;
};

export const Notifications: FC<Props> = (props) => {
    const { notifications: initialNotifications, studentId } = props;

    const [notifications, setNotifications] = useState<Notification[]>();
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
        if (initialNotifications?.length) {
            setNotifications(initialNotifications);
        }
    }, [initialNotifications]);

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

    const handleToggle = () => {
        open ? handleClose() : setOpen(true);
    };

    const updateNotificationsStatus = async () => {
        if (!notifications?.find((notification) => !notification.seen)) {
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
        updateNotificationsStatus();
        setTimeout(() => setShowOldNotifications(false), 1000);
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
                {unseenNotifications && unseenNotifications?.length > 0 && (
                    <div
                        className="absolute z-10 flex items-center justify-center w-6 h-6 text-white text-xs bg-red-500 border-2 border-white rounded-full"
                        style={{ right: '-4px', top: '-4px' }}>
                        {unseenNotifications?.length}
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
                            className="absolute z-40 right-0 mt-2 rounded-md shadow-lg overflow-y-scroll origin-top-right"
                            style={{ maxHeight: '500px', width: '300px' }}>
                            <div className="shadow-xs py-1 bg-white rounded-md">
                                {unseenNotifications?.length === 0 && !showOldNotifications && (
                                    <div className="px-6 py-5 bg-white">
                                        <img
                                            alt={t('application:no-new-notifications-illustration')}
                                            src="/assets/images/application/no-new-notifications.svg"
                                        />
                                        <div className="mt-4 text-center text-gray-800 text-sm font-medium">
                                            {t('application:no-new-notifications')}
                                        </div>
                                        {notifications && notifications?.length > 0 && (
                                            <button
                                                className="mt-2 w-full text-center text-gray-600 hover:text-indigo-500 underline text-sm font-normal"
                                                onClick={handleShowOldNotifications}>
                                                {t('application:show-old-notifications')}
                                            </button>
                                        )}
                                    </div>
                                )}
                                {((unseenNotifications && unseenNotifications?.length > 0) ||
                                    showOldNotifications) &&
                                    notifications?.sort(sortByDate).map((notification, index) => {
                                        const appNotification = getAppNotificationById(
                                            notification.id
                                        );

                                        if (!appNotification) {
                                            return null;
                                        }

                                        const variables = JSON.parse(notification.variables);

                                        if (variables.date) {
                                            variables.date = date({
                                                locale: locale,
                                                scheme: 'd LLLL y',
                                                value: variables.date
                                            });
                                        }

                                        return (
                                            <div key={index} className="cursor-pointer">
                                                <button
                                                    className="relative z-50 px-6 py-5 text-left whitespace-normal hover:bg-gray-100 bg-white"
                                                    onClick={() => {
                                                        handleClick(notification.link);
                                                    }}>
                                                    <div className="text-gray-800 text-sm font-medium">
                                                        {t(appNotification.title, variables)}
                                                    </div>
                                                    <div className="mt-2 text-gray-600 text-sm font-normal">
                                                        {t(appNotification.description, variables)}
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
