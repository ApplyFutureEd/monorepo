import { withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FC } from 'react';

const CreateProgramPage: FC = () => {
    return (
        <DashboardLayout title="Program">
            <h1>Program create</h1>
        </DashboardLayout>
    );
};

export default withPrivateAccess(CreateProgramPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
