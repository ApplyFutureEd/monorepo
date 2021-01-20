import {
    SearchableProgramFilterInput,
    SearchableProgramSortableFields,
    SearchableProgramSortInput,
    SearchableSortDirection,
    searchPrograms,
    SearchProgramsQuery,
    SearchProgramsQueryVariables
} from '@applyfuture/graphql';
import { Program } from '@applyfuture/models';
import { Container, Loader } from '@applyfuture/ui';
import { useQuery, withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import DateFormatter from '@components/tables/DateFormatter';
import ProgramActionFormatter from '@components/tables/ProgramActionFormatter';
import ResizingPanel from '@components/tables/ResizingPanel';
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

const ProgramsPage: FC = () => {
    const [variables, setVariables] = useState<SearchProgramsQueryVariables>({
        limit: 20
    });
    const { data, isLoading } = useQuery<SearchProgramsQuery, SearchProgramsQueryVariables>(
        searchPrograms,
        variables
    );
    const [columns] = useState([
        { name: 'updatedAt', title: 'Last update' },
        { name: 'name', title: 'Name' },
        {
            getCellValue: (row: Program) => row.school?.name,
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
            getCellValue: (row: Program) => row.submissionDeadline,
            name: 'submissionDeadline',
            title: 'Submission Deadline'
        },
        {
            getCellValue: (row: Program) => row,
            name: 'actions',
            title: 'Actions'
        }
    ]);
    const [defaultColumnWidths] = useState([
        { columnName: 'updatedAt', width: 140 },
        { columnName: 'name', width: 480 },
        { columnName: 'schoolName', width: 180 },
        { columnName: 'city', width: 80 },
        { columnName: 'published', width: 80 },
        { columnName: 'degree', width: 80 },
        { columnName: 'intakes', width: 80 },
        { columnName: 'submissionDeadline', width: 80 },
        { columnName: 'actions', width: 120 }
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

    const handleFilters = (gridFilters: Filter[]) => {
        const filter: SearchableProgramFilterInput = {
            and: gridFilters.map((gridFilter) => ({
                [`${gridFilter.columnName}`]: { matchPhrasePrefix: gridFilter.value }
            }))
        };

        if (filter?.and?.length || 0 > 0) {
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

    const handleSort = (gridSorts: Sorting[]) => {
        const sort: SearchableProgramSortInput = {
            direction: gridSorts[0].direction as SearchableSortDirection,
            field: gridSorts[0].columnName as SearchableProgramSortableFields
        };

        setVariables((prev: SearchProgramsQueryVariables) => ({
            ...prev,
            sort
        }));
    };

    return (
        <DashboardLayout title="Programs">
            <Container innerPadding={false} title="Programs">
                <div className="relative">
                    {isLoading && (
                        <div className="inset-1/2 z-1000 absolute w-full h-full bg-gray-100 opacity-75">
                            <Loader />
                        </div>
                    )}
                    <Grid columns={columns} rows={data?.searchPrograms?.items || []}>
                        <DataTypeProvider for={['updatedAt']} formatterComponent={DateFormatter} />
                        <DataTypeProvider
                            for={['intakes', 'submissionDeadline']}
                            formatterComponent={DateFormatter}
                        />
                        <DataTypeProvider
                            for={['actions']}
                            formatterComponent={ProgramActionFormatter}
                        />
                        <SearchState
                            defaultValue=""
                            onValueChange={(gridSearchValue) =>
                                debouncedSearch.callback(gridSearchValue)
                            }
                        />
                        <FilteringState
                            defaultFilters={[]}
                            onFiltersChange={(gridFilters) => debouncedFilter.callback(gridFilters)}
                        />
                        <SortingState defaultSorting={[]} onSortingChange={handleSort} />
                        <VirtualTable />
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
                </div>
            </Container>
        </DashboardLayout>
    );
};

export default withPrivateAccess(ProgramsPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
