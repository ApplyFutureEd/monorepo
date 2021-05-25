import { GetApplicationByStudentQuery, GetApplicationQuery } from '@applyfuture/graphql';
import VisaProgressForm from '@components/forms/applications/visa/VisaProgressForm';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const VisaProgress: FC<Props> = (props) => {
    const { application } = props;
    const { t } = useTranslation();

    return (
        <div>
            <p className="text-gray-500 text-sm">
                {t('application:timeline-step-visa-description')}
            </p>
            <div className="mt-4">
                <VisaProgressForm application={application} />
            </div>
        </div>
    );
};

export default VisaProgress;
