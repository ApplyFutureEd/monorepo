import {
    deleteDocument,
    DeleteDocumentMutation,
    GetDocumentByStudentQuery
} from '@applyfuture/graphql';
import { Document } from '@applyfuture/models';
import { graphql, toast } from '@applyfuture/utils';
import ContextMenu, { ContextMenuItem } from '@components/common/context-menu/ContextMenu';
import DateFormatter from '@components/common/date-formatter/DateFormatter';
import ResizingPanel from '@components/common/resizing-panel/ResizingPanel';
import TableRow from '@components/common/table-row/TableRow';
import {
    DataTypeProvider,
    IntegratedSorting,
    SearchState,
    SortingState,
    TableColumnWidthInfo
} from '@devexpress/dx-react-grid';
import {
    Grid,
    SearchPanel,
    TableColumnResizing,
    TableHeaderRow,
    Toolbar,
    VirtualTable
} from '@devexpress/dx-react-grid-material-ui';
import { faEye, faTrash } from '@fortawesome/pro-light-svg-icons';
import React, { FC, useState } from 'react';
import { ItemParams, useContextMenu } from 'react-contexify';

type Props = {
    data: GetDocumentByStudentQuery;
};

const Table: FC<Props> = (props) => {
    const { data } = props;
    const [columns] = useState([
        { name: 'updatedAt', title: 'Last update' },
        { name: 'name', title: 'Name' },
        { name: 'storageKey', title: 'File' }
    ]);
    const [defaultColumnWidths] = useState([
        { columnName: 'updatedAt', width: 140 },
        { columnName: 'name', width: 300 },
        { columnName: 'storageKey', width: 180 }
    ]);
    const [columnWidths, setColumnWidths] = useState<TableColumnWidthInfo[]>(defaultColumnWidths);
    const [resizingMode, setResizingMode] = useState('widget');
    const handleResetWidths = () => {
        setColumnWidths(defaultColumnWidths);
    };

    const handleColumnWidthsChange = (nextColumnWidths: TableColumnWidthInfo[]) => {
        setColumnWidths(nextColumnWidths);
    };

    const { show } = useContextMenu({
        id: 'documents'
    });
    const handleContextMenu = (e: React.MouseEvent, row: Document) => {
        show(e, { props: { row } });
    };

    const contextMenuItems: Array<ContextMenuItem> = [
        {
            icon: faEye,
            label: 'Inspect',
            onClick: (args: ItemParams<any, any>) => console.log(args.props.row.id)
        },
        {
            icon: faTrash,
            label: 'Delete',
            onClick: async (args: ItemParams<any, any>) => {
                try {
                    await graphql<DeleteDocumentMutation>(deleteDocument, {
                        input: { id: args.props.row.id }
                    });
                    toast({
                        description: `${args.props.row.storageKey} successfully deleted`,
                        title: 'Document deleted',
                        variant: 'success'
                    });
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

    return (
        <>
            <ContextMenu id="documents" items={contextMenuItems} />
            <Grid columns={columns} rows={data?.getDocumentByStudent?.items || []}>
                <DataTypeProvider
                    for={['updatedAt']}
                    formatterComponent={(props) => (
                        <DateFormatter {...props} scheme="dd/MM/yy HH:MM" />
                    )}
                />
                <SearchState />
                <SortingState defaultSorting={[{ columnName: 'updatedAt', direction: 'desc' }]} />
                <IntegratedSorting />
                <VirtualTable
                    rowComponent={(props) => (
                        <TableRow {...props} handleContextMenu={handleContextMenu} />
                    )}
                />
                <TableColumnResizing
                    columnWidths={columnWidths}
                    resizingMode={resizingMode}
                    onColumnWidthsChange={handleColumnWidthsChange}
                />
                <TableHeaderRow showSortingControls />
                <Toolbar />
                <SearchPanel />
                <ResizingPanel
                    changeMode={setResizingMode}
                    defaultValue={resizingMode}
                    resetWidths={handleResetWidths}
                />
            </Grid>
        </>
    );
};

export default Table;
