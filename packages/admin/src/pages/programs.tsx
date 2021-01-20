import { withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FC } from 'react';

const ProgramsPage: FC = () => {
    return <DashboardLayout title="Programs">Programs</DashboardLayout>;
};

export default withPrivateAccess(ProgramsPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
