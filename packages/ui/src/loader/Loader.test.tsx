import { Loader } from '..';
import { render } from '@testing-library/react';

describe('Loader', () => {
    it('can render without crashing', () => {
        const { container } = render(<Loader />);

        const loader = container.querySelector('.loader');

        expect(loader).toBeInTheDocument();
    });
});
