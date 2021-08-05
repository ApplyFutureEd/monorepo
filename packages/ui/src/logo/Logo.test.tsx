import { render, screen } from '@testing-library/react';

import { Logo } from './Logo';

const logoImageData = ('/fake/path' as unknown) as StaticImageData;

describe('Logo', () => {
    it('can render without crashing', () => {
        render(<Logo src={logoImageData} />);

        const logo = screen.getByRole('presentation', { hidden: true });

        expect(logo).toBeInTheDocument();
    });
});
