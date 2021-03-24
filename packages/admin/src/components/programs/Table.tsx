import {
    SearchableProgramFilterInput,
    SearchableProgramSortableFields,
    SearchableProgramSortInput,
    SearchableSortDirection,
    SearchProgramsQuery,
    SearchProgramsQueryVariables
} from '@applyfuture/graphql';
import { Program } from '@applyfuture/models';
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
import min from 'date-fns/min';
import React, { FC, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
    data: SearchProgramsQuery;
    handleContextMenu: (event: React.MouseEvent, row: Program) => void;
    setVariables: React.Dispatch<React.SetStateAction<SearchProgramsQueryVariables>>;
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
            getCellValue: (row: Program) => (row.published ? 'Published' : 'Unlisted'),
            name: 'published',
            title: 'Published'
        },
        { name: 'degree', title: 'Degree' },
        {
            getCellValue: (row: Program) =>
                min(row.intakes.split(',').map((intake: string) => new Date(intake))),
            name: 'intakes',
            title: 'Next Intake'
        },
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
                    { city: { matchPhrasePrefix: gridSearchValue } },
                    { schoolName: { matchPhrasePrefix: gridSearchValue } }
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
        const filter: SearchableProgramFilterInput = {
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
            setVariables((prev: SearchProgramsQueryVariables) => ({
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
        const sort: SearchableProgramSortInput = {
            direction: gridSorts[0].direction as SearchableSortDirection,
            field: gridSorts[0].columnName as SearchableProgramSortableFields
        };

        if (sort.field === ('updatedAt' as SearchableProgramSortableFields)) {
            sort.field = 'lastUpdate' as SearchableProgramSortableFields;
        }

        setVariables((prev: SearchProgramsQueryVariables) => ({
            ...prev,
            sort
        }));
    };

    return (
        <Grid columns={columns} rows={data?.searchPrograms?.items || []}>
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
