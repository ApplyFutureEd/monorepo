import Recruiters from '@components/landing/recruiters/Recruiters';
import { render, screen } from '@testing-library/react';

describe.skip('Recruiters', () => {
    it('can render without crashing', () => {
        render(<Recruiters />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
