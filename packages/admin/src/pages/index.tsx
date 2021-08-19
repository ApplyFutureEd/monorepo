import { withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FC } from 'react';

const LandingPage: FC = () => {
    return (
        <DashboardLayout title="Dashboard">
            <h1>Dashboard page</h1>
        </DashboardLayout>
    );
};

export default withPrivateAccess(LandingPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
