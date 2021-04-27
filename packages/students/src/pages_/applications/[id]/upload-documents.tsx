import { getApplication, GetApplicationQuery } from '@applyfuture/graphql';
import { Stepper } from '@applyfuture/ui';
import { getStepsLabels, useQuery } from '@applyfuture/utils';
import Documents from '@components/applications/documents/Documents';
import Summary from '@components/applications/summary/Summary';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const ApplicationDocumentsPage: FC = () => {
    const router = useRouter();
    const { data, isLoading } = useQuery<GetApplicationQuery>(getApplication, {
        id: router.query.id
    });
    const application = data?.getApplication;

    const steps = getStepsLabels(application);

    return (
        <>
            <DashboardLayout title="Application Documents">
                <div className="mb-4">
                    <Stepper currentStep={0} steps={steps} />
                </div>
                <div className="flex items-start space-x-0 md:space-x-2">
                    <Summary application={application} isLoading={isLoading} />
                    <Documents application={application} isLoading={isLoading} student={null} />
                </div>
            </DashboardLayout>
        </>
    );
};

export default ApplicationDocumentsPage;
