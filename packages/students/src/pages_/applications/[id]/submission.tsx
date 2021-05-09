import { getApplication, GetApplicationQuery } from '@applyfuture/graphql';
import { Stepper } from '@applyfuture/ui';
import { getStepsLabels, useQuery, withPrivateAccess } from '@applyfuture/utils';
import Summary from '@components/applications/summary/Summary';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const SubmissionPage: FC = () => {
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
        <>
            <DashboardLayout title={t('application:page-title')}>
                <div className="mb-4">
                    <Stepper currentStep={steps.length} isLoading={isLoading} steps={steps} />
                </div>
                <div className="flex items-start space-x-0 md:space-x-2">
                    <Summary applicationData={applicationData} isLoading={isLoading} />
                </div>
            </DashboardLayout>
        </>
    );
};

export default withPrivateAccess(SubmissionPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
