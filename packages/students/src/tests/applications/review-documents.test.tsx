import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import ReviewDocuments from '@pages/applications/[id]/review-documents';
import { render, screen } from '@testing-library/react';
import { FC } from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en',
            push: jest.fn(),
            query: {
                id: 'fe2851b6-ef6c-439f-bf47-fc934d356511'
            }
        };
    }
}));

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        user: {
            attributes: {
                email: 'awesome.student@gmail.com'
            }
        }
    })),
    useQuery: () => ({
        data: {},
        isLoading: false
    }),
    withPrivateAccess: jest.fn().mockImplementation((Page) => {
        const PrivatePage = (props: any) => {
            return <Page {...props} />;
        };

        return PrivatePage;
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

describe.skip('Review Documents page', () => {
    it('can render without crashing', () => {
        render(<ReviewDocuments />);

        const heading = screen.getByText('application:application-information');

        expect(heading).toBeInTheDocument();
    });
});
