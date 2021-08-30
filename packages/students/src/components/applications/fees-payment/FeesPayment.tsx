import { GetApplicationQuery } from '@applyfuture/graphql';
import FeesPaymentForm from '@components/forms/applications/fees-payment/FeesPaymentForm';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    applicationData: GetApplicationQuery;
    isLoading: boolean;
};

const FeesPayment: FC<Props> = (props) => {
    const { applicationData, isLoading } = props;
    const { t } = useTranslation();

    return (
        <div className="w-full bg-white rounded-lg shadow overflow-hidden md:w-2/3">
            <div className="hidden px-4 py-5 border-b border-gray-200 sm:px-6 md:block">
                <h3 className="text-gray-900 text-lg font-medium leading-6">
                    {t('application:payment-title')}
                </h3>
                <p className="mt-1 max-w-2xl text-gray-500 text-sm leading-5">
                    {t('application:payment-details')}
                </p>
            </div>

            <div className="px-4 py-5 sm:p-0">
                <dl>
                    <FeesPaymentForm applicationData={applicationData} isLoading={isLoading} />
                </dl>
            </div>
        </div>
    );
};

export default FeesPayment;
