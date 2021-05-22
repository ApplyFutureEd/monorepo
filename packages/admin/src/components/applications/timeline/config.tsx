/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable sort-keys */
import { TimelineConfig } from '@applyfuture/ui';
import InternalReviewError from '@components/applications/timeline/internal-review/InternalReviewError';
import InternalReviewProgress from '@components/applications/timeline/internal-review/InternalReviewProgress';
import SchoolReviewProgress from '@components/applications/timeline/school-review/SchoolReviewProgress';
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
    'internal-review': {
        IDLE: () => null,
        PROGRESS: (application) => <InternalReviewProgress application={application} />,
        ERROR: (application) => <InternalReviewError application={application} />,
        DONE: () => null
    },
    'school-review': {
        IDLE: () => null,
        PROGRESS: (application) => <SchoolReviewProgress application={application} />,
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
