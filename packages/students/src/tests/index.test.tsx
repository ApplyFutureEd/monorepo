import LandingPage from '@pages/index';
import { render, screen } from '@testing-library/react';
import { FC } from 'react';

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, FC>),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        user: {
            attributes: {
                email: 'awesome.student@gmail.com'
            }
        }
    })),
    useQuery: jest.fn().mockImplementation(() => ({
        data: {}
    }))
}));

describe.skip('LandingPage', () => {
    it('can render without crashing', () => {
        render(<LandingPage />);

        const slogan = screen.getByText('landing:hero-slogan');

        expect(slogan).toBeInTheDocument();
    });
});
