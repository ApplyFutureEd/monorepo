import { withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import FilterResults from '@components/search/filterResults';
import Search from '@components/search/search';
import { FC, useState } from 'react';

const LandingPage: FC = () => {
    // we catch the requested key we want to translate
    const createFilter = (value: string) => {
        let newFilter = {};
        if (value) {
            newFilter = { value };
        }
        return newFilter;
    };
    // we create a variable to filter
    const [variable, setVariable] = useState({
        filter: createFilter('')
    });
    // we give value of the requested key to the variable to filter
    const handleSearch = (filter: any) => {
        setVariable(filter);
    };
    const headerComponents = [
        <Search key={0} handleSearch={handleSearch} />,
        <FilterResults key={1} variable={variable} />
    ];
    return <DashboardLayout title="Dashboard">{headerComponents}</DashboardLayout>;
};

export default withPrivateAccess(LandingPage, {
    groups: ['admin', 'i18n'],
    redirection: '/sign-in'
});
