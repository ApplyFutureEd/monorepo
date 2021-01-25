import {
    createProgram,
    deleteProgram,
    getSchool,
    GetSchoolQuery,
    searchPrograms,
    SearchProgramsQuery,
    SearchProgramsQueryVariables
} from '@applyfuture/graphql';
import { Program } from '@applyfuture/models';
import { Button, Container, Loader } from '@applyfuture/ui';
import { mutation, toast, useQuery, withPrivateAccess } from '@applyfuture/utils';
import ContextMenu, { ContextMenuItem } from '@components/common/context-menu/ContextMenu';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Table from '@components/programs/Table';
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

const ProgramsPage: FC = () => {
    const router = useRouter();
    const [variables, setVariables] = useState<SearchProgramsQueryVariables>({
        limit: 20
    });
    const { data, isLoading, refetch } = useQuery<
        SearchProgramsQuery,
        SearchProgramsQueryVariables
    >(searchPrograms, variables);

    const { show } = useContextMenu({
        id: 'programs'
    });
    const handleContextMenu = (e: React.MouseEvent, row: Program) => {
        show(e, { props: { row } });
    };

    const contextMenuItems: Array<ContextMenuItem> = [
        {
            icon: faPencil,
            label: 'Edit',
            onClick: (args: ItemParams<any, any>) =>
                router.push(`programs/update?id=${args.props.row.id}`)
        },
        {
            icon: faCopy,
            label: 'Duplicate',
            onClick: async (args: ItemParams<any, any>) => {
                try {
                    const { getSchool: school } = await mutation<GetSchoolQuery>(getSchool, {
                        id: args.props.row.schoolId
                    });
                    const program = {
                        ...args.props.row,
                        name: `${args.props.row.name} copy`,
                        slug: kebabCase(`${args.props.row.name} ${school?.slug} copy`)
                    };

                    delete program.id;
                    delete program.__typename;
                    delete program.updatedAt;
                    delete program.createdAt;
                    delete program.school;

                    await mutation(createProgram, {
                        input: program
                    });
                    toast({
                        description: `${args.props.row.name} successfully duplicated`,
                        title: 'Program duplicated',
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
                    `https://www.applyfuture.com/programs/${args.props.row.slug}`,
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
                    await mutation(deleteProgram, { input: { id: args.props.row.id } });
                    toast({
                        description: `${args.props.row.name} successfully deleted`,
                        title: 'Program deleted',
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
                router.push(`/programs/create`);
            }}>
            New
        </Button>
    ];
    const total = data.searchPrograms?.total ? `(${data.searchPrograms?.total})` : '';

    return (
        <DashboardLayout title="Programs">
            <ContextMenu id="programs" items={contextMenuItems} />
            <Container
                headerComponents={headerComponents}
                innerPadding={false}
                title={`Programs ${total}`}>
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

export default withPrivateAccess(ProgramsPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
