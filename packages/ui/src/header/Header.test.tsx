import { useAuthenticatedUser } from '@applyfuture/utils';
import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState as useStateMock } from 'react';

import { Header } from './Header';

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

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        attributes: {
            email: 'awesome.student@gmail.com'
        }
    })),
    useOutsideAlerter: jest.fn()
}));

const useAuthenticatedUserMock = useAuthenticatedUser as jest.MockedFunction<
    typeof useAuthenticatedUser
>;

const loggedRoutes = [
    {
        href: '/profile',
        label: 'navigation:profile'
    },
    {
        href: '/programs',
        label: 'navigation:programs'
    },
    {
        href: '/schools',
        label: 'navigation:schools'
    },
    {
        href: '/applications',
        label: 'navigation:applications'
    },
    {
        href: '/help',
        label: 'navigation:help'
    }
];

const unloggedRoutes = [
    {
        href: '/programs',
        label: 'navigation:programs'
    },
    {
        href: '/schools',
        label: 'navigation:schools'
    },
    {
        href: '/about',
        label: 'navigation:about-us'
    },
    {
        href: '/#contact',
        label: 'navigation:contact'
    }
];

describe('Header', () => {
    const setOpen = jest.fn();

    beforeEach(() => {
        (useStateMock as jest.Mock).mockImplementation((init) => [init, setOpen]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('can render without crashing', () => {
        render(<Header loggedRoutes={loggedRoutes} unloggedRoutes={unloggedRoutes} />);

        const nav = screen.getByRole('navigation');

        expect(nav).toBeInTheDocument();
    });

    it('can call the open callback function when clicking on an anchor', () => {
        render(<Header loggedRoutes={loggedRoutes} unloggedRoutes={unloggedRoutes} />);

        const anchor = screen.getByLabelText(/open/i);
        fireEvent.click(anchor);

        expect(setOpen).toHaveBeenNthCalledWith(1, true);
    });

    it('display UserMenu if logged', () => {
        useAuthenticatedUserMock.mockReturnValue({
            attributes: { email: 'awesome.student@gmail.com' }
        });
        render(<Header loggedRoutes={loggedRoutes} unloggedRoutes={unloggedRoutes} />);

        const button = screen.getByLabelText(/user menu/i);

        expect(button).toBeVisible();
    });
});
