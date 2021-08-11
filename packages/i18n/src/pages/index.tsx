import { withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Search from '@components/search/search';
import { FC, useState } from 'react';

const LandingPage: FC = () => {
    const [search, setSearch] = useState('');
    const handleChange = (e: any) => {
        setSearch(e.target.value);
    };
    return (
        <DashboardLayout title="Dashboard">
            <Search handleChange={handleChange} search={search} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(LandingPage, {
    groups: ['admin', 'i18n'],
    redirection: '/sign-in'
});
