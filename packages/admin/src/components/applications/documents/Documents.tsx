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
import { Storage } from 'aws-amplify';
import { useTranslation } from 'next-translate';
import React, { FC, useState } from 'react';
import { ItemParams, useContextMenu } from 'react-contexify';

import ConfirmDeleteDocumentModal from './confirm-delete-document-modal/ConfirmDeleteDocumentModal';
import PreviewDocumentModal from './preview-document-modal/PreviewDocumentModal';

type Props = {
    data: GetDocumentByStudentQuery;
};

const Table: FC<Props> = (props) => {
    const { t } = useTranslation();
    const { data } = props;
    const [columns] = useState([
        { name: 'updatedAt', title: 'Last update' },
        {
            getCellValue: (row: Document) => t(`profile:${row.name}`),
            name: 'name',
            title: 'Name'
        },
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
            onClick: (args: ItemParams<any, any>) =>
                handlePreviewDocument(args.props.row.storageKey)
        },
        {
            icon: faTrash,
            label: 'Delete',
            onClick: async (args: ItemParams<any, any>) =>
                handleDeleteDocument(args.props.row.id, args.props.row.storageKey)
        }
    ];

    const [previewUrl, setPreviewUrl] = useState('');
    const [previewImageLoadError, setPreviewImageLoadError] = useState(false);
    const [isPreviewDocumentModalOpen, setIsPreviewDocumentModalOpen] = useState(false);

    const handlePreviewDocumentModalClose = () => {
        setIsPreviewDocumentModalOpen(false);
        setPreviewImageLoadError(false);
    };

    const handlePreviewError = () => {
        setPreviewImageLoadError(true);
    };

    const handlePreviewDocument = async (storageKey: string) => {
        try {
            const result: any = await Storage.get(storageKey, {
                level: 'public'
            });
            setPreviewUrl(result);
            setIsPreviewDocumentModalOpen(true);
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: 'An error occured',
                variant: 'error'
            });
        }
    };

    const [documentToDelete, setDocumentToDelete] = useState({ id: '', storageKey: '' });
    const [isConfirmDeleteDocumentModalOpen, setIsConfirmDeleteDocumentModalOpen] = useState(false);

    const handleConfirmDeleteDocumentModalClose = () => {
        setIsConfirmDeleteDocumentModalOpen(false);
    };

    const handleDelete = async (id: string, storageKey: string) => {
        {
            try {
                await graphql<DeleteDocumentMutation>(deleteDocument, {
                    input: { id }
                });
                await Storage.remove(storageKey, { level: 'public' });
                toast({
                    description: `${storageKey} successfully deleted`,
                    title: 'Document deleted',
                    variant: 'success'
                });
            } catch (error) {
                toast({
                    description: `${error.message}`,
                    title: 'An error occured',
                    variant: 'error'
                });
            } finally {
                setIsConfirmDeleteDocumentModalOpen(false);
                setDocumentToDelete({ id: '', storageKey: '' });
            }
        }
    };

    const handleCancel = async () => {
        setIsConfirmDeleteDocumentModalOpen(false);
        setDocumentToDelete({ id: '', storageKey: '' });
    };

    const handleDeleteDocument = (id: string, storageKey: string) => {
        setIsConfirmDeleteDocumentModalOpen(true);
        setDocumentToDelete({ id, storageKey });
    };

    return (
        <>
            <ContextMenu id="documents" items={contextMenuItems} />
            <PreviewDocumentModal
                handleClose={handlePreviewDocumentModalClose}
                handlePreviewError={handlePreviewError}
                open={isPreviewDocumentModalOpen}
                previewImageLoadError={previewImageLoadError}
                previewUrl={previewUrl}
            />
            <ConfirmDeleteDocumentModal
                documentToDelete={documentToDelete}
                handleCancel={handleCancel}
                handleClose={handleConfirmDeleteDocumentModalClose}
                handleDelete={handleDelete}
                open={isConfirmDeleteDocumentModalOpen}
            />
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
