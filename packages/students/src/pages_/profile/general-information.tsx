import {
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import Banner from '@applyfuture/ui/src/banner/Banner';
import { useAuthenticatedUser, useQuery, withPrivateAccess } from '@applyfuture/utils';
import GeneralInformationForm from '@components/forms/general-information/GeneralInformationForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const GeneralInformationPage: FC = () => {
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();
    const { data, isLoading } = useQuery<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(
        getStudentByEmail,
        { email: user?.attributes.email }
    );

    return (
        <DashboardLayout title={t('profile:general-information-page-title')}>
            <Banner content={t('profile:disclaimer')} />
            <GeneralInformationForm data={data} isLoading={isLoading} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(GeneralInformationPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
