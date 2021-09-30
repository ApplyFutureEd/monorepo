import Hero from '@components/blog/hero/Hero';
import { render, screen } from '@testing-library/react';

describe('Hero', () => {
    it('can render without crashing', () => {
        render(<Hero />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can render illustration', () => {
        render(<Hero />);

        const illustration = screen.getByRole('img');

        expect(illustration).toBeInTheDocument();
    });

    it('can render title and subtitle', () => {
        render(<Hero />);

        const title = screen.getByText(/welcome/gi);
        const subtitle = screen.getByText(/lorem/gi);

        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
    });
});
