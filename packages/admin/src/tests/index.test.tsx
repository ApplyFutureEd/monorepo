import LandingPage from '@pages/index';
import { render, screen } from '@testing-library/react';

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

describe.skip('LandingPage', () => {
    it('can render without crashing', () => {
        render(<LandingPage />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
