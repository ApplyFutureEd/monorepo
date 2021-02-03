import Banner from '@applyfuture/ui/src/banner/Banner';
import { withPrivateAccess } from '@applyfuture/utils';
import TestScoresForm from '@components/forms/test-scores/TestScoresForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const TestScoresPage: FC = () => {
    const { t } = useTranslation();

    return (
        <DashboardLayout title={t('profile:general-information-page-title')}>
            <Banner content={t('profile:disclaimer')} />
            <TestScoresForm />
        </DashboardLayout>
    );
};

export default withPrivateAccess(TestScoresPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
