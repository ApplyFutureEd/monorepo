import { withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import TranslationForm from '@components/translation/TranslationForm';
import TranslationsList from '@components/translation/TranslationsList';
import { FC, useState } from 'react';

export type Filter = 'TRANSLATED' | 'UNTRANSLATED' | null;

const LandingPage: FC = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<Filter>(null);
    const [selected, setSelected] = useState('all');
    const [displayForm, setDisplayForm] = useState(false);

    const handleSearch = (query: string) => {
        setSearch(query.toLowerCase().replace(/ /g, '-'));
    };

    const handleFilter = (filter: Filter) => {
        setFilter(filter);
    };

    const handleSelected = (tab: string) => {
        setSelected(tab);
    };

    const handleDisplayForm = () => {
        setDisplayForm(!displayForm);
    };

    return (
        <DashboardLayout
            displayForm={displayForm}
            filter={filter}
            handleDisplayForm={handleDisplayForm}
            handleFilter={handleFilter}
            handleSearch={handleSearch}
            handleSelected={handleSelected}
            selected={selected}
            title="Dashboard">
            {displayForm && <TranslationForm newForm handleDisplayForm={handleDisplayForm} />}
            <TranslationsList filter={filter} search={search} selected={selected} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(LandingPage, {
    groups: ['admin', 'i18n'],
    redirection: '/sign-in'
});
