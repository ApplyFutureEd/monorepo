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
import { Stepper } from '@applyfuture/ui';
import {
    getStepsLabels,
    useAuthenticatedUser,
    useQuery,
    withPrivateAccess
} from '@applyfuture/utils';
import Documents from '@components/applications/documents/Documents';
import Summary from '@components/applications/summary/Summary';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const UploadDocumentsPage: FC = () => {
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

    const {
        data: applicationData,
        isLoading: applicationIsLoading
    } = useQuery<GetApplicationQuery>(getApplication, {
        id: router.query.id
    });

    const isLoading = studentIsLoading || documentsIsLoading || applicationIsLoading;
    const steps = getStepsLabels(applicationData.getApplication);

    return (
        <>
            <DashboardLayout title="Application Documents">
                <div className="mb-4">
                    <Stepper currentStep={0} isLoading={isLoading} steps={steps} />
                </div>
                <div className="flex items-start space-x-0 md:space-x-2">
                    <Summary applicationData={applicationData} isLoading={isLoading} />
                    <Documents
                        applicationData={applicationData}
                        documentsData={documentsData}
                        isLoading={isLoading}
                        studentData={studentData}
                    />
                </div>
            </DashboardLayout>
        </>
    );
};

export default withPrivateAccess(UploadDocumentsPage, {
    groups: ['student'],
    redirection: '/sign-in'
});