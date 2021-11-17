import { render, screen } from '@testing-library/react';

import NoResult from './NoResult';

describe('NoResult', () => {
    it('can render without crashing', () => {
        render(<NoResult />);

        const notification = screen.getByText('No results');

        expect(notification).toBeInTheDocument();
    });
});
