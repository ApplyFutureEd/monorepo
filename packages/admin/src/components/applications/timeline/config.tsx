/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable sort-keys */
import { Button, TimelineConfig } from '@applyfuture/ui';
import { faCheck, faTimes } from '@fortawesome/pro-light-svg-icons';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

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
        PROGRESS: (application) => {
            return (
                <div className="flex mt-4 space-x-2">
                    <Button startIcon={faTimes} variant="secondary">
                        Reject
                    </Button>
                    <Button startIcon={faCheck}>Approve</Button>
                </div>
            );
        },
        ERROR: (application) => {
            const { t } = useTranslation();

            return (
                <div className="flex mt-4">
                    <Link href={`/applications/${application?.id}/upload-missing-documents`}>
                        <Button>{t('application:upload-missing-documents')}</Button>
                    </Link>
                </div>
            );
        },
        DONE: () => null
    },
    'school-review': {
        IDLE: () => null,
        PROGRESS: (_application, step) => {
            const { t } = useTranslation();

            return <p className="text-gray-500 text-sm">{t(step.timelineDescription)}</p>;
        },
        ERROR: () => null,
        DONE: () => null
    },
    'school-interview': {
        IDLE: () => null,
        PROGRESS: (_application, step) => {
            const { t } = useTranslation();

            return <p className="text-gray-500 text-sm">{t(step.timelineDescription)}</p>;
        },
        ERROR: () => null,
        DONE: () => null
    },
    'school-result': {
        IDLE: () => null,
        PROGRESS: (_application, step) => {
            const { t } = useTranslation();

            return <p className="text-gray-500 text-sm">{t(step.timelineDescription)}</p>;
        },
        ERROR: () => null,
        DONE: () => null
    },
    'school-tuitions-fee-payment': {
        IDLE: () => null,
        PROGRESS: (_application, step) => {
            const { t } = useTranslation();

            return <p className="text-gray-500 text-sm">{t(step.timelineDescription)}</p>;
        },
        ERROR: () => null,
        DONE: () => null
    },
    'decision-letter': {
        IDLE: () => null,
        PROGRESS: (_application, step) => {
            const { t } = useTranslation();

            return <p className="text-gray-500 text-sm">{t(step.timelineDescription)}</p>;
        },
        ERROR: () => null,
        DONE: () => null
    },
    visa: {
        IDLE: () => null,
        PROGRESS: (_application, step) => {
            const { t } = useTranslation();

            return <p className="text-gray-500 text-sm">{t(step.timelineDescription)}</p>;
        },
        ERROR: () => null,
        DONE: () => null
    }
};
