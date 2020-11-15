import Contact from '@components/landing/contact/Contact';
import { render, screen } from '@testing-library/react';

describe('Contact', () => {
    it('can render without crashing', () => {
        render(<Contact />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
