import { withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FC } from 'react';

const LandingPage: FC = () => {
    return <DashboardLayout title="Dashboard">Admin</DashboardLayout>;
};

export default withPrivateAccess(LandingPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
