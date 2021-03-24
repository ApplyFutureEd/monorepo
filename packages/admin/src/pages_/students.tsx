import {
    deleteStudent,
    SearchableSortDirection,
    SearchableStudentSortableFields,
    searchStudents,
    SearchStudentsQuery,
    SearchStudentsQueryVariables
} from '@applyfuture/graphql';
import { Student } from '@applyfuture/models';
import { Container, Loader } from '@applyfuture/ui';
import { graphql, toast, toShortId, useQuery, withPrivateAccess } from '@applyfuture/utils';
import ContextMenu, { ContextMenuItem } from '@components/common/context-menu/ContextMenu';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Table from '@components/students/Table';
import { faPencil, faTrash } from '@fortawesome/pro-light-svg-icons';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { ItemParams, useContextMenu } from 'react-contexify';

const StudentsPage: FC = () => {
    const router = useRouter();
    const [variables, setVariables] = useState<SearchStudentsQueryVariables>({
        limit: 20,
        sort: {
            direction: 'desc' as SearchableSortDirection,
            field: 'lastUpdate' as SearchableStudentSortableFields
        }
    });
    const { data, isLoading, refetch } = useQuery<
        SearchStudentsQuery,
        SearchStudentsQueryVariables
    >(searchStudents, variables);

    const { show } = useContextMenu({
        id: 'students'
    });
    const handleContextMenu = (e: React.MouseEvent, row: Student) => {
        show(e, { props: { row } });
    };

    const contextMenuItems: Array<ContextMenuItem> = [
        {
            icon: faPencil,
            label: 'Edit',
            onClick: (args: ItemParams<any, any>) =>
                router.push(`students/update?id=${args.props.row.id}`)
        },
        {
            icon: faTrash,
            label: 'Delete',
            onClick: async (args: ItemParams<any, any>) => {
                try {
                    await graphql(deleteStudent, {
                        input: { id: args.props.row.id }
                    });
                    toast({
                        description: `Student ${toShortId(args.props.row.id)} successfully deleted`,
                        title: 'Student deleted',
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

    const total = data.searchStudents?.total ? `(${data.searchStudents?.total})` : '';

    return (
        <DashboardLayout title="Students">
            <ContextMenu id="students" items={contextMenuItems} />
            <Container innerPadding={false} title={`Students ${total}`}>
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

export default withPrivateAccess(StudentsPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
