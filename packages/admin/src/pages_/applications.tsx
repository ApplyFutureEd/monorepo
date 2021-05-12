import {
    deleteApplication,
    DeleteApplicationMutation,
    SearchableApplicationSortableFields,
    SearchableSortDirection,
    searchApplications,
    SearchApplicationsQuery,
    SearchApplicationsQueryVariables
} from '@applyfuture/graphql';
import { Application } from '@applyfuture/models';
import { Container, Loader } from '@applyfuture/ui';
import { graphql, toast, toShortId, useQuery, withPrivateAccess } from '@applyfuture/utils';
import Table from '@components/applications/table/Table';
import ContextMenu, { ContextMenuItem } from '@components/common/context-menu/ContextMenu';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { faEye, faTrash } from '@fortawesome/pro-light-svg-icons';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { ItemParams, useContextMenu } from 'react-contexify';

const ApplicationsPage: FC = () => {
    const router = useRouter();
    const [variables, setVariables] = useState<SearchApplicationsQueryVariables>({
        limit: 20,
        sort: {
            direction: 'desc' as SearchableSortDirection,
            field: 'lastUpdate' as SearchableApplicationSortableFields
        }
    });
    const { data, isLoading, refetch } = useQuery<
        SearchApplicationsQuery,
        SearchApplicationsQueryVariables
    >(searchApplications, variables);

    const { show } = useContextMenu({
        id: 'applications'
    });
    const handleContextMenu = (e: React.MouseEvent, row: Application) => {
        show(e, { props: { row } });
    };

    const contextMenuItems: Array<ContextMenuItem> = [
        {
            icon: faEye,
            label: 'Inspect',
            onClick: (args: ItemParams<any, any>) =>
                router.push(`applications/update?id=${args.props.row.id}`)
        },
        {
            icon: faTrash,
            label: 'Delete',
            onClick: async (args: ItemParams<any, any>) => {
                try {
                    await graphql<DeleteApplicationMutation>(deleteApplication, {
                        input: { id: args.props.row.id }
                    });
                    toast({
                        description: `${toShortId(args.props.row.id)} successfully deleted`,
                        title: 'Application deleted',
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

    const total = data.searchApplications?.total ? `(${data.searchApplications?.total})` : '';

    return (
        <DashboardLayout title="Applications">
            <ContextMenu id="applications" items={contextMenuItems} />
            <Container innerPadding={false} title={`Applications ${total}`}>
                <div className="relative">
                    {isLoading && (
                        <div className="inset-1/2 z-1000 absolute w-full h-full bg-gray-100 opacity-75">
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

export default withPrivateAccess(ApplicationsPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
