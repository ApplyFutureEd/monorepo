import { withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Translation from '@components/translation/Translation';
import TranslationForm from '@components/translation/TranslationForm';
import { FC, useState } from 'react';

export type Filter = 'TRANSLATED' | 'UNTRANSLATED' | null;

const LandingPage: FC = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<Filter>(null);
    const [selected, setSelected] = useState('All');
    const [displayForm, setDisplayForm] = useState(false);

    const handleSearch = (query: string) => {
        setSearch(query.toLowerCase());
    };

    const handleFilter = (filter: Filter) => {
        setFilter(filter);
    };

    const handleSelected = (tab: string) => {
        setSelected(tab);
    };

    const handleToggleDisplayForm = () => {
        setDisplayForm(!displayForm);
    };

    return (
        <DashboardLayout
            displayForm={displayForm}
            filter={filter}
            handleFilter={handleFilter}
            handleSearch={handleSearch}
            handleSelected={handleSelected}
            handleToggleDisplayForm={handleToggleDisplayForm}
            selected={selected}
            title="Dashboard">
            {displayForm && (
                <TranslationForm newForm handleToggleDisplayForm={handleToggleDisplayForm} />
            )}
            <Translation filter={filter} search={search} selected={selected} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(LandingPage, {
    groups: ['admin', 'i18n'],
    redirection: '/sign-in'
});
