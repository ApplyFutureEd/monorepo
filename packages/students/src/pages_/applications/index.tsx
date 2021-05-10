import {
    getApplicationByStudent,
    GetApplicationByStudentQuery,
    GetApplicationByStudentQueryVariables,
    getDocumentByStudent,
    GetDocumentByStudentQuery,
    GetDocumentByStudentQueryVariables,
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import { Container } from '@applyfuture/ui';
import {
    checkCompletion,
    useAuthenticatedUser,
    useQuery,
    withPrivateAccess
} from '@applyfuture/utils';
import NoApplicationPanel from '@components/applications/no-application-panel/NoApplicationPanel';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const ApplicationsPage: FC = () => {
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();

    const { data: studentData, isLoading: studentIsLoading } = useQuery<
        GetStudentByEmailQuery,
        GetStudentByEmailQueryVariables
    >(getStudentByEmail, { email: user?.attributes.email });

    const { data: documentsData, isLoading: documentsIsLoading } = useQuery<
        GetDocumentByStudentQuery,
        GetDocumentByStudentQueryVariables
    >(getDocumentByStudent, { studentId: studentData.getStudentByEmail?.items?.[0]?.id });

    const { data: applicationsData, isLoading: applicationsIsLoading } = useQuery<
        GetApplicationByStudentQuery,
        GetApplicationByStudentQueryVariables
    >(getApplicationByStudent, { studentId: studentData.getStudentByEmail?.items?.[0]?.id });

    const student = studentData?.getStudentByEmail?.items?.[0];
    const documents = documentsData?.getDocumentByStudent?.items;

    const {
        generalInformation,
        educationHistory,
        testScores,
        backgroundInformation,
        uploadDocuments
    } = checkCompletion(student, documents);

    const isCompleted =
        generalInformation &&
        educationHistory &&
        testScores &&
        backgroundInformation &&
        uploadDocuments;

    const applications = applicationsData.getApplicationByStudent?.items;
    const total = applications?.length ? `(${applications?.length})` : '';

    return (
        <DashboardLayout title={t('application:page-title')}>
            <Container title={`${t('application:application-block-title')} ${total}`}>
                {applications && applications?.length > 0 ? (
                    'apps'
                ) : (
                    <NoApplicationPanel isCompleted={isCompleted} />
                )}
            </Container>
        </DashboardLayout>
    );
};

export default withPrivateAccess(ApplicationsPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
