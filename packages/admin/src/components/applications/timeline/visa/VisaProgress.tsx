import {
    GetApplicationByStudentQuery,
    GetApplicationQuery,
    updateApplication
} from '@applyfuture/graphql';
import { SupportedLocale } from '@applyfuture/models';
import { Button } from '@applyfuture/ui';
import { graphql, sendEmailNotification, toast, toShortId } from '@applyfuture/utils';
import VisaProgressForm from '@components/forms/application/visa/VisaProgressForm';
import { faCheck, faTimes, faUndo } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const VisaProgress: FC<Props> = (props) => {
    const { application } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();

    const handleReject = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[10].status = 'ERROR';
            updatedSteps[10].date = new Date().toString();

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

            updatedSteps[10].status = 'DONE';
            updatedSteps[10].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: ''
                }
            });

            await sendEmailNotification({
                ctaLink: `https://applyfuture.com/applications?id=${application?.id}&step=visa`,
                id: 'post-visa-approval',
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

            updatedSteps[9].status = 'PROGRESS';
            updatedSteps[9].date = new Date().toString();
            updatedSteps[10].status = 'IDLE';
            updatedSteps[10].date = '';

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: "Select decision letter's date of payment",
                    visaDate: ''
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
            <p className="text-gray-500 text-sm">Select visa&apos;s date of receipt</p>
            <div className="mt-4">
                <VisaProgressForm application={application} />
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
                    disabled={!application?.visaDate}
                    isSubmitting={isSubmitting}
                    startIcon={faCheck}
                    onClick={handleApprove}>
                    Approve
                </Button>
            </div>
        </div>
    );
};

export default VisaProgress;
