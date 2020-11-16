import Header from '@components/layout/header/Header';
import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState as useStateMock } from 'react';

jest.mock('@components/layout/nav/Nav', () => {
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
});
