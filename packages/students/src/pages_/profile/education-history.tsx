import Banner from '@applyfuture/ui/src/banner/Banner';
import { withPrivateAccess } from '@applyfuture/utils';
import EducationHistoryForm from '@components/forms/education-history/EducationHistoryForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const EducationHistoryPage: FC = () => {
    const { t } = useTranslation();

    return (
        <DashboardLayout title={t('profile:education-history-page-title')}>
            <Banner content={t('profile:disclaimer')} />
            <EducationHistoryForm />
        </DashboardLayout>
    );
};

export default withPrivateAccess(EducationHistoryPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
