import { SearchFeedbacksQuery } from '@applyfuture/graphql';
import Table from '@components/feedbacks/Table';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockedData = {
    searchFeedbacks: {
        items: [
            {
                application: {
                    id: '28f4b32b-a65e-479c-a26c-f7d8e8939dc5',
                    student: {
                        firstName: 'Paul',
                        lastName: 'Cailly'
                    }
                },
                id: '23z5b109-a65e-179v-g36e-f7d8e8329cee',
                rating: 5,
                updatedAt: '2021-09-18T00:00:00.000Z'
            }
        ],
        nextToken: '674b32b-3e4e-410c-a26c-f7ghe8123c5',
        total: 1
    }
} as unknown as SearchFeedbacksQuery;

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

        const applicationId = screen.getByText('28F4B3');

        expect(applicationId).toBeInTheDocument();
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

        userEvent.type(searchInput, '28F4B3');

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

        userEvent.type(searchInput, '28F4B3');
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

        const filterInput = screen.getAllByPlaceholderText(/filter/i)[1];

        userEvent.type(filterInput, '28F4B3');

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

        const filterInput = screen.getAllByPlaceholderText(/filter/i)[1];

        userEvent.type(filterInput, '28F4B3');
        userEvent.clear(filterInput);

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

        const header = screen.getAllByRole('button')[2];

        act(() => {
            userEvent.click(header, undefined, { skipHover: true });
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
