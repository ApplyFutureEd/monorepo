import { getApplication, GetApplicationQuery } from '@applyfuture/graphql';
import { useQuery } from '@applyfuture/utils';
import Summary from '@components/applications/Summary';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const ApplicationDocumentsPage: FC = () => {
    const router = useRouter();
    const { data, isLoading } = useQuery<GetApplicationQuery>(getApplication, {
        id: router.query.id
    });
    const application = data?.getApplication;

    return (
        <>
            <DashboardLayout title="Application Documents">
                <div className="flex items-start space-x-0 md:space-x-2">
                    <Summary application={application} isLoading={isLoading} />
                </div>
            </DashboardLayout>
        </>
    );
};

export default ApplicationDocumentsPage;
