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
import GeneralInformationForm from '@components/forms/profile/general-information/GeneralInformationForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import CompletionModal from '@components/profile/completion-modal/CompletionModal';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const GeneralInformationPage: FC = () => {
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();
    const { data: studentData, isLoading: studentIsLoading, refetch } = useQuery<
        GetStudentByEmailQuery,
        GetStudentByEmailQueryVariables
    >(getStudentByEmail, { email: user?.attributes.email });
    const { data: documentsData, isLoading: documentsIsLoading } = useQuery<
        GetDocumentByStudentQuery,
        GetDocumentByStudentQueryVariables
    >(getDocumentByStudent, { studentId: studentData.getStudentByEmail?.items?.[0]?.id });

    return (
        <DashboardLayout title={t('profile:general-information-page-title')}>
            <CompletionModal documentsData={documentsData} studentData={studentData} />
            <Banner content={t('profile:disclaimer')} />
            <GeneralInformationForm
                documentsData={documentsData}
                isLoading={studentIsLoading || documentsIsLoading}
                refetch={refetch}
                studentData={studentData}
            />
        </DashboardLayout>
    );
};

export default withPrivateAccess(GeneralInformationPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
