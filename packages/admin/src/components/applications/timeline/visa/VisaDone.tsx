import {
    GetApplicationByStudentQuery,
    GetApplicationQuery,
    updateApplication
} from '@applyfuture/graphql';
import { Button } from '@applyfuture/ui';
import { graphql, toast } from '@applyfuture/utils';
import { faUndo } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const VisaDone: FC<Props> = (props) => {
    const { application } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();

    const handleUndo = async () => {
        try {
            setIsSubmitting(true);
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[10].status = 'PROGRESS';
            updatedSteps[10].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: "Select visa's date of receipt"
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
            <p className="text-gray-500 text-sm">Application closed</p>
            <div className="mt-4">
                <Button
                    isSubmitting={isSubmitting}
                    startIcon={faUndo}
                    variant="secondary"
                    onClick={handleUndo}>
                    Undo
                </Button>
            </div>
        </div>
    );
};

export default VisaDone;