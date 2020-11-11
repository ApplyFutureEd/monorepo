import Arguments from '@components/pages/landing/arguments/Arguments';
import { render, screen } from '@testing-library/react';

describe('Arguments', () => {
    it('can render without crashing', () => {
        render(<Arguments />);

        const heading = screen.getAllByRole('heading')[0];

        expect(heading).toBeInTheDocument();
    });
});
