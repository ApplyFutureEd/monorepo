import {
    SearchableApplicationFilterInput,
    SearchableApplicationSortableFields,
    SearchableApplicationSortInput,
    SearchableSortDirection,
    SearchApplicationsQuery,
    SearchApplicationsQueryVariables
} from '@applyfuture/graphql';
import { Application } from '@applyfuture/models';
import { toShortId } from '@applyfuture/utils';
import DateFormatter from '@components/common/date-formatter/DateFormatter';
import NotificationsFormatter from '@components/common/notifications-formatter/NotificationsFormatter';
import ResizingPanel from '@components/common/resizing-panel/ResizingPanel';
import StepFormatter from '@components/common/step-formatter/StepFormatter';
import TableRow from '@components/common/table-row/TableRow';
import {
    DataTypeProvider,
    Filter,
    FilteringState,
    SearchState,
    Sorting,
    SortingState,
    TableColumnWidthInfo
} from '@devexpress/dx-react-grid';
import {
    Grid,
    SearchPanel,
    TableColumnResizing,
    TableFilterRow,
    TableHeaderRow,
    Toolbar,
    VirtualTable
} from '@devexpress/dx-react-grid-material-ui';
import React, { FC, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
    data: SearchApplicationsQuery;
    handleContextMenu: (event: React.MouseEvent, row: Application) => void;
    setVariables: React.Dispatch<React.SetStateAction<SearchApplicationsQueryVariables>>;
};

const Table: FC<Props> = (props) => {
    const { data, handleContextMenu, setVariables } = props;
    const [columns] = useState([
        { name: 'updatedAt', title: 'Last update' },
        {
            getCellValue: (row: Application) => row.student?.firstName,
            name: 'studentFirstName',
            title: 'First Name'
        },
        {
            getCellValue: (row: Application) => row.student?.lastName,
            name: 'studentLastName',
            title: 'Last Name'
        },
        {
            getCellValue: (row: Application) => row.student?.passportNumber,
            name: 'passportNumber',
            title: 'Passport Number'
        },
        {
            getCellValue: (row: Application) => toShortId(row.id),
            name: 'applicationId',
            title: 'Application ID'
        },
        {
            getCellValue: (row: Application) => row.steps,
            name: 'step',
            title: 'Step'
        },
        {
            name: 'todo',
            title: 'Todo'
        },
        {
            getCellValue: (row: Application) => row.notifications,
            name: 'notifications',
            title: 'Notifications'
        }
    ]);
    const [defaultColumnWidths] = useState([
        { columnName: 'updatedAt', width: 140 },
        { columnName: 'studentFirstName', width: 100 },
        { columnName: 'studentLastName', width: 100 },
        { columnName: 'passportNumber', width: 100 },
        { columnName: 'applicationId', width: 90 },
        { columnName: 'step', width: 300 },
        { columnName: 'todo', width: 200 },
        { columnName: 'notifications', width: 140 }
    ]);
    const [columnWidths, setColumnWidths] = useState<TableColumnWidthInfo[]>(defaultColumnWidths);
    const [resizingMode, setResizingMode] = useState('widget');
    const handleResetWidths = () => {
        setColumnWidths(defaultColumnWidths);
    };

    const handleColumnWidthsChange = (nextColumnWidths: TableColumnWidthInfo[]) => {
        setColumnWidths(nextColumnWidths);
    };

    const handleSearch = (gridSearchValue: string) => {
        if (!gridSearchValue) {
            return setVariables({
                limit: 20
            });
        }
        setVariables({
            filter: {
                or: [
                    {
                        id: { matchPhrasePrefix: gridSearchValue },
                        todo: { matchPhrasePrefix: gridSearchValue }
                    }
                ]
            },
            limit: 20
        });
    };

    const debouncedSearch = useDebouncedCallback((gridSearchValue: string) => {
        handleSearch(gridSearchValue);
    }, 2000);

    const handleDebouncedSearch = (gridSearchValue: string) =>
        debouncedSearch.callback(gridSearchValue);

    const handleFilters = (gridFilters: Filter[]) => {
        const filter: SearchableApplicationFilterInput = {
            and: gridFilters.map((gridFilter) => {
                if (gridFilter.columnName === 'updatedAt') {
                    gridFilter.columnName = 'lastUpdate';
                }
                return {
                    [`${gridFilter.columnName}`]: { matchPhrasePrefix: gridFilter.value }
                };
            })
        };

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (typeof filter?.and !== 'undefined' && filter?.and!.length > 0) {
            setVariables((prev: SearchApplicationsQueryVariables) => ({
                ...prev,
                filter
            }));
        } else {
            setVariables(() => ({
                limit: 20
            }));
        }
    };

    const debouncedFilter = useDebouncedCallback((gridFilters: Filter[]) => {
        handleFilters(gridFilters);
    }, 2000);

    const handleDebouncedFilter = (gridFilters: Filter[]) => debouncedFilter.callback(gridFilters);

    const handleSort = (gridSorts: Sorting[]) => {
        const sort: SearchableApplicationSortInput = {
            direction: gridSorts[0].direction as SearchableSortDirection,
            field: gridSorts[0].columnName as SearchableApplicationSortableFields
        };

        if (sort.field === ('updatedAt' as SearchableApplicationSortableFields)) {
            sort.field = 'lastUpdate' as SearchableApplicationSortableFields;
        }

        setVariables((prev: SearchApplicationsQueryVariables) => ({
            ...prev,
            sort
        }));
    };

    return (
        <Grid columns={columns} rows={data?.searchApplications?.items || []}>
            <DataTypeProvider
                for={['updatedAt']}
                formatterComponent={(props) => <DateFormatter {...props} scheme="dd/MM/yy HH:MM" />}
            />
            <DataTypeProvider
                for={['step']}
                formatterComponent={(props) => <StepFormatter {...props} />}
            />
            <DataTypeProvider
                for={['notifications']}
                formatterComponent={(props) => <NotificationsFormatter {...props} />}
            />
            <SearchState onValueChange={handleDebouncedSearch} />
            <FilteringState onFiltersChange={handleDebouncedFilter} />
            <SortingState
                defaultSorting={[{ columnName: 'updatedAt', direction: 'desc' }]}
                onSortingChange={handleSort}
            />
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
            <TableFilterRow />
            <Toolbar />
            <SearchPanel />
            <ResizingPanel
                changeMode={setResizingMode}
                defaultValue={resizingMode}
                resetWidths={handleResetWidths}
            />
        </Grid>
    );
};

export default Table;
