import Hero from '@applyfuture/students/components/landing/hero/Hero';
import { render, screen } from '@testing-library/react';

describe('Hero', () => {
    it('can render without crashing', () => {
        render(<Hero />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
