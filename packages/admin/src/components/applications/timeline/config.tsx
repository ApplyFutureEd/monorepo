/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable sort-keys */
import { TimelineConfig } from '@applyfuture/ui';
import SchoolResultError from '@components/applications/timeline//school-result/SchoolResultError';
import SchoolResultProgress from '@components/applications/timeline//school-result/SchoolResultProgress';
import DecisionLetterError from '@components/applications/timeline/decision-letter/DecisionLetterError';
import DecisionLetterProgress from '@components/applications/timeline/decision-letter/DecisionLetterProgress';
import InternalReviewError from '@components/applications/timeline/internal-review/InternalReviewError';
import InternalReviewProgress from '@components/applications/timeline/internal-review/InternalReviewProgress';
import SchoolInterviewError from '@components/applications/timeline/school-interview/SchoolInterviewError';
import SchoolInterviewProgress from '@components/applications/timeline/school-interview/SchoolInterviewProgress';
import SchoolReviewError from '@components/applications/timeline/school-review/SchoolReviewError';
import SchoolReviewProgress from '@components/applications/timeline/school-review/SchoolReviewProgress';
import SchoolTuitionsFeePaymentError from '@components/applications/timeline/school-tuitions-fee-payment/SchoolTuitionsFeePaymentError';
import SchoolTuitionsFeePaymentProgress from '@components/applications/timeline/school-tuitions-fee-payment/SchoolTuitionsFeePaymentProgress';
import VisaDone from '@components/applications/timeline/visa/VisaDone';
import VisaError from '@components/applications/timeline/visa/VisaError';
import VisaProgress from '@components/applications/timeline/visa/VisaProgress';
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
        ERROR: (application) => <SchoolReviewError application={application} />,
        DONE: () => null
    },
    'school-interview': {
        IDLE: () => null,
        PROGRESS: (application) => <SchoolInterviewProgress application={application} />,
        ERROR: (application) => <SchoolInterviewError application={application} />,
        DONE: () => null
    },
    'school-result': {
        IDLE: () => null,
        PROGRESS: (application) => <SchoolResultProgress application={application} />,
        ERROR: (application) => <SchoolResultError application={application} />,
        DONE: () => null
    },
    'school-tuitions-fee-payment': {
        IDLE: () => null,
        PROGRESS: (application) => <SchoolTuitionsFeePaymentProgress application={application} />,
        ERROR: (application) => <SchoolTuitionsFeePaymentError application={application} />,
        DONE: () => null
    },
    'decision-letter': {
        IDLE: () => null,
        PROGRESS: (application) => <DecisionLetterProgress application={application} />,
        ERROR: (application) => <DecisionLetterError application={application} />,
        DONE: () => null
    },
    visa: {
        IDLE: () => null,
        PROGRESS: (application) => <VisaProgress application={application} />,
        ERROR: (application) => <VisaError application={application} />,
        DONE: (application) => <VisaDone application={application} />
    }
};
