import { withPrivateAccess } from '@applyfuture/utils';
import GeneralInformationForm from '@components/forms/general-information/GeneralInformationForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const ProfilePage: FC = () => {
    const { t } = useTranslation();

    return (
        <DashboardLayout title={t('profile:page-title')}>
            <GeneralInformationForm />
        </DashboardLayout>
    );
};

export default withPrivateAccess(ProfilePage, {
    groups: ['student'],
    redirection: '/sign-in'
});
