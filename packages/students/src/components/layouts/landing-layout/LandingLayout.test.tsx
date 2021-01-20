import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState as useStateMock } from 'react';

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

describe('LandingLayout', () => {
    const setOpenMobileMenu = jest.fn();

    beforeEach(() => {
        (useStateMock as jest.Mock).mockImplementation((init) => [init, setOpenMobileMenu]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('can render without crashing', () => {
        render(
            <LandingLayout description="Lorem ipsum" title="Hello World">
                Hello World
            </LandingLayout>
        );

        const children = screen.getByText('Hello World');

        expect(children).toBeInTheDocument();
    });

    it('can call the open mobile menu callback function when clicking on an anchor', () => {
        render(
            <LandingLayout description="Lorem ipsum" title="Hello World">
                Hello World
            </LandingLayout>
        );

        const openAnchor = screen.getByLabelText(/open/i);
        fireEvent.click(openAnchor);

        expect(setOpenMobileMenu).toHaveBeenNthCalledWith(1, true);
    });
});
