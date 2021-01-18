import { render, screen } from '@testing-library/react';

import { Logo } from './Logo';

describe('Logo', () => {
    it('can render without crashing', () => {
        render(<Logo />);

        const logo = screen.getByRole('presentation', { hidden: true });

        expect(logo).toBeInTheDocument();
    });
});
