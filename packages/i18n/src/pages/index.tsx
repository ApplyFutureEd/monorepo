import { withPrivateAccess } from '@applyfuture/utils';
import { Button } from '@applyfuture/ui';
import AddKeyForm from '@components/forms/add-key/AddKeyForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Translation from '@components/translation/Translation';
import { FC, useState } from 'react';

export type Filter = 'TRANSLATED' | 'UNTRANSLATED' | null;

const LandingPage: FC = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<Filter>(null);
    const [displayForm, setDisplayForm] = useState(true);
    const [newKey, setNewKey] = useState({});
    const [selected, setSelected] = useState('All');

    const handleSearch = (query: string) => {
        setSearch(query.toLowerCase());
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
    const handleAddKey = (values: any) => {
        setNewKey(values);
    };
    return (
        <DashboardLayout
            filter={filter}
            handleFilter={handleFilter}
            handleSearch={handleSearch}
            handleSelected={handleSelected}
            selected={selected}
            title="Dashboard">
            <Translation filter={filter} search={search} selected={selected} />
            <Button type="button" variant="primary" onClick={handleDisplayForm}>
                New
            </Button>
            {displayForm || <AddKeyForm handleAddKey={handleAddKey} newKey={newKey} />}
        </DashboardLayout>
    );
};

export default withPrivateAccess(LandingPage, {
    groups: ['admin', 'i18n'],
    redirection: '/sign-in'
});
