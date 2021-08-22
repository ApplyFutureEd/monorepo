import {
    getDocumentByStudent,
    GetDocumentByStudentQuery,
    GetDocumentByStudentQueryVariables,
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import { Banner } from '@applyfuture/ui';
import { useAuthenticatedUser, useQuery, withPrivateAccess } from '@applyfuture/utils';
import UploadDocumentsForm from '@components/forms/profile/upload-documents/UploadDocumentsForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import CompletionModal from '@components/profile/completion-modal/CompletionModal';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const UploadDocumentPage: FC = () => {
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();

    const {
        data: studentData,
        isLoading: studentIsLoading,
        refetch: studentRefetch
    } = useQuery<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(getStudentByEmail, {
        email: user?.attributes.email
    });

    const {
        data: documentsData,
        isLoading: documentsIsLoading,
        refetch: documentsRefetch
    } = useQuery<GetDocumentByStudentQuery, GetDocumentByStudentQueryVariables>(
        getDocumentByStudent,
        { studentId: studentData.getStudentByEmail?.items?.[0]?.id }
    );

    const refetch = () => {
        studentRefetch();
        documentsRefetch();
    };

    return (
        <DashboardLayout title={t('profile:upload-documents-page-title')}>
            <CompletionModal documentsData={documentsData} studentData={studentData} />
            <Banner content={t('profile:disclaimer')} />
            <UploadDocumentsForm
                documentsData={documentsData}
                isLoading={studentIsLoading || documentsIsLoading}
                refetch={refetch}
                studentData={studentData}
            />
        </DashboardLayout>
    );
};

export default withPrivateAccess(UploadDocumentPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
