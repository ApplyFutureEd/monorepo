/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable sort-keys */
import { deleteApplication } from '@applyfuture/graphql';
import { Button, TimelineConfig } from '@applyfuture/ui';
import { graphql, toast } from '@applyfuture/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export const config: TimelineConfig = {
    'upload-documents': {
        IDLE: () => null,
        PROGRESS: (application) => {
            const { t } = useTranslation();
            const router = useRouter();

            const handleCancelApplication = async () => {
                try {
                    await graphql(deleteApplication, {
                        input: { id: application?.id }
                    });
                    router.reload();
                } catch (error) {
                    toast({
                        description: `${error.message}`,
                        title: t('common:toast-error-generic-message'),
                        variant: 'error'
                    });
                }
            };

            return (
                <div className="flex mt-4 space-x-2">
                    <Button variant="secondary" onClick={handleCancelApplication}>
                        {t('application:cancel-my-application')}
                    </Button>
                    <Link href={`/applications/${application?.id}/upload-documents`}>
                        <Button>{t('application:continue-my-application')}</Button>
                    </Link>
                </div>
            );
        },
        ERROR: () => null,
        DONE: () => null
    },
    'review-documents': {
        IDLE: () => null,
        PROGRESS: (application) => {
            const { t } = useTranslation();
            const router = useRouter();

            const handleCancelApplication = async () => {
                try {
                    await graphql(deleteApplication, {
                        input: { id: application?.id }
                    });
                    router.reload();
                } catch (error) {
                    toast({
                        description: `${error.message}`,
                        title: t('common:toast-error-generic-message'),
                        variant: 'error'
                    });
                }
            };

            return (
                <div className="flex mt-4 space-x-2">
                    <Button variant="secondary" onClick={handleCancelApplication}>
                        {t('application:cancel-my-application')}
                    </Button>
                    <Link href={`/applications/${application?.id}/review-documents`}>
                        <Button>{t('application:continue-my-application')}</Button>
                    </Link>
                </div>
            );
        },
        ERROR: () => null,
        DONE: () => null
    },
    'fees-payment': {
        IDLE: () => null,
        PROGRESS: (application) => {
            const { t } = useTranslation();
            const router = useRouter();

            const handleCancelApplication = async () => {
                try {
                    await graphql(deleteApplication, {
                        input: { id: application?.id }
                    });
                    router.reload();
                } catch (error) {
                    toast({
                        description: `${error.message}`,
                        title: t('common:toast-error-generic-message'),
                        variant: 'error'
                    });
                }
            };

            return (
                <div className="flex mt-4 space-x-2">
                    <Button variant="secondary" onClick={handleCancelApplication}>
                        {t('application:cancel-my-application')}
                    </Button>
                    <Link href={`/applications/${application?.id}/fees-payment`}>
                        <Button>{t('application:continue-my-application')}</Button>
                    </Link>
                </div>
            );
        },
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
        PROGRESS: (_application, step) => {
            const { t } = useTranslation();

            return <p className="text-gray-500 text-sm">{t(step.timelineDescription)}</p>;
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
