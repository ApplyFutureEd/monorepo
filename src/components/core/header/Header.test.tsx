import Header from '@components/core/header/Header';
import { fireEvent, render, screen } from '@testing-library/react';
import useAuthenticatedUser from '@utils/useAuthenticatedUser';
import React, { useState as useStateMock } from 'react';

jest.mock('@components/core/nav/Nav', () => {
    return {
        __esModule: true,
        default: () => {
            return <nav />;
        }
    };
});

jest.mock('react', () => ({
    ...(jest.requireActual('react') as Record<string, unknown>),
    useState: jest.fn()
}));

jest.mock('@utils/useAuthenticatedUser');

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

    it('can call the open callback when clicking on an anchor', () => {
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
