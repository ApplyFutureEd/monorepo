import Partners from '@components/pages/landing/partners/Partners';
import { render, screen } from '@testing-library/react';

describe('Partners', () => {
    it('can render without crashing', () => {
        render(<Partners />);

        const images = screen.getAllByRole('img');

        images.forEach((image) => {
            expect(image).toBeInTheDocument();
        });
    });
});
