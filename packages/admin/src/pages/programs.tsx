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
import { Button, Container, Loader } from '@applyfuture/ui';
import { useQuery, withPrivateAccess } from '@applyfuture/utils';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import ContextMenu, { ContextMenuItem } from '@components/tables/ContextMenu';
import DateFormatter from '@components/tables/DateFormatter';
import ResizingPanel from '@components/tables/ResizingPanel';
import TableRow from '@components/tables/TableRow';
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
import {
    faCopy,
    faExternalLinkSquare,
    faPencil,
    faPlus,
    faTrash
} from '@fortawesome/pro-light-svg-icons';
import min from 'date-fns/min';
import React, { FC, useState } from 'react';
import { useContextMenu } from 'react-contexify';
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

    const { show } = useContextMenu({
        id: 'programs'
    });

    const handleContextMenu = (e: React.MouseEvent, row: Program) => {
        show(e, { props: { row } });
    };

    const contextMenuItems: Array<ContextMenuItem> = [
        {
            icon: faPencil,
            label: 'Edit',
            onClick: ({ event, props, triggerEvent, data }: any) => console.log(props)
        },
        {
            icon: faCopy,
            label: 'Duplicate',
            onClick: ({ event, props, triggerEvent, data }: any) => console.log(props)
        },
        {
            icon: faExternalLinkSquare,
            label: 'Visit',
            onClick: ({ event, props, triggerEvent, data }: any) => console.log(props)
        },
        {
            icon: faTrash,
            label: 'Delete',
            onClick: ({ event, props, triggerEvent, data }: any) => console.log(props)
        }
    ];

    const headerComponents = [
        <Button
            key={0}
            startIcon={faPlus}
            onClick={() => {
                console.log('go to /programs/create');
            }}>
            New
        </Button>
    ];

    const total = data.searchPrograms?.total ? `(${data.searchPrograms?.total})` : '';

    return (
        <DashboardLayout title="Programs">
            <ContextMenu id="programs" items={contextMenuItems} />
            <Container
                headerComponents={headerComponents}
                innerPadding={false}
                title={`Programs ${total}`}>
                <div className="relative">
                    {isLoading && (
                        <div className="inset-1/2 z-1000 absolute w-full h-full bg-gray-100 opacity-75">
                            <Loader />
                        </div>
                    )}
                    <Grid columns={columns} rows={data?.searchPrograms?.items || []}>
                        <DataTypeProvider
                            for={['updatedAt']}
                            formatterComponent={(props) => (
                                <DateFormatter {...props} scheme="dd/MM/yy HH:MM" />
                            )}
                        />
                        <DataTypeProvider
                            for={['intakes', 'submissionDeadline']}
                            formatterComponent={DateFormatter}
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
                </div>
            </Container>
        </DashboardLayout>
    );
};

export default withPrivateAccess(ProgramsPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
