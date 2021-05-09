import { withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const ApplicationsPage: FC = () => {
    const { t } = useTranslation();

    return (
        <DashboardLayout title={t('application:page-title')}>
            applications list here
        </DashboardLayout>
    );
};

export default withPrivateAccess(ApplicationsPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
