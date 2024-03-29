import {
    GetApplicationByStudentQuery,
    GetApplicationQuery,
    updateApplication
} from '@applyfuture/graphql';
import { Button } from '@applyfuture/ui';
import {
    graphql,
    sendAppNotification,
    sendEmailNotification,
    toast,
    toShortId
} from '@applyfuture/utils';
import DecisionLetterProgressForm from '@components/forms/application/decision-letter/DecisionLetterProgressForm';
import { faCheck, faTimes, faUndo } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { SupportedLocale } from 'src/types/SupportedLocale';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const DecisionLetterProgress: FC<Props> = (props) => {
    const { application } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();

    const handleReject = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[9].status = 'ERROR';
            updatedSteps[9].date = new Date().toString();

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

            updatedSteps[9].status = 'DONE';
            updatedSteps[9].date = new Date().toString();
            updatedSteps[10].status = 'PROGRESS';
            updatedSteps[10].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: "Select visa's date of receipt"
                }
            });

            await sendAppNotification({
                id: 'post-decision-letter-approval',
                link: `/applications?id=${application?.id}&step=decision-letter`,
                studentId: application?.student?.id,
                variables: {
                    applicationId: toShortId(application?.id),
                    programName: application?.program?.name,
                    schoolName: application?.program?.school?.name
                }
            });

            await sendEmailNotification({
                ctaLink: `https://applyfuture.com/applications?id=${application?.id}&step=decision-letter`,
                id: 'post-decision-letter-approval',
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

            updatedSteps[8].status = 'PROGRESS';
            updatedSteps[8].date = new Date().toString();
            updatedSteps[9].status = 'IDLE';
            updatedSteps[9].date = '';

            await graphql(updateApplication, {
                input: {
                    decisionLetterDate: '',
                    id: application?.id,
                    steps: updatedSteps,
                    todo: 'Select tuitions fees date of payment'
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
            <p className="text-gray-500 text-sm">Select decision letter&apos;s date of receipt</p>
            <div className="mt-4">
                <DecisionLetterProgressForm application={application} />
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
                <Button
                    disabled={!application?.decisionLetterDate}
                    isSubmitting={isSubmitting}
                    startIcon={faCheck}
                    onClick={handleApprove}>
                    Approve
                </Button>
            </div>
        </div>
    );
};

export default DecisionLetterProgress;
