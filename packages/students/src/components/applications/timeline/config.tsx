/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable sort-keys */
import { TimelineConfig } from '@applyfuture/ui';
import ApplicationInternalReviewError from '@components/applications/timeline/application-internal-review/ApplicationInternalReviewError';
import ApplicationInternalReviewProgress from '@components/applications/timeline/application-internal-review/ApplicationInternalReviewProgress';
import DecisionLetterProgress from '@components/applications/timeline/decision-letter/DecisionLetterProgress';
import FeesPaymentProgress from '@components/applications/timeline/fees-payment/FeesPaymentProgress';
import ReviewDocumentsProgress from '@components/applications/timeline/review-documents/ReviewDocumentsProgress';
import SchoolInterviewProgress from '@components/applications/timeline/school-interview/SchoolInterviewProgress';
import SchoolReviewProgress from '@components/applications/timeline/school-review/SchoolReviewProgress';
import SchoolTuitionsFeePaymentProgress from '@components/applications/timeline/school-tuitions-fee-payment/SchoolTuitionsFeePaymentProgress';
import UploadDocumentsProgress from '@components/applications/timeline/upload-documents/UploadDocumentsProgress';
import VisaProgress from '@components/applications/timeline/visa/VisaProgress';

export const config: TimelineConfig = {
    'upload-documents': {
        IDLE: () => null,
        PROGRESS: (application) => <UploadDocumentsProgress application={application} />,
        ERROR: () => null,
        DONE: () => null
    },
    'review-documents': {
        IDLE: () => null,
        PROGRESS: (application) => <ReviewDocumentsProgress application={application} />,
        ERROR: () => null,
        DONE: () => null
    },
    'fees-payment': {
        IDLE: () => null,
        PROGRESS: (application) => <FeesPaymentProgress application={application} />,
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
        PROGRESS: () => <ApplicationInternalReviewProgress />,
        ERROR: (application) => <ApplicationInternalReviewError application={application} />,
        DONE: () => null
    },
    'school-review': {
        IDLE: () => null,
        PROGRESS: () => <SchoolReviewProgress />,
        ERROR: () => null,
        DONE: () => null
    },
    'school-interview': {
        IDLE: () => null,
        PROGRESS: () => <SchoolInterviewProgress />,
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
        PROGRESS: () => <SchoolTuitionsFeePaymentProgress />,
        ERROR: () => null,
        DONE: () => null
    },
    'decision-letter': {
        IDLE: () => null,
        PROGRESS: () => <DecisionLetterProgress />,
        ERROR: () => null,
        DONE: () => null
    },
    visa: {
        IDLE: () => null,
        PROGRESS: () => <VisaProgress />,
        ERROR: () => null,
        DONE: () => null
    }
};
