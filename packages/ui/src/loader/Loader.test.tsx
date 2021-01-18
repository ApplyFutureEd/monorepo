import { render } from '@testing-library/react';

import { Loader } from './Loader';

describe('Loader', () => {
    it('can render without crashing', () => {
        const { container } = render(<Loader />);

        const loader = container.querySelector('.loader');

        expect(loader).toBeInTheDocument();
    });
});
