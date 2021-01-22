import CreateProgramPage from '@pages/programs/create';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { FC } from 'react';

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    withPrivateAccess: jest.fn().mockImplementation((Page) => {
        const PrivatePage = (props: any) => {
            return <Page {...props} />;
        };

        return PrivatePage;
    })
}));

describe('CreateProgramPage', () => {
    it('can render without crashing', () => {
        render(<CreateProgramPage />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
