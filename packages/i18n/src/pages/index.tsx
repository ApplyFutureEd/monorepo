import { withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import SearchResults from '@components/search/SearchResults';
import { FC, useState } from 'react';

export type Filter = 'TRANSLATED' | 'UNTRANSLATED' | null;

const LandingPage: FC = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<Filter>(null);
    const handleSearch = (query: string) => {
        setSearch(query.toLowerCase());
    };
    const handleFilter = (filter: Filter) => {
        setFilter(filter);
    };
    return (
        <DashboardLayout
            filter={filter}
            handleFilter={handleFilter}
            handleSearch={handleSearch}
            title="Dashboard">
            <SearchResults filter={filter} search={search} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(LandingPage, {
    groups: ['admin', 'i18n'],
    redirection: '/sign-in'
});
