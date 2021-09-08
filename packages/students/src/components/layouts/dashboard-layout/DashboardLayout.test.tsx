import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { render, screen } from '@testing-library/react';
import { FC } from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    LanguageMenu: jest.fn().mockImplementation(() => <div />),
    Notifications: jest.fn().mockImplementation(() => <div />)
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, FC>),
    graphql: jest.fn(),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        user: {
            attributes: {
                email: 'awesome.student@gmail.com'
            }
        }
    })),
    useQuery: () => ({
        data: {}
    })
}));

describe('DashboardLayout', () => {
    it('can render without crashing', () => {
        render(
            <DashboardLayout description="Lorem ipsum" title="Hello World">
                Hello World
            </DashboardLayout>
        );

        const children = screen.getByText('Hello World');

        expect(children).toBeInTheDocument();
    });
});
