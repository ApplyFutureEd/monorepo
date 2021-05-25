import { GetApplicationByStudentQuery, GetApplicationQuery } from '@applyfuture/graphql';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const SchoolResultProgress: FC<Props> = (props) => {
    const { application } = props;
    const { t } = useTranslation();

    if (application?.admissionResult !== 'WAITING_LIST') {
        return null;
    }

    return (
        <p className="text-gray-500 text-sm">{t('application:admission-result-waiting-list')}</p>
    );
};

export default SchoolResultProgress;
