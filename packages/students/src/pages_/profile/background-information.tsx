import {
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import Banner from '@applyfuture/ui/src/banner/Banner';
import { useAuthenticatedUser, useQuery, withPrivateAccess } from '@applyfuture/utils';
import BackgroundInformationForm from '@components/forms/background-information/BackgroundInformationForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const BackgroundInformationPage: FC = () => {
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();
    const { data, isLoading } = useQuery<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(
        getStudentByEmail,
        { email: user?.attributes.email }
    );

    return (
        <DashboardLayout title={t('profile:background-information-page-title')}>
            <Banner content={t('profile:disclaimer')} />
            <BackgroundInformationForm data={data} isLoading={isLoading} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(BackgroundInformationPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
