import {
    SearchableFeedbackFilterInput,
    SearchableFeedbackSortableFields,
    SearchableFeedbackSortInput,
    SearchableSortDirection,
    SearchFeedbacksQuery,
    SearchFeedbacksQueryVariables
} from '@applyfuture/graphql';
import { Feedback } from '@applyfuture/models';
import { toShortId } from '@applyfuture/utils';
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
    data: SearchFeedbacksQuery;
    handleContextMenu: (event: React.MouseEvent, row: Feedback) => void;
    setVariables: React.Dispatch<React.SetStateAction<SearchFeedbacksQueryVariables>>;
};

const Table: FC<Props> = (props) => {
    const { data, handleContextMenu, setVariables } = props;
    const [columns] = useState([
        { name: 'updatedAt', title: 'Last update' },
        {
            getCellValue: (row: Feedback) => toShortId(row.application?.id),
            name: 'applicationId',
            title: 'Application ID'
        },
        {
            getCellValue: (row: Feedback) => row.application?.student?.firstName,
            name: 'studentFirstName',
            title: 'First Name'
        },
        {
            getCellValue: (row: Feedback) => row.application?.student?.lastName,
            name: 'studentLastName',
            title: 'Last Name'
        },
        { name: 'rating', title: 'Rating' }
    ]);
    const [defaultColumnWidths] = useState([
        { columnName: 'updatedAt', width: 140 },
        { columnName: 'applicationId', width: 90 },
        { columnName: 'studentFirstName', width: 200 },
        { columnName: 'studentLastName', width: 200 },
        { columnName: 'rating', width: 150 }
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
                        rating: {
                            eq: isNaN(Number(gridSearchValue)) ? Number(gridSearchValue) : undefined
                        }
                    },
                    { applicationId: { matchPhrasePrefix: gridSearchValue } }
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
        const filter: SearchableFeedbackFilterInput = {
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
            setVariables((prev: SearchFeedbacksQueryVariables) => ({
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
        const sort: SearchableFeedbackSortInput = {
            direction: gridSorts[0].direction as SearchableSortDirection,
            field: gridSorts[0].columnName as SearchableFeedbackSortableFields
        };

        if (sort.field === ('updatedAt' as SearchableFeedbackSortableFields)) {
            sort.field = 'lastUpdate' as SearchableFeedbackSortableFields;
        }

        setVariables((prev: SearchFeedbacksQueryVariables) => ({
            ...prev,
            sort
        }));
    };

    console.log(data?.searchFeedbacks?.items);

    return (
        <Grid columns={columns} rows={data?.searchFeedbacks?.items || []}>
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
