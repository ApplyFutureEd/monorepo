import {
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import Banner from '@applyfuture/ui/src/banner/Banner';
import { useAuthenticatedUser, useQuery, withPrivateAccess } from '@applyfuture/utils';
import TestScoresForm from '@components/forms/test-scores/TestScoresForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const TestScoresPage: FC = () => {
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();
    const { data, isLoading } = useQuery<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(
        getStudentByEmail,
        { email: user?.attributes.email }
    );

    return (
        <DashboardLayout title={t('profile:general-information-page-title')}>
            <Banner content={t('profile:disclaimer')} />
            <TestScoresForm data={data} isLoading={isLoading} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(TestScoresPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
