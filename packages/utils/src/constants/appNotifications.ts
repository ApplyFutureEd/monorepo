/* eslint-disable sort-keys */

type AppNotification = {
    id: string;
    title: string;
    description: string;
};

const appNotifications: AppNotification[] = [
    {
        id: 'post-internal-review-approval',
        title: 'application:notification-internal-review-approved-title',
        description: 'application:notification-internal-review-approved-description'
    },
    {
        id: 'post-internal-review-rejection',
        title: 'application:notification-internal-review-refused-title',
        description: 'application:notification-internal-review-refused-description'
    },
    {
        id: 'post-school-review-approval',
        title: 'application:notification-school-review-approved-title',
        description: 'application:notification-school-review-approved-description'
    },
    {
        id: 'post-school-review-rejection',
        title: 'application:notification-school-review-refused-title',
        description: 'application:notification-school-review-refused-description'
    },
    {
        id: 'post-school-interview-approval',
        title: 'application:notification-school-interview-title',
        description: 'application:notification-school-interview-description'
    },
    {
        id: 'post-school-result-accepted',
        title: 'application:notification-school-result-accepted-title',
        description: 'application:notification-school-result-accepted-description'
    },
    {
        id: 'post-school-result-waiting-list',
        title: 'application:notification-school-result-waiting-list-title',
        description: 'application:notification-school-result-waiting-list-description'
    },
    {
        id: 'post-school-result-rejected',
        title: 'application:notification-school-result-rejected-title',
        description: 'application:notification-school-result-rejected-description'
    },
    {
        id: 'post-school-tuitions-fee-payment-approval',
        title: 'application:notification-school-tuitions-fee-payment-title',
        description: 'application:notification-school-tuitions-fee-payment-description'
    },
    {
        id: 'post-decision-letter-approval',
        title: 'application:notification-decision-letter-title',
        description: 'application:notification-decision-letter-description'
    }
];

export const getAppNotificationById = (id: string): AppNotification | undefined =>
    appNotifications.find((appNotification) => appNotification.id === id);
