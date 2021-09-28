import { render, screen } from '@testing-library/react';

import { Alert } from './Alert';

describe('Alert', () => {
    it('can display an alert', () => {
        const alert = {
            alertDescription: 'Alert description',
            link: 'https://www.applyfuture.com/fr',
            linkDescription: 'See the link'
        };
        render(
            <Alert
                alertDescription={alert.alertDescription}
                link={alert.link}
                linkDescription={alert.linkDescription}
            />
        );
        const link = screen.getByText(alert.link);
        const linkDescription = screen.getByText(alert.linkDescription);
        const alertDescription = screen.getByText(alert.alertDescription);
        expect(link).toBeInTheDocument();
        expect(linkDescription).toBeInTheDocument();
        expect(alertDescription).toBeInTheDocument();
    });
});
