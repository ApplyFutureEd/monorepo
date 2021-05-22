import LeadModal from '@components/landing/lead-modal/LeadModal';
import { render, screen } from '@testing-library/react';
import React, { useState as useStateMock } from 'react';

jest.mock('react', () => ({
    ...(jest.requireActual('react') as Record<string, unknown>),
    useState: jest.fn()
}));

describe('LeadModal', () => {
    const setOpenModal = jest.fn();

    beforeEach(() => {
        (useStateMock as jest.Mock).mockImplementation(() => [true, setOpenModal]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it.skip('can render without crashing', () => {
        render(
            <div>
                <LeadModal />
            </div>
        );

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});