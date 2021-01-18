import { useAuthenticatedUser } from '@applyfuture/utils';
import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState as useStateMock } from 'react';

import { Header } from './Header';

/* jest.mock('..', () => ({
    ...(jest.requireActual('..') as Record<string, unknown>),
    Nav: jest.fn().mockImplementation(() => <nav />),
    LanguageMenu: jest.fn().mockImplementation(() => <div />),
    UserMenu: jest.fn().mockImplementation(() => <div />)
})); */

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
    }))
}));

const useAuthenticatedUserMock = useAuthenticatedUser as jest.MockedFunction<
    typeof useAuthenticatedUser
>;

describe('Header', () => {
    const setOpen = jest.fn();

    beforeEach(() => {
        (useStateMock as jest.Mock).mockImplementation((init) => [init, setOpen]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('can render without crashing', () => {
        render(<Header />);

        const nav = screen.getByRole('navigation');

        expect(nav).toBeInTheDocument();
    });

    it('can call the open callback function when clicking on an anchor', () => {
        render(<Header />);

        const anchor = screen.getByLabelText(/open/i);
        fireEvent.click(anchor);

        expect(setOpen).toHaveBeenNthCalledWith(1, true);
    });

    it('display UserMenu if logged', () => {
        useAuthenticatedUserMock.mockReturnValue({
            attributes: { email: 'awesome.student@gmail.com' }
        });
        render(<Header />);

        const button = screen.getByLabelText(/user menu/i);

        expect(button).toBeVisible();
    });
});
