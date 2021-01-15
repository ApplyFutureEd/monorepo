import About from '../pages_/about';
import { render, screen } from '@testing-library/react';
import { FC } from 'react';

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

describe('About page', () => {
    it('can render without crashing', () => {
        render(<About />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
