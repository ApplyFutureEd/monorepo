import LandingPage from '@pages/index';
import { render, screen } from '@testing-library/react';

import { FC } from 'react';

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

describe('LandingPage', () => {
    it('can render without crashing', () => {
        render(<LandingPage />);

        const slogan = screen.getByText('landing:hero-slogan');

        expect(slogan).toBeInTheDocument();
    });
});
