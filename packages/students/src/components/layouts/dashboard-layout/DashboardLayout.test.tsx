import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { fireEvent, render, screen } from '@testing-library/react';
import { FC, useState as useStateMock } from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

jest.mock('react', () => ({
    ...(jest.requireActual('react') as Record<string, unknown>),
    useState: jest.fn()
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
    const setOpenMobileMenu = jest.fn();

    beforeEach(() => {
        (useStateMock as jest.Mock).mockImplementation((init) => [init, setOpenMobileMenu]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('can render without crashing', () => {
        render(
            <DashboardLayout description="Lorem ipsum" title="Hello World">
                Hello World
            </DashboardLayout>
        );

        const children = screen.getByText('Hello World');

        expect(children).toBeInTheDocument();
    });

    it('can call the open mobile menu callback function when clicking on an anchor', () => {
        render(
            <DashboardLayout description="Lorem ipsum" title="Hello World">
                Hello World
            </DashboardLayout>
        );

        const openAnchor = screen.getByLabelText(/open/i);
        fireEvent.click(openAnchor);

        expect(setOpenMobileMenu).toHaveBeenNthCalledWith(1, true);
    });
});
