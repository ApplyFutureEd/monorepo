/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable sort-keys */
import { TimelineConfig } from '@applyfuture/ui';
import DecisionLetterProgress from '@components/applications/timeline/decision-letter/DecisionLetterProgress';
import FeesPaymentProgress from '@components/applications/timeline/fees-payment/FeesPaymentProgress';
import InternalReviewError from '@components/applications/timeline/internal-review/InternalReviewError';
import InternalReviewProgress from '@components/applications/timeline/internal-review/InternalReviewProgress';
import ReviewDocumentsProgress from '@components/applications/timeline/review-documents/ReviewDocumentsProgress';
import SchoolInterviewProgress from '@components/applications/timeline/school-interview/SchoolInterviewProgress';
import SchoolResultDone from '@components/applications/timeline/school-result/SchoolResultDone';
import SchoolResultError from '@components/applications/timeline/school-result/SchoolResultError';
import SchoolResultProgress from '@components/applications/timeline/school-result/SchoolResultProgress';
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
    'internal-review': {
        IDLE: () => null,
        PROGRESS: () => <InternalReviewProgress />,
        ERROR: (application) => <InternalReviewError application={application} />,
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
        PROGRESS: (application) => <SchoolInterviewProgress application={application} />,
        ERROR: () => null,
        DONE: () => null
    },
    'school-result': {
        IDLE: () => null,
        PROGRESS: (application) => <SchoolResultProgress application={application} />,
        ERROR: (application) => <SchoolResultError application={application} />,
        DONE: (application) => <SchoolResultDone application={application} />
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
