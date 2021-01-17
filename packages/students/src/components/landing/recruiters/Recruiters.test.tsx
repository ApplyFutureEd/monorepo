import Recruiters from '@applyfuture/students/components/landing/recruiters/Recruiters';
import { render, screen } from '@testing-library/react';

describe('Recruiters', () => {
    it('can render without crashing', () => {
        render(<Recruiters />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
