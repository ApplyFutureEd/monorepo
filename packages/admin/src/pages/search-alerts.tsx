import {
    deleteSearchAlert,
    DeleteSearchAlertMutation,
    SearchableSearchAlertSortableFields,
    SearchableSortDirection,
    searchSearchAlerts,
    SearchSearchAlertsQuery,
    SearchSearchAlertsQueryVariables
} from '@applyfuture/graphql';
import { SearchAlert } from '@applyfuture/models';
import { Container, Loader } from '@applyfuture/ui';
import { graphql, toast, useQuery, withPrivateAccess } from '@applyfuture/utils';
import ContextMenu, { ContextMenuItem } from '@components/common/context-menu/ContextMenu';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Table from '@components/search-alerts/Table';
import { faTrash } from '@fortawesome/pro-light-svg-icons';
import { FC, useState } from 'react';
import { ItemParams, useContextMenu } from 'react-contexify';

const SearchAlertsPage: FC = () => {
    const [variables, setVariables] = useState<SearchSearchAlertsQueryVariables>({
        limit: 20,
        sort: {
            direction: 'desc' as SearchableSortDirection,
            field: 'lastUpdate' as SearchableSearchAlertSortableFields
        }
    });
    const { data, isLoading, refetch } = useQuery<SearchSearchAlertsQuery>(
        searchSearchAlerts,
        variables
    );

    const { show } = useContextMenu({
        id: 'searchAlerts'
    });
    const handleContextMenu = (e: React.MouseEvent, row: SearchAlert) => {
        show(e, { props: { row } });
    };

    const contextMenuItems: Array<ContextMenuItem> = [
        {
            icon: faTrash,
            label: 'Delete',
            onClick: async (args: ItemParams<any, any>) => {
                try {
                    await graphql<DeleteSearchAlertMutation>(deleteSearchAlert, {
                        input: { id: args.props.row.id }
                    });
                    toast({
                        description: '',
                        title: 'Search Alert deleted',
                        variant: 'success'
                    });
                    refetch();
                } catch (error) {
                    toast({
                        description: `${error.message}`,
                        title: 'An error occured',
                        variant: 'error'
                    });
                }
            }
        }
    ];

    const total = data.searchSearchAlerts?.items
        ? `(${data.searchSearchAlerts?.items.length})`
        : '';

    return (
        <DashboardLayout title="Search Alerts">
            <ContextMenu id="searchAlerts" items={contextMenuItems} />
            <Container innerPadding={false} title={`Search Alerts ${total}`}>
                <div className="relative">
                    {isLoading && (
                        <div className="z-1000 absolute inset-1/2 w-full h-full bg-gray-100 opacity-75">
                            <Loader />
                        </div>
                    )}
                    <Table
                        data={data}
                        handleContextMenu={handleContextMenu}
                        setVariables={setVariables}
                    />
                </div>
            </Container>
        </DashboardLayout>
    );
};

export default withPrivateAccess(SearchAlertsPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
