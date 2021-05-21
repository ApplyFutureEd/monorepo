import {
    getApplication,
    GetApplicationQuery,
    getDocumentByStudent,
    GetDocumentByStudentQuery,
    GetDocumentByStudentQueryVariables
} from '@applyfuture/graphql';
import { useQuery, withPrivateAccess } from '@applyfuture/utils';
import Content from '@components/applications/content/Content';
import Summary from '@components/applications/summary/Summary';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const UpdateApplicationPage: FC = () => {
    const router = useRouter();
    const {
        data: applicationData,
        isLoading: applicationIsLoading
    } = useQuery<GetApplicationQuery>(getApplication, { id: router.query.id as string });
    const {
        data: documentsData,
        isLoading: documentsIsLoading,
        refetch: documentsRefetch
    } = useQuery<GetDocumentByStudentQuery, GetDocumentByStudentQueryVariables>(
        getDocumentByStudent,
        { studentId: applicationData.getApplication?.student?.id }
    );

    const isLoading = applicationIsLoading || documentsIsLoading;

    const handleRefetch = () => {
        documentsRefetch();
    };

    return (
        <DashboardLayout title="Application">
            <div className="flex items-start space-x-0 md:space-x-2">
                <Summary
                    applicationData={applicationData}
                    documentsData={documentsData}
                    isLoading={isLoading}
                />
                <Content
                    applicationData={applicationData}
                    documentsData={documentsData}
                    isLoading={isLoading}
                    refetch={handleRefetch}
                />
            </div>
        </DashboardLayout>
    );
};

export default withPrivateAccess(UpdateApplicationPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
