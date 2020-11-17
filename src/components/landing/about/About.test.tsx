import About from '@components/landing/about/About';
import { render, screen } from '@testing-library/react';

describe('About', () => {
    it('can render without crashing', () => {
        render(<About />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
