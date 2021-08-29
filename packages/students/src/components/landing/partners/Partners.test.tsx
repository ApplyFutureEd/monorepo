import Partners from '@components/landing/partners/Partners';
import { render, screen } from '@testing-library/react';

describe.skip('Partners', () => {
    it('can render without crashing', () => {
        render(<Partners />);

        const images = screen.getAllByRole('presentation', { hidden: true });

        images.forEach((image) => {
            expect(image).toBeInTheDocument();
        });
    });
});
