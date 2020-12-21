import About from '@pages/about';
import { render, screen } from '@testing-library/react';

describe('About page', () => {
    it('can render without crashing', () => {
        render(<About />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
