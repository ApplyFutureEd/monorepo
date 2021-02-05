import {
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import Banner from '@applyfuture/ui/src/banner/Banner';
import { useAuthenticatedUser, useQuery, withPrivateAccess } from '@applyfuture/utils';
import EducationHistoryForm from '@components/forms/education-history/EducationHistoryForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const EducationHistoryPage: FC = () => {
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();
    const { data, isLoading } = useQuery<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(
        getStudentByEmail,
        { email: user?.attributes.email }
    );

    return (
        <DashboardLayout title={t('profile:education-history-page-title')}>
            <Banner content={t('profile:disclaimer')} />
            <EducationHistoryForm data={data} isLoading={isLoading} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(EducationHistoryPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
