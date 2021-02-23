import {
    createSchool,
    CreateSchoolMutation,
    deleteSchool,
    DeleteSchoolMutation,
    getSchool,
    GetSchoolQuery,
    searchSchools,
    SearchSchoolsQuery,
    SearchSchoolsQueryVariables
} from '@applyfuture/graphql';
import { School } from '@applyfuture/models';
import { Button, Container, Loader } from '@applyfuture/ui';
import { graphql, toast, useQuery, withPrivateAccess } from '@applyfuture/utils';
import ContextMenu, { ContextMenuItem } from '@components/common/context-menu/ContextMenu';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Table from '@components/schools/Table';
import {
    faCopy,
    faExternalLinkSquare,
    faPencil,
    faPlus,
    faTrash
} from '@fortawesome/pro-light-svg-icons';
import kebabCase from 'lodash/kebabCase';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { ItemParams, useContextMenu } from 'react-contexify';

const SchoolsPage: FC = () => {
    const router = useRouter();
    const [variables, setVariables] = useState<SearchSchoolsQueryVariables>({
        limit: 20
    });
    const { data, isLoading, refetch } = useQuery<SearchSchoolsQuery, SearchSchoolsQueryVariables>(
        searchSchools,
        variables
    );

    const { show } = useContextMenu({
        id: 'schools'
    });
    const handleContextMenu = (e: React.MouseEvent, row: School) => {
        show(e, { props: { row } });
    };

    const contextMenuItems: Array<ContextMenuItem> = [
        {
            icon: faPencil,
            label: 'Edit',
            onClick: (args: ItemParams<any, any>) =>
                router.push(`schools/update?id=${args.props.row.id}`)
        },
        {
            icon: faCopy,
            label: 'Duplicate',
            onClick: async (args: ItemParams<any, any>) => {
                try {
                    const school = {
                        ...args.props.row,
                        name: `${args.props.row.name} copy`,
                        slug: kebabCase(`${args.props.row.name} copy`)
                    };

                    delete school.id;
                    delete school.__typename;
                    delete school.updatedAt;
                    delete school.createdAt;
                    delete school.programs;

                    await graphql<CreateSchoolMutation>(createSchool, {
                        input: school
                    });
                    toast({
                        description: `${args.props.row.name} successfully duplicated`,
                        title: 'School duplicated',
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
        },
        {
            icon: faExternalLinkSquare,
            label: 'Visit',
            onClick: (args: ItemParams<any, any>) => {
                const win = window.open(
                    `https://www.applyfuture.com/schools/${args.props.row.slug}`,
                    '_blank'
                );
                win?.focus();
            }
        },
        {
            icon: faTrash,
            label: 'Delete',
            onClick: async (args: ItemParams<any, any>) => {
                try {
                    await graphql<DeleteSchoolMutation>(deleteSchool, {
                        input: { id: args.props.row.id }
                    });
                    toast({
                        description: `${args.props.row.name} successfully deleted`,
                        title: 'School deleted',
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

    const headerComponents = [
        <Button
            key={0}
            startIcon={faPlus}
            onClick={() => {
                router.push(`/schools/create`);
            }}>
            New
        </Button>
    ];
    const total = data.searchSchools?.total ? `(${data.searchSchools?.total})` : '';

    return (
        <DashboardLayout title="Schools">
            <ContextMenu id="schools" items={contextMenuItems} />
            <Container
                headerComponents={headerComponents}
                innerPadding={false}
                title={`Schools ${total}`}>
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

export default withPrivateAccess(SchoolsPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
