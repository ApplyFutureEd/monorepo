import {
    GetApplicationByStudentQuery,
    GetApplicationQuery,
    updateApplication
} from '@applyfuture/graphql';
import { Button } from '@applyfuture/ui';
import { graphql, toast } from '@applyfuture/utils';
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

const SchoolReviewProgress: FC<Props> = (props) => {
    const { application } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();

    const handleReject = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[5].status = 'ERROR';
            updatedSteps[5].date = new Date().toString();

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

            updatedSteps[5].status = 'DONE';
            updatedSteps[5].date = new Date().toString();
            updatedSteps[6].status = 'PROGRESS';
            updatedSteps[6].date = new Date().toString();

            await graphql(updateApplication, {
                input: { id: application?.id, steps: updatedSteps, todo: '' }
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

            updatedSteps[4].status = 'PROGRESS';
            updatedSteps[4].date = new Date().toString();
            updatedSteps[5].status = 'IDLE';
            updatedSteps[5].date = '';

            await graphql(updateApplication, {
                input: { id: application?.id, steps: updatedSteps, todo: 'Review documents' }
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
    );
};

export default SchoolReviewProgress;
