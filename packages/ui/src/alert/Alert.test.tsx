import { render, screen } from '@testing-library/react';

import { Alert } from './Alert';

describe('Alert', () => {
    it('can display an alert', () => {
        const alert = {
            children: 'Content'
        };
        render(<Alert>children={alert.children}</Alert>);
        const children = screen.getByText(alert.children);
        expect(children).toBeInTheDocument();
    });
});
