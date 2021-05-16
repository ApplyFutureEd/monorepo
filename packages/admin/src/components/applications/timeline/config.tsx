/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable sort-keys */
import { TimelineConfig } from '@applyfuture/ui';
import ApplicationInternalReviewProgress from '@components/applications/timeline/application-internal-review/ApplicationInternalReviewProgress';
import React from 'react';

export const config: TimelineConfig = {
    'upload-documents': {
        IDLE: () => null,
        PROGRESS: () => null,
        ERROR: () => null,
        DONE: () => null
    },
    'review-documents': {
        IDLE: () => null,
        PROGRESS: () => null,
        ERROR: () => null,
        DONE: () => null
    },
    'fees-payment': {
        IDLE: () => null,
        PROGRESS: () => null,
        ERROR: () => null,
        DONE: () => null
    },
    submission: {
        IDLE: () => null,
        PROGRESS: () => null,
        ERROR: () => null,
        DONE: () => null
    },
    'application-internal-review': {
        IDLE: () => null,
        PROGRESS: (application) => <ApplicationInternalReviewProgress application={application} />,
        ERROR: () => null,
        DONE: () => null
    },
    'school-review': {
        IDLE: () => null,
        PROGRESS: () => null,
        ERROR: () => null,
        DONE: () => null
    },
    'school-interview': {
        IDLE: () => null,
        PROGRESS: () => null,
        ERROR: () => null,
        DONE: () => null
    },
    'school-result': {
        IDLE: () => null,
        PROGRESS: () => null,
        ERROR: () => null,
        DONE: () => null
    },
    'school-tuitions-fee-payment': {
        IDLE: () => null,
        PROGRESS: () => null,
        ERROR: () => null,
        DONE: () => null
    },
    'decision-letter': {
        IDLE: () => null,
        PROGRESS: () => null,
        ERROR: () => null,
        DONE: () => null
    },
    visa: {
        IDLE: () => null,
        PROGRESS: () => null,
        ERROR: () => null,
        DONE: () => null
    }
};
