import { render, screen } from '@testing-library/react';

import { Alert } from './Alert';

describe('Alert', () => {
    it('can display an alert', () => {
        render(<Alert>This translation key already exists</Alert>);

        const children = screen.getByText('This translation key already exists');

        expect(children).toBeInTheDocument();
    });
});
