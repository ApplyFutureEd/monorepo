import { SearchProgramsQuery } from '@applyfuture/graphql';
import Table from '@components/programs/Table';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const mockedData = ({
    searchPrograms: {
        items: [
            {
                city: 'Paris',
                country: 'FR',
                duration: 39420000,
                durationUnit: 'month',
                fee: 18200,
                feeCurrency: 'EUR',
                feeUnit: 'total-fee',
                id: '28f4b32b-a65e-479c-a26c-f7d8e8939dc5',
                intakes: '2021-09-18T00:00:00.000Z, 2022-09-18T00:00:00.000Z',
                name: 'Master of Science in Creative Project Management, Culture and Design',
                schedule: 'FULL_TIME',
                school: {
                    logo: '8ddb22ed-8510-460b-a51f-860d345cfbea',
                    name: 'Rennes School of Business'
                },
                slug:
                    'master-of-science-in-creative-project-management-culture-and-design-rennes-school-of-business-rennes'
            }
        ],
        nextToken: '674b32b-3e4e-410c-a26c-f7ghe8123c5',
        total: 1
    }
} as unknown) as SearchProgramsQuery;

describe('Table', () => {
    const handleContextMenu = jest.fn();
    const setVariables = jest.fn();

    it('can render without crashing', () => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const programTitle = screen.getByText(
            'Master of Science in Creative Project Management, Culture and Design'
        );

        expect(programTitle).toBeInTheDocument();
    });

    it('can search data', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const searchInput = screen.getByPlaceholderText(/search/i);

        userEvent.type(searchInput, 'Master of Science');

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can reset search', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const searchInput = screen.getByPlaceholderText(/search/i);

        userEvent.type(searchInput, 'Master of Science');
        userEvent.clear(searchInput);

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can filter data', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const nameFilterInput = screen.getAllByPlaceholderText(/filter/i)[1];

        userEvent.type(nameFilterInput, 'Master of Science');

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can reset filter', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const nameFilterInput = screen.getAllByPlaceholderText(/filter/i)[1];

        userEvent.type(nameFilterInput, 'Master of Science');
        userEvent.clear(nameFilterInput);

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can sort data', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const nameHeader = screen.getAllByRole('button')[2];

        act(() => {
            userEvent.click(nameHeader, undefined, { skipHover: true });
        });

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can reset column width', () => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const resetWidthsButton = screen.getAllByRole('button')[0];

        userEvent.click(resetWidthsButton);
    });
});
