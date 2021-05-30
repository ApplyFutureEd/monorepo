import {
    GetApplicationByStudentQuery,
    GetApplicationQuery,
    updateApplication
} from '@applyfuture/graphql';
import { SupportedLocale } from '@applyfuture/models';
import { Button } from '@applyfuture/ui';
import {
    graphql,
    sendAppNotification,
    sendEmailNotification,
    toast,
    toShortId
} from '@applyfuture/utils';
import { faCheck, faTimes } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const InternalReviewProgress: FC<Props> = (props) => {
    const { application } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();

    const handleReject = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[4].status = 'ERROR';
            updatedSteps[4].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: 'Wait for student to upload missing documents'
                }
            });

            await sendAppNotification({
                id: 'post-internal-review-rejection',
                link: `/applications/${application?.id}/upload-missing-documents`,
                studentId: application?.student?.id,
                variables: {
                    applicationId: toShortId(application?.id)
                }
            });

            await sendEmailNotification({
                ctaLink: `https://applyfuture.com/applications/${application?.id}/upload-missing-documents`,
                id: 'post-internal-review-rejection',
                language: application?.student?.locale as SupportedLocale,
                recipients: [application?.student?.email],
                variables: {
                    applicationId: toShortId(application?.id),
                    firstName: application?.student?.firstName,
                    programName: application?.program?.name,
                    schoolName: application?.program?.school?.name
                }
            });
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleApprove = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[4].status = 'DONE';
            updatedSteps[4].date = new Date().toString();
            updatedSteps[5].status = 'PROGRESS';
            updatedSteps[5].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: 'Check reply from school'
                }
            });

            await sendAppNotification({
                id: 'post-internal-review-approval',
                link: `/applications?id=${application?.id}&step=internal-review`,
                studentId: application?.student?.id,
                variables: {
                    applicationId: toShortId(application?.id),
                    programName: application?.program?.name,
                    schoolName: application?.program?.school?.name
                }
            });

            await sendEmailNotification({
                ctaLink: `https://applyfuture.com/applications?id=${application?.id}&step=internal-review`,
                id: 'post-internal-review-approval',
                language: application?.student?.locale as SupportedLocale,
                recipients: [application?.student?.email],
                variables: {
                    applicationId: toShortId(application?.id),
                    firstName: application?.student?.firstName,
                    programName: application?.program?.name,
                    schoolName: application?.program?.school?.name
                }
            });
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <p className="text-gray-500 text-sm">Review documents</p>
            <div className="flex mt-4 space-x-2">
                <Button
                    isSubmitting={isSubmitting}
                    startIcon={faTimes}
                    variant="secondary"
                    onClick={handleReject}>
                    Reject
                </Button>
                <Button isSubmitting={isSubmitting} startIcon={faCheck} onClick={handleApprove}>
                    Approve
                </Button>
            </div>
        </div>
    );
};

export default InternalReviewProgress;
