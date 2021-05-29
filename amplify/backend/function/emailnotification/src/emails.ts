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
        ctaText: 'email-follow-application-cta-text',
        footer: 'email-generic-footer'
    },
    {
        id: 'post-internal-review-approval',
        subject: 'email-post-internal-review-approval-subject',
        title: 'email-post-internal-review-approval-title',
        body: 'email-post-internal-review-approval-body',
        ctaText: 'email-follow-application-cta-text',
        footer: 'email-generic-footer'
    },
    {
        id: 'post-internal-review-rejection',
        subject: 'email-post-internal-review-rejection-subject',
        title: 'email-post-internal-review-rejection-title',
        body: 'email-post-internal-review-rejection-body',
        ctaText: 'email-post-internal-review-rejection-cta-text',
        footer: 'email-generic-footer'
    },
    {
        id: 'post-school-review-approval',
        subject: 'email-post-school-review-approval-subject',
        title: 'email-post-school-review-approval-title',
        body: 'email-post-school-review-approval-body',
        ctaText: 'email-follow-application-cta-text',
        footer: 'email-generic-footer'
    },
    {
        id: 'post-school-result-approval',
        subject: 'email-post-school-result-approval-subject',
        title: 'email-post-school-result-approval-title',
        body: 'email-post-school-result-approval-body',
        ctaText: 'email-post-school-result-approval-cta-text',
        footer: 'email-generic-footer'
    },
    {
        id: 'post-school-result-waiting-list',
        subject: 'email-post-school-result-waiting-list-subject',
        title: 'email-post-school-result-waiting-list-title',
        body: 'email-post-school-result-waiting-list-body',
        ctaText: 'email-follow-application-cta-text',
        footer: 'email-generic-footer'
    },
    {
        id: 'post-school-result-rejected',
        subject: 'email-post-school-result-rejected-subject',
        title: 'email-post-school-result-rejected-title',
        body: 'email-post-school-result-rejected-body',
        ctaText: 'email-post-school-result-rejected-cta-text',
        footer: 'email-generic-footer'
    },
    {
        id: 'post-school-tuitions-fee-payment-approval',
        subject: 'email-post-school-tuitions-fee-payment-approval-subject',
        title: 'email-post-school-tuitions-fee-payment-approval-title',
        body: 'email-post-school-tuitions-fee-payment-approval-body',
        ctaText: 'email-follow-application-cta-text',
        footer: 'email-generic-footer'
    },
    {
        id: 'post-decision-letter-approval',
        subject: 'email-post-decision-letter-approval-subject',
        title: 'email-post-decision-letter-approval-title',
        body: 'email-post-decision-letter-approval-body',
        ctaText: 'email-post-decision-letter-approval-cta-text',
        footer: 'email-generic-footer'
    },
    {
        id: 'post-visa-approval',
        subject: 'email-post-visa-approval-subject',
        title: 'email-post-visa-approval-title',
        body: 'email-post-visa-approval-body',
        ctaText: 'email-post-visa-approval-cta-text',
        footer: 'email-post-visa-approval-footer'
    }
];

export const getEmailNotificationById = (id: string): Email | undefined =>
    emails.find((email) => email.id === id);
