import { Button } from '@applyfuture/ui';
import { withPrivateAccess } from '@applyfuture/utils';
import AddKeyForm from '@components/forms/add-key/AddKeyForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Search from '@components/search/Search';
import SearchResults from '@components/search/SearchResults';
import { faFilter } from '@fortawesome/pro-light-svg-icons';
import { FC, useState } from 'react';

export type Filter = 'TRANSLATED' | 'UNTRANSLATED' | null;

const LandingPage: FC = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<Filter>(null);
    const [displayForm, setDisplayForm] = useState(true);
    const [newKey, setNewKey] = useState({});
    const handleSearch = (query: string) => {
        setSearch(query.toLowerCase());
    };
    const handleFilter = (filter: Filter) => {
        setFilter(filter);
    };
    const handleDisplayForm = () => {
        setDisplayForm(!displayForm);
    };
    const handleAddKey = (values: any) => {
        setNewKey(values);
    };
    const isTranslated = filter === 'TRANSLATED';
    const isUntranslated = filter === 'UNTRANSLATED';
    return (
        <DashboardLayout title="Dashboard">
            <div style={{ display: 'flex' }}>
                <Search key={0} handleSearch={handleSearch} />
                <Button
                    key={1}
                    startIcon={faFilter}
                    variant={isTranslated ? 'primary' : 'secondary'}
                    onClick={() => {
                        isTranslated ? handleFilter(null) : handleFilter('TRANSLATED');
                    }}>
                    Translated
                </Button>
                <Button
                    key={2}
                    startIcon={faFilter}
                    variant={isUntranslated ? 'primary' : 'secondary'}
                    onClick={() => {
                        isUntranslated ? handleFilter(null) : handleFilter('UNTRANSLATED');
                    }}>
                    Untranslated
                </Button>
                <Button type="button" variant="primary" onClick={handleDisplayForm}>
                    New
                </Button>
            </div>
            {displayForm || <AddKeyForm handleAddKey={handleAddKey} newKey={newKey} />}
            <SearchResults key={3} filter={filter} search={search} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(LandingPage, {
    groups: ['admin', 'i18n'],
    redirection: '/sign-in'
});
