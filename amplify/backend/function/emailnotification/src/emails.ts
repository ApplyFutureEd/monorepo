/* eslint-disable sort-keys */
type Email = {
    id: string;
    subject: string;
    title: string;
    body: string;
    ctaText: string;
    footer: string;
};

export const emails: Email[] = [
    {
        id: 'post-submission',
        subject: 'email-post-submission-subject',
        title: 'email-post-submission-title',
        body: 'email-post-submission-body',
        ctaText: 'email-post-submission-cta-text',
        footer: 'email-generic-footer'
    }
];

export const getEmailNotificationById = (id: string): Email | undefined =>
    emails.find((email) => email.id === id);
