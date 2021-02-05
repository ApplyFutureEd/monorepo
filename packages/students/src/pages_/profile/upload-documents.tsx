import {
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import Banner from '@applyfuture/ui/src/banner/Banner';
import { useAuthenticatedUser, useQuery, withPrivateAccess } from '@applyfuture/utils';
import UploadDocumentsForm from '@components/forms/upload-documents/UploadDocumentsForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const UploadDocumentPage: FC = () => {
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();
    const { data, isLoading } = useQuery<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(
        getStudentByEmail,
        { email: user?.attributes.email }
    );

    return (
        <DashboardLayout title={t('profile:upload-documents-page-title')}>
            <Banner content={t('profile:disclaimer')} />
            <UploadDocumentsForm data={data} isLoading={isLoading} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(UploadDocumentPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
