import Banner from '@applyfuture/ui/src/banner/Banner';
import { withPrivateAccess } from '@applyfuture/utils';
import GeneralInformationForm from '@components/forms/general-information/GeneralInformationForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const GeneralInformationPage: FC = () => {
    const { t } = useTranslation();

    return (
        <DashboardLayout title={t('profile:general-information-page-title')}>
            <Banner content={t('profile:disclaimer')} />
            <GeneralInformationForm />
        </DashboardLayout>
    );
};

export default withPrivateAccess(GeneralInformationPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
