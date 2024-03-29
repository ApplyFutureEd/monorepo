import { SearchFeedbacksQuery } from '@applyfuture/graphql';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import FeedbacksPage from '@pages/feedbacks';
import { fireEvent, render, screen } from '@testing-library/react';
import { FC } from 'react';

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
} as unknown) as SearchFeedbacksQuery;

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

const MockedDashboardLayout: FC = (props) => {
    return <div>{props.children}</div>;
};

jest.mock('@components/layouts/dashboard-layout/DashboardLayout', () => ({
    __esModule: true,
    default: jest.fn()
}));

((DashboardLayout as unknown) as any).mockImplementation(MockedDashboardLayout);

describe.skip('FeedbacksPage', () => {
    it('can render without crashing', () => {
        render(<FeedbacksPage />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can open context menu', () => {
        render(<FeedbacksPage />);

        const program = screen.getByText(/28F4B3/i);

        fireEvent.contextMenu(program);

        expect(mockedShow).toHaveBeenCalled();
    });
});
