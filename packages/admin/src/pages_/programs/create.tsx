import { listSchools, ListSchoolsQuery } from '@applyfuture/graphql';
import { useQuery, withPrivateAccess } from '@applyfuture/utils';
import CreateProgramForm from '@components/forms/create-program/CreateProgramForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FC } from 'react';

const CreateProgramPage: FC = () => {
    const { data, isLoading } = useQuery<ListSchoolsQuery>(listSchools, {});

    return (
        <DashboardLayout title="Program">
            <CreateProgramForm data={data} isLoading={isLoading} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(CreateProgramPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
