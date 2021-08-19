import { render } from '@testing-library/react';

import { Head } from './Head';

describe('Header', () => {
    it('can load font on browser environment', () => {
        render(<Head />);

        expect(document.head).toBeInTheDocument();
    });
});
