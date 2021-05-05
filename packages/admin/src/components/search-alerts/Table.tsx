import {
    SearchableSearchAlertFilterInput,
    SearchableSearchAlertSortableFields,
    SearchableSearchAlertSortInput,
    SearchableSortDirection,
    SearchSearchAlertsQuery,
    SearchSearchAlertsQueryVariables
} from '@applyfuture/graphql';
import { SearchAlert } from '@applyfuture/models';
import DateFormatter from '@components/common/date-formatter/DateFormatter';
import ResizingPanel from '@components/common/resizing-panel/ResizingPanel';
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
    data: SearchSearchAlertsQuery;
    handleContextMenu: (event: React.MouseEvent, row: SearchAlert) => void;
    setVariables: React.Dispatch<React.SetStateAction<SearchSearchAlertsQueryVariables>>;
};

const Table: FC<Props> = (props) => {
    const { data, handleContextMenu, setVariables } = props;
    const [columns] = useState([
        { name: 'updatedAt', title: 'Last update' },
        { name: 'query', title: 'Query' },
        { name: 'type', title: 'Type' },
        {
            getCellValue: (row: SearchAlert) => row.student?.firstName,
            name: 'firstName',
            title: 'First Name'
        },
        {
            getCellValue: (row: SearchAlert) => row.student?.lastName,
            name: 'lastName',
            title: 'Last Name'
        },
        {
            getCellValue: (row: SearchAlert) => row.student?.email,
            name: 'email',
            title: 'Email'
        }
    ]);
    const [defaultColumnWidths] = useState([
        { columnName: 'updatedAt', width: 140 },
        { columnName: 'query', width: 360 },
        { columnName: 'type', width: 80 },
        { columnName: 'firstName', width: 160 },
        { columnName: 'lastName', width: 160 },
        { columnName: 'email', width: 310 }
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
                or: [{ query: { matchPhrasePrefix: gridSearchValue } }]
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
        const filter: SearchableSearchAlertFilterInput = {
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
            setVariables((prev: SearchSearchAlertsQueryVariables) => ({
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
        const sort: SearchableSearchAlertSortInput = {
            direction: gridSorts[0].direction as SearchableSortDirection,
            field: gridSorts[0].columnName as SearchableSearchAlertSortableFields
        };

        if (sort.field === ('updatedAt' as SearchableSearchAlertSortableFields)) {
            sort.field = 'lastUpdate' as SearchableSearchAlertSortableFields;
        }

        setVariables((prev: SearchSearchAlertsQueryVariables) => ({
            ...prev,
            sort
        }));
    };

    return (
        <Grid columns={columns} rows={data?.searchSearchAlerts?.items || []}>
            <DataTypeProvider
                for={['updatedAt']}
                formatterComponent={(props) => <DateFormatter {...props} scheme="dd/MM/yy HH:MM" />}
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
