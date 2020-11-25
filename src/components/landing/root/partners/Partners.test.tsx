import Partners from '@components/landing/root/partners/Partners';
import { render, screen } from '@testing-library/react';

describe('Partners', () => {
    it('can render without crashing', () => {
        render(<Partners />);

        const images = screen.getAllByRole('presentation', { hidden: true });

        images.forEach((image) => {
            expect(image).toBeInTheDocument();
        });
    });
});
