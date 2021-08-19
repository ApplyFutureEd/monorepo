import { GetApplicationByStudentQuery, GetApplicationQuery } from '@applyfuture/graphql';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const SchoolResultError: FC<Props> = (props) => {
    const { application } = props;
    const { t } = useTranslation();

    if (application?.admissionResult !== 'REJECTED') {
        return null;
    }

    return <p className="text-gray-500 text-sm">{t('application:admission-result-rejected')}</p>;
};

export default SchoolResultError;
