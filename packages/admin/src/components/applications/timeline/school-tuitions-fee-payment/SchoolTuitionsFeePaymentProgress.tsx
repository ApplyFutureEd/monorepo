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
import SchoolTuitionsFeePaymentProgressForm from '@components/forms/application/school-tuitions-fee-payment/SchoolTuitionsFeePaymentProgressForm';
import { faCheck, faTimes, faUndo } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const SchoolTuitionsFeePaymentProgress: FC<Props> = (props) => {
    const { application } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();

    const handleReject = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[8].status = 'ERROR';
            updatedSteps[8].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: 'Contact student by email'
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

            updatedSteps[8].status = 'DONE';
            updatedSteps[8].date = new Date().toString();
            updatedSteps[9].status = 'PROGRESS';
            updatedSteps[9].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: "Select decision letter's date of receipt"
                }
            });

            await sendAppNotification({
                id: 'post-school-tuitions-fee-payment-approval',
                link: `/applications?id=${application?.id}&step=school-tuitions-fee-payment`,
                studentId: application?.student?.id,
                variables: {
                    applicationId: toShortId(application?.id),
                    programName: application?.program?.name
                }
            });

            await sendEmailNotification({
                ctaLink: `https://applyfuture.com/applications?id=${application?.id}&step=school-tuitions-fee-payment`,
                id: 'post-school-tuitions-fee-payment-approval',
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

    const handleUndo = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[7].status = 'PROGRESS';
            updatedSteps[7].date = new Date().toString();
            updatedSteps[8].status = 'IDLE';
            updatedSteps[8].date = '';

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: 'Check reply from school',
                    tuitionsFeePaymentDate: ''
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
            <p className="text-gray-500 text-sm">Select tuitions fees date of payment</p>
            <div className="mt-4">
                <SchoolTuitionsFeePaymentProgressForm application={application} />
            </div>
            <div className="flex mt-4 space-x-2">
                <Button
                    isSubmitting={isSubmitting}
                    startIcon={faUndo}
                    variant="secondary"
                    onClick={handleUndo}>
                    Undo
                </Button>
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

export default SchoolTuitionsFeePaymentProgress;
