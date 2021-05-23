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

const SchoolResultDone: FC<Props> = (props) => {
    const { application } = props;
    const { t } = useTranslation();

    if (application?.admissionResult !== 'ACCEPTED') {
        return null;
    }

    return <p className="text-gray-500 text-sm">{t('application:admission-result-accepted')}</p>;
};

export default SchoolResultDone;
