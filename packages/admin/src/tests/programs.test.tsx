import { SearchProgramsQuery } from '@applyfuture/graphql';
import ProgramsPage from '@pages/programs';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const mockedPush = jest.fn();

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: mockedPush,
            query: {}
        };
    }
}));

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

const mockedIsLoading = jest.fn().mockReturnValue(false);

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    useOutsideAlerter: jest.fn(),
    useQuery: () => ({
        data: mockedData,
        isLoading: mockedIsLoading()
    }),
    withPrivateAccess: jest.fn().mockImplementation((Page) => {
        const PrivatePage = (props: any) => {
            return <Page {...props} />;
        };

        return PrivatePage;
    })
}));

const mockedShow = jest.fn();

jest.mock('react-contexify', () => ({
    ...(jest.requireActual('react-contexify') as Record<string, unknown>),
    useContextMenu: () => ({
        show: mockedShow
    })
}));

describe('ProgramsPage', () => {
    it('can render without crashing', () => {
        render(<ProgramsPage />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can redirect to /programs/create when clicking "New" button', () => {
        render(<ProgramsPage />);

        const newButton = screen.getByText('New');

        userEvent.click(newButton);

        expect(mockedPush).toHaveBeenCalled();
    });

    it('can open context menu', () => {
        render(<ProgramsPage />);

        const program = screen.getByText(/Master of Science/i);

        fireEvent.contextMenu(program);

        expect(mockedShow).toHaveBeenCalled();
    });
});
