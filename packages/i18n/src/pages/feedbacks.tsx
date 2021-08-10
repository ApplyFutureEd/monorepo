import {
    deleteFeedback,
    DeleteFeedbackMutation,
    SearchableFeedbackSortableFields,
    SearchableSortDirection,
    searchFeedbacks,
    SearchFeedbacksQuery,
    SearchFeedbacksQueryVariables
} from '@applyfuture/graphql';
import { Feedback } from '@applyfuture/models';
import { Container, Loader } from '@applyfuture/ui';
import { graphql, toast, useQuery, withPrivateAccess } from '@applyfuture/utils';
import ContextMenu, { ContextMenuItem } from '@components/common/context-menu/ContextMenu';
import Table from '@components/feedbacks/Table';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { faTrash } from '@fortawesome/pro-light-svg-icons';
import { FC, useState } from 'react';
import { ItemParams, useContextMenu } from 'react-contexify';

const FeedbacksPage: FC = () => {
    const [variables, setVariables] = useState<SearchFeedbacksQueryVariables>({
        limit: 20,
        sort: {
            direction: 'desc' as SearchableSortDirection,
            field: 'lastUpdate' as SearchableFeedbackSortableFields
        }
    });
    const { data, isLoading, refetch } = useQuery<
        SearchFeedbacksQuery,
        SearchFeedbacksQueryVariables
    >(searchFeedbacks, variables);

    const { show } = useContextMenu({
        id: 'feedbacks'
    });
    const handleContextMenu = (e: React.MouseEvent, row: Feedback) => {
        show(e, { props: { row } });
    };

    const contextMenuItems: Array<ContextMenuItem> = [
        {
            icon: faTrash,
            label: 'Delete',
            onClick: async (args: ItemParams<any, any>) => {
                try {
                    await graphql<DeleteFeedbackMutation>(deleteFeedback, {
                        input: { id: args.props.row.id }
                    });
                    toast({
                        description: `Feedback successfully deleted`,
                        title: 'Feedback deleted',
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

    const total = data.searchFeedbacks?.total ? `(${data.searchFeedbacks?.total})` : '';

    return (
        <DashboardLayout title="Feedbacks">
            <ContextMenu id="feedbacks" items={contextMenuItems} />
            <Container innerPadding={false} title={`Feedbacks ${total}`}>
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

export default withPrivateAccess(FeedbacksPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
