import Footer from '@components/layout/footer/Footer';
import { render } from '@testing-library/react';

describe('Footer', () => {
    it('can render without crashing', () => {
        const { container } = render(<Footer />);

        const footer = container.querySelector('footer');

        expect(footer).toBeInTheDocument();
    });
});
