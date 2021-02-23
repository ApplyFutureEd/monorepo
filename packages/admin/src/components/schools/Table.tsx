import {
    SearchableSchoolFilterInput,
    SearchableSchoolSortableFields,
    SearchableSchoolSortInput,
    SearchableSortDirection,
    SearchSchoolsQuery,
    SearchSchoolsQueryVariables
} from '@applyfuture/graphql';
import { School } from '@applyfuture/models';
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
    data: SearchSchoolsQuery;
    handleContextMenu: (event: React.MouseEvent, row: School) => void;
    setVariables: React.Dispatch<React.SetStateAction<SearchSchoolsQueryVariables>>;
};

const Table: FC<Props> = (props) => {
    const { data, handleContextMenu, setVariables } = props;
    const [columns] = useState([
        { name: 'updatedAt', title: 'Last update' },
        { name: 'name', title: 'Name' },
        {
            name: 'schoolName',
            title: 'School'
        },
        {
            name: 'city',
            title: 'City'
        },
        {
            getCellValue: (row: School) => (row.published ? 'Published' : 'Unlisted'),
            name: 'published',
            title: 'Published'
        },
        { name: 'degree', title: 'Degree' },
        {
            name: 'submissionDeadline',
            title: 'Submission Deadline'
        }
    ]);
    const [defaultColumnWidths] = useState([
        { columnName: 'updatedAt', width: 140 },
        { columnName: 'name', width: 440 },
        { columnName: 'schoolName', width: 180 },
        { columnName: 'city', width: 80 },
        { columnName: 'published', width: 80 },
        { columnName: 'degree', width: 80 },
        { columnName: 'intakes', width: 80 },
        { columnName: 'submissionDeadline', width: 80 }
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
                    { name: { matchPhrasePrefix: gridSearchValue } },
                    { city: { matchPhrasePrefix: gridSearchValue } }
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
        const filter: SearchableSchoolFilterInput = {
            and: gridFilters.map((gridFilter) => ({
                [`${gridFilter.columnName}`]: { matchPhrasePrefix: gridFilter.value }
            }))
        };

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (typeof filter?.and !== 'undefined' && filter?.and!.length > 0) {
            setVariables((prev: SearchSchoolsQueryVariables) => ({
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
        const sort: SearchableSchoolSortInput = {
            direction: gridSorts[0].direction as SearchableSortDirection,
            field: gridSorts[0].columnName as SearchableSchoolSortableFields
        };

        setVariables((prev: SearchSchoolsQueryVariables) => ({
            ...prev,
            sort
        }));
    };

    return (
        <Grid columns={columns} rows={data?.searchSchools?.items || []}>
            <DataTypeProvider
                for={['updatedAt']}
                formatterComponent={(props) => <DateFormatter {...props} scheme="dd/MM/yy HH:MM" />}
            />
            <DataTypeProvider
                for={['intakes', 'submissionDeadline']}
                formatterComponent={DateFormatter}
            />
            <SearchState onValueChange={handleDebouncedSearch} />
            <FilteringState onFiltersChange={handleDebouncedFilter} />
            <SortingState onSortingChange={handleSort} />
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
