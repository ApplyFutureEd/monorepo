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
import ApplicationRow from '@components/applications/application-row/ApplicationRow';
import SkeletonApplicationRow from '@components/applications/application-row/SkeletonApplicationRow';
import NoApplicationPanel from '@components/applications/no-application-panel/NoApplicationPanel';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';

const ApplicationsPage: FC = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();
    const [openedApplicationId, setOpenedApplicationId] = useState(
        (router.query.id as string) || ''
    );

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
    const isLoading = studentIsLoading || documentsIsLoading || applicationsIsLoading;

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

    const skeletons = Array.from({ length: 3 }, (_v, k) => k + 1);
    const applications = applicationsData.getApplicationByStudent?.items;
    const total = applications?.length ? `(${applications?.length})` : '';

    useEffect(() => {
        if (!isLoading && router.query.id && router.query.step) {
            document.getElementById(`${router.query.id}-${router.query.step}`)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [isLoading]);

    const renderApplications = () => {
        return (
            <>
                {applications && applications?.length > 0 ? (
                    applications?.map((application) => {
                        if (!application) {
                            return;
                        }

                        const handleClick = () => {
                            setOpenedApplicationId((prevId: string) =>
                                application?.id === prevId ? '' : application?.id
                            );
                        };

                        return (
                            application && (
                                <ApplicationRow
                                    key={application.id}
                                    application={application}
                                    open={application?.id === openedApplicationId}
                                    onClick={handleClick}
                                />
                            )
                        );
                    })
                ) : (
                    <NoApplicationPanel isCompleted={isCompleted} />
                )}
            </>
        );
    };

    return (
        <DashboardLayout title={t('application:page-title')}>
            <Container
                innerPadding={false}
                title={`${t('application:application-block-title')} ${total}`}>
                {isLoading
                    ? skeletons.map((_skeleton, index) => <SkeletonApplicationRow key={index} />)
                    : renderApplications()}
            </Container>
        </DashboardLayout>
    );
};

export default withPrivateAccess(ApplicationsPage, {
    groups: ['student'],
    redirection: '/sign-in'
});
