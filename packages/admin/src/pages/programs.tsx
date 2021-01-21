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
    Table,
    TableColumnResizing,
    TableFilterRow,
    TableHeaderRow,
    Toolbar,
    VirtualTable
} from '@devexpress/dx-react-grid-material-ui';
import { faEye, faPencil } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import min from 'date-fns/min';
import React, { FC, useState } from 'react';
import { Item, Menu, useContextMenu } from 'react-contexify';
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
    const { show } = useContextMenu({
        id: 'program-menu'
    });

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

    const handleContextMenu = (e: React.MouseEvent, row: Program) => {
        show(e, { props: { row } });
    };

    interface TableRowProps extends Table.DataRowProps {
        row: Program;
    }

    const TableRow: FC<TableRowProps> = ({ row, ...rest }) => {
        const style = {
            backgroundColor: Number(rest.tableRow.rowId) % 2 ? '#F3F4F6' : 'white'
        };

        return (
            <Table.Row
                {...rest}
                row={row}
                style={style}
                onContextMenu={(e: React.MouseEvent) => handleContextMenu(e, row)}
            />
        );
    };

    const handleItemClick = ({ event, props, triggerEvent, data }: any) => {
        console.log(event, props, triggerEvent, data);
    };

    return (
        <DashboardLayout title="Programs">
            <Menu id="program-menu">
                <Item onClick={handleItemClick}>
                    <FontAwesomeIcon fixedWidth icon={faPencil} />
                    <span className="ml-2">Edit</span>
                </Item>
                <Item onClick={handleItemClick}>
                    <FontAwesomeIcon fixedWidth icon={faEye} />
                    <span className="ml-2">Preview</span>
                </Item>
            </Menu>

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
                        <VirtualTable rowComponent={TableRow} />
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
