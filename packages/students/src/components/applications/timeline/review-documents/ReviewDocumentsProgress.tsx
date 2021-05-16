import {
    deleteApplication,
    GetApplicationByStudentQuery,
    GetApplicationQuery
} from '@applyfuture/graphql';
import { Button } from '@applyfuture/ui';
import { graphql, toast } from '@applyfuture/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-translate';
import React, { FC, useState } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const UploadDocumentsProgress: FC<Props> = (props) => {
    const { application } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();
    const router = useRouter();

    const handleCancelApplication = async () => {
        try {
            setIsSubmitting(true);
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
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex mt-4 space-x-2">
            <Button
                isSubmitting={isSubmitting}
                variant="secondary"
                onClick={handleCancelApplication}>
                {t('application:cancel-my-application')}
            </Button>
            <Link href={`/applications/${application?.id}/review-documents`}>
                <Button isSubmitting={isSubmitting}>
                    {t('application:continue-my-application')}
                </Button>
            </Link>
        </div>
    );
};

export default UploadDocumentsProgress;
