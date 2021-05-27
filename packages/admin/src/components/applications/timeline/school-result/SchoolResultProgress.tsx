import {
    GetApplicationByStudentQuery,
    GetApplicationQuery,
    updateApplication
} from '@applyfuture/graphql';
import { SupportedLocale } from '@applyfuture/models';
import { Button } from '@applyfuture/ui';
import { graphql, sendEmailNotification, toast, toShortId } from '@applyfuture/utils';
import { faCheck, faSnooze, faTimes, faUndo } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const SchoolResultProgress: FC<Props> = (props) => {
    const { application } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();

    const handleReject = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[7].status = 'ERROR';
            updatedSteps[7].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    admissionResult: 'REJECTED',
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

    const handleWaitingList = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[7].status = 'PROGRESS';
            updatedSteps[7].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    admissionResult: 'WAITING_LIST',
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

            updatedSteps[7].status = 'DONE';
            updatedSteps[7].date = new Date().toString();
            updatedSteps[8].status = 'PROGRESS';
            updatedSteps[8].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    admissionResult: 'ACCEPTED',
                    id: application?.id,
                    steps: updatedSteps,
                    todo: 'Select tuitions fees date of payment'
                }
            });

            await sendEmailNotification({
                ctaLink: `https://${window.location.host}/applications?id=${application?.id}&step=school-result`,
                id: 'post-school-result-approval',
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

            updatedSteps[6].status = 'PROGRESS';
            updatedSteps[6].date = new Date().toString();
            updatedSteps[7].status = 'IDLE';
            updatedSteps[7].date = '';

            await graphql(updateApplication, {
                input: { id: application?.id, steps: updatedSteps, todo: 'Check reply from school' }
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

    const handleUndoWaitingList = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[7].status = 'PROGRESS';
            updatedSteps[7].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    admissionResult: '',
                    id: application?.id,
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

    if (application?.admissionResult === 'WAITING_LIST') {
        return (
            <div>
                <p className="text-gray-500 text-sm">Application on waiting list</p>
                <div className="mt-4">
                    <Button
                        isSubmitting={isSubmitting}
                        startIcon={faUndo}
                        variant="secondary"
                        onClick={handleUndoWaitingList}>
                        Undo
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <p className="text-gray-500 text-sm">Check reply from school</p>
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
                <Button
                    isSubmitting={isSubmitting}
                    startIcon={faSnooze}
                    variant="secondary"
                    onClick={handleWaitingList}>
                    Waiting list
                </Button>
                <Button isSubmitting={isSubmitting} startIcon={faCheck} onClick={handleApprove}>
                    Accept
                </Button>
            </div>
        </div>
    );
};

export default SchoolResultProgress;
