import {
    searchPrograms,
    SearchProgramsQuery,
    SearchProgramsQueryVariables
} from '@applyfuture/graphql';
import { Program } from '@applyfuture/models';
import { Button, Container, Loader } from '@applyfuture/ui';
import { useQuery, withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import ContextMenu, { ContextMenuItem } from '@components/tables/common/ContextMenu';
import Table from '@components/tables/programs/Table';
import {
    faCopy,
    faExternalLinkSquare,
    faPencil,
    faPlus,
    faTrash
} from '@fortawesome/pro-light-svg-icons';
import React, { FC, useState } from 'react';
import { useContextMenu } from 'react-contexify';

const ProgramsPage: FC = () => {
    const [variables, setVariables] = useState<SearchProgramsQueryVariables>({
        limit: 20
    });
    const { data, isLoading } = useQuery<SearchProgramsQuery, SearchProgramsQueryVariables>(
        searchPrograms,
        variables
    );

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
            onClick: ({ event, props, triggerEvent, data }: any) => console.log(props)
        },
        {
            icon: faCopy,
            label: 'Duplicate',
            onClick: ({ event, props, triggerEvent, data }: any) => console.log(props)
        },
        {
            icon: faExternalLinkSquare,
            label: 'Visit',
            onClick: ({ event, props, triggerEvent, data }: any) => console.log(props)
        },
        {
            icon: faTrash,
            label: 'Delete',
            onClick: ({ event, props, triggerEvent, data }: any) => console.log(props)
        }
    ];

    const headerComponents = [
        <Button
            key={0}
            startIcon={faPlus}
            onClick={() => {
                console.log('go to /programs/create');
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
