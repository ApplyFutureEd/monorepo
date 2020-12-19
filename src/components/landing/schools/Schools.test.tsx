import Schools from '@components/landing/schools/Schools';
import { render, screen } from '@testing-library/react';

describe('Schools', () => {
    it('can render without crashing', () => {
        render(<Schools />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
