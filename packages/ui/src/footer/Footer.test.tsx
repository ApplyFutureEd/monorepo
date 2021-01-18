import { render } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
    it('can render without crashing', () => {
        const { container } = render(<Footer />);

        const footer = container.querySelector('footer');

        expect(footer).toBeInTheDocument();
    });
});
