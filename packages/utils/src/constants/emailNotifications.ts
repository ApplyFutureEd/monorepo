/* eslint-disable sort-keys */
type Email = {
    id: string;
    content: string;
    cta: string;
};

export const emails: Email[] = [
    {
        id: 'post-submission',
        content: 'application:email-post-submission-content',
        cta: 'application:email-post-submission-cta'
    }
];

export const getEmailNotificationById = (id: string): Email | undefined =>
    emails.find((email) => email.id === id);
