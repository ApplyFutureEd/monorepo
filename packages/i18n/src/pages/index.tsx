import { withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Filters from '@components/search/filters';
import Search from '@components/search/search';
import SearchResults from '@components/search/searchResults';
import { FC, useState } from 'react';

const LandingPage: FC = () => {
    const [search, setSearch] = useState('');
    const [translated, setTranslated] = useState(false);
    const [untranslated, setUntranslated] = useState(false);
    const handleSearch = (query: string) => {
        setSearch(query.toLowerCase());
    };
    const headerComponents = [
        <Search key={0} handleSearch={handleSearch} />,
        <Filters
            key={1}
            setTranslated={setTranslated}
            title="Translated"
            translated={translated}
        />,
        <Filters
            key={2}
            setUntranslated={setUntranslated}
            title="Untranslated"
            untranslated={untranslated}
        />
    ];
    return (
        <DashboardLayout title="Dashboard">
            <div style={{ display: 'flex' }}>{headerComponents}</div>
            <SearchResults
                key={3}
                search={search}
                translated={translated}
                untranslated={untranslated}
            />
        </DashboardLayout>
    );
};

export default withPrivateAccess(LandingPage, {
    groups: ['admin', 'i18n'],
    redirection: '/sign-in'
});
