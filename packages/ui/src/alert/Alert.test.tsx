import { render, screen } from '@testing-library/react';

import { Alert } from './Alert';

describe('Alert', () => {
    it('can display an alert', () => {
        render(<Alert>Content</Alert>);
        const children = screen.getByText('Content');
        expect(children).toBeInTheDocument();
    });
});
