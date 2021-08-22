import {
    getApplication,
    GetApplicationQuery,
    getDocumentByStudent,
    GetDocumentByStudentQuery,
    GetDocumentByStudentQueryVariables,
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import { useAuthenticatedUser, useQuery, withPrivateAccess } from '@applyfuture/utils';
import Summary from '@components/applications/summary/Summary';
import UploadMissingDocuments from '@components/applications/upload-missing-documents/UploadMissingDocuments';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const UploadMissingDocumentsPage: FC = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { user } = useAuthenticatedUser();

    const { data: studentData, isLoading: studentIsLoading } = useQuery<
        GetStudentByEmailQuery,
        GetStudentByEmailQueryVariables
    >(getStudentByEmail, { email: user?.attributes.email });

    const { data: documentsData, isLoading: documentsIsLoading } = useQuery<
        GetDocumentByStudentQuery,
        GetDocumentByStudentQueryVariables
    >(getDocumentByStudent, { studentId: studentData.getStudentByEmail?.items?.[0]?.id });

    const { data: applicationData, isLoading: applicationIsLoading } =
        useQuery<GetApplicationQuery>(getApplication, {
            id: router.query.id
        });

    const isLoading = studentIsLoading || documentsIsLoading || applicationIsLoading;

    return (
        <DashboardLayout title={t('application:page-title')}>
            <div className="flex items-start space-x-0 md:space-x-2">
                <Summary applicationData={applicationData} isLoading={isLoading} />
                <UploadMissingDocuments
                    applicationData={applicationData}
                    documentsData={documentsData}
                    isLoading={isLoading}
                    studentData={studentData}
                />
            </div>
        </DashboardLayout>
    );
};

export default withPrivateAccess(UploadMissingDocumentsPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
