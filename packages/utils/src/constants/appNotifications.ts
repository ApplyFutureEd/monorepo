/* eslint-disable sort-keys */

type AppNotification = {
    id: 'post-internal-review-approval';
    title: 'application:notification-internal-review-approved-title';
    description: 'application:notification-internal-review-approved-description';
};

const appNotifications: AppNotification[] = [
    {
        id: 'post-internal-review-approval',
        title: 'application:notification-internal-review-approved-title',
        description: 'application:notification-internal-review-approved-description'
    }
];

export const getAppNotificationById = (id: string): AppNotification | undefined =>
    appNotifications.find((appNotification) => appNotification.id === id);
