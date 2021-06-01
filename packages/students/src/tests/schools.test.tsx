import Schools from '@pages/schools';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { FC } from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

let mockedData = {
    searchSchools: {
        items: [
            {
                city: 'Paris',
                contactEmail: null,
                contactJobTitle: null,
                contactName: null,
                contactPhone: null,
                contractStatus: 'CONTACTED',
                country: 'FR',
                coverPhoto: '10d77697-2165-4b89-bb3c-a57f81e9c9d0',
                createdAt: '2020-09-18T11:05:22.059Z',
                creationYear: '1871',
                description: 'Lorem ipsum',
                id: 'fe2851b6-ef6c-439f-bf47-fc934d356511',
                institutionType: 'PRIVATE',
                internationalStudents: 700,
                logo: 'a340753b-28d6-40da-8f2c-72b5379ec66c',
                name: 'EM Normandie',
                programs: { nextToken: null },
                published: true,
                slug: 'em-normandie-paris',
                stepsTemplates: [{ targets: ['all'] }],
                totalStudents: 4500,
                updatedAt: '2020-09-23T11:32:28.030Z'
            }
        ],
        nextToken: '674b32b-3e4e-410c-a26c-f7ghe8123c5'
    }
} as any;
let mockedIsLoading = jest.fn().mockReturnValue(false);

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    isBrowser: jest.fn().mockImplementation(() => true),
    usePageBottom: () => true,
    useQuery: () => ({
        data: mockedData,
        isLoading: mockedIsLoading()
    })
}));

describe('Schools', () => {
    it('can render without crashing', () => {
        render(<Schools />);

        const title = screen.getByText(/schools:schools/);

        expect(title).toBeInTheDocument();
    });

    it('can display skeletons when isLoading is true', async () => {
        mockedData = { searchSchools: {} };
        mockedIsLoading = jest.fn().mockReturnValue(true);

        const { container } = render(<Schools />);

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });

    it('can handle the search', async () => {
        render(<Schools />);

        const input = screen.getByRole('textbox');

        await act(async () => {
            await userEvent.type(input, 'Business');
        });
    });

    it('can handle the sort by', () => {
        render(<Schools />);

        const button = screen.getAllByText(/schools:sort-by-option-alphabetical-order/)[0];

        fireEvent.click(button);

        const alphabeticalOrder = screen.getAllByText(
            /schools:sort-by-option-alphabetical-order/
        )[1];

        fireEvent.click(alphabeticalOrder);
    });

    it('can handle missing data and can render without crashing', () => {
        mockedData = {
            searchSchools: {
                items: [] as any,
                nextToken: ''
            }
        };

        render(<Schools />);

        const title = screen.getByText(/schools:schools/);

        expect(title).toBeInTheDocument();
    });
});
