import { GetApplicationByStudentQuery, GetApplicationQuery } from '@applyfuture/graphql';
import SchoolTuitionsFeePaymentProgressForm from '@components/forms/applications/school-tuitions-fee-payment/SchoolTuitionsFeePaymentProgressForm';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const SchoolTuitionsFeePaymentProgress: FC<Props> = (props) => {
    const { application } = props;
    const { t } = useTranslation();

    return (
        <div>
            <p className="text-gray-500 text-sm">
                {t('application:timeline-step-tuitions-fee-description')}
            </p>
            <div className="mt-4">
                <SchoolTuitionsFeePaymentProgressForm application={application} />
            </div>
        </div>
    );
};

export default SchoolTuitionsFeePaymentProgress;
