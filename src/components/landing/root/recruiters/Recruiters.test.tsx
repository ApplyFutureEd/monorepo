import Recruiters from '@components/landing/root/recruiters/Recruiters';
import { render, screen } from '@testing-library/react';

describe('Recruiters', () => {
    it('can render without crashing', () => {
        render(<Recruiters />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
