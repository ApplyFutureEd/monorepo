import {
    GetApplicationByStudentQuery,
    GetApplicationQuery,
    updateApplication
} from '@applyfuture/graphql';
import { Button } from '@applyfuture/ui';
import { graphql, sendAppNotification, toast, toShortId } from '@applyfuture/utils';
import SchoolInterviewProgressForm from '@components/forms/application/school-interview/SchoolInterviewProgressForm';
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

const SchoolInterviewProgress: FC<Props> = (props) => {
    const { application } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();

    const handleReject = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[6].status = 'ERROR';
            updatedSteps[6].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: 'Forward school response to student'
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

            updatedSteps[6].status = 'DONE';
            updatedSteps[6].date = new Date().toString();
            updatedSteps[7].status = 'PROGRESS';
            updatedSteps[7].date = new Date().toString();

            await graphql(updateApplication, {
                input: { id: application?.id, steps: updatedSteps, todo: 'Check reply from school' }
            });

            await sendAppNotification({
                id: 'post-school-interview-approval',
                link: `/applications?id=${application?.id}&step=school-interview`,
                studentId: application?.student?.id,
                variables: {
                    applicationId: toShortId(application?.id),
                    date: application?.interviewDate
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

            updatedSteps[5].status = 'PROGRESS';
            updatedSteps[5].date = new Date().toString();
            updatedSteps[6].status = 'IDLE';
            updatedSteps[6].date = '';

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    interviewDate: '',
                    steps: updatedSteps,
                    todo: 'Check reply from school'
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
            <p className="text-gray-500 text-sm">Select an interview date</p>
            <div className="mt-4">
                <SchoolInterviewProgressForm application={application} />
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

export default SchoolInterviewProgress;
