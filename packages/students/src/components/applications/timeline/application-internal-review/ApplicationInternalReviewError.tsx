import { GetApplicationByStudentQuery, GetApplicationQuery } from '@applyfuture/graphql';
import { Button } from '@applyfuture/ui';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const ApplicationInternalReviewError: FC<Props> = (props) => {
    const { application } = props;
    const { t } = useTranslation();

    return (
        <div className="flex mt-4">
            <Link href={`/applications/${application?.id}/upload-missing-documents`}>
                <Button>{t('application:upload-missing-documents')}</Button>
            </Link>
        </div>
    );
};

export default ApplicationInternalReviewError;
