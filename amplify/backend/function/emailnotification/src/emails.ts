/* eslint-disable sort-keys */
type Email = {
    id: string;
    subject: string;
    title: string;
    body: string;
    ctaLink: string;
    ctaText: string;
    footer: string;
};

export const emails: Email[] = [
    {
        id: 'post-submission',
        subject: '',
        title: '',
        body: '',
        ctaLink: '',
        ctaText: '',
        footer: ''
    }
];

export const getEmailNotificationById = (id: string): Email | undefined =>
    emails.find((email) => email.id === id);
