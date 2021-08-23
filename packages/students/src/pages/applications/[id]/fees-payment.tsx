import { getApplication, GetApplicationQuery } from '@applyfuture/graphql';
import { Stepper } from '@applyfuture/ui';
import { getStepsLabels, getStripe, useQuery, withPrivateAccess } from '@applyfuture/utils';
import FeesPayment from '@components/applications/fees-payment/FeesPayment';
import Summary from '@components/applications/summary/Summary';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { Elements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const stripe = getStripe('pk_live_bkLUK46HYGNu8r1VM3rbfWn700Hjz3Xbwg');

const FeesPaymentPage: FC = () => {
    const { t } = useTranslation();
    const router = useRouter();

    const {
        data: applicationData,
        isLoading: applicationIsLoading
    } = useQuery<GetApplicationQuery>(getApplication, {
        id: router.query.id
    });

    const isLoading = applicationIsLoading;
    const steps = getStepsLabels(applicationData.getApplication);

    return (
        <DashboardLayout title={t('application:page-title')}>
            <div className="mb-4">
                <Stepper currentStep={2} isLoading={isLoading} steps={steps} />
            </div>
            <div className="flex items-start space-x-0 md:space-x-2">
                <Summary applicationData={applicationData} isLoading={isLoading} />
                <Elements stripe={stripe}>
                    <FeesPayment applicationData={applicationData} isLoading={isLoading} />
                </Elements>
            </div>
        </DashboardLayout>
    );
};

export default withPrivateAccess(FeesPaymentPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
