import { Logo } from '..';
import { render, screen } from '@testing-library/react';

describe('Logo', () => {
    it('can render without crashing', () => {
        render(<Logo />);

        const logo = screen.getByRole('presentation', { hidden: true });

        expect(logo).toBeInTheDocument();
    });
});
