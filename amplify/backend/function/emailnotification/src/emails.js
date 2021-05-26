"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmailNotificationById = exports.emails = void 0;
exports.emails = [
    {
        id: 'post-submission',
        subject: 'email-post-submission-subject',
        title: 'email-post-submission-title',
        body: 'email-post-submission-body',
        ctaText: 'email-post-submission-cta-text',
        footer: 'email-generic-footer'
    }
];
exports.getEmailNotificationById = (id) => exports.emails.find((email) => email.id === id);
//# sourceMappingURL=emails.js.map