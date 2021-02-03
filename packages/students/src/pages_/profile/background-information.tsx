import Banner from '@applyfuture/ui/src/banner/Banner';
import { withPrivateAccess } from '@applyfuture/utils';
import BackgroundInformationForm from '@components/forms/background-information/BackgroundInformationForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const BackgroundInformationPage: FC = () => {
    const { t } = useTranslation();

    return (
        <DashboardLayout title={t('profile:background-information-page-title')}>
            <Banner content={t('profile:disclaimer')} />
            <BackgroundInformationForm />
        </DashboardLayout>
    );
};

export default withPrivateAccess(BackgroundInformationPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
