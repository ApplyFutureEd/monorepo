import CookiesBanner from '@components/common/cookies-banner/CookiesBanner';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Cookies from 'js-cookie';

Cookies.get = jest.fn().mockImplementation(() => {
    return 'cookies-consent';
});

describe.skip('Hero', () => {
    it('can render without crashing', () => {
        render(<CookiesBanner />);

        const buttons = screen.getAllByRole('button');

        buttons.forEach((button) => {
            expect(button).toBeInTheDocument;
        });
    });

    it('can accept cookies', async () => {
        render(<CookiesBanner />);

        const button = screen.getByText(/landing:cookie-banner-agreement/);

        await waitFor(() => {
            fireEvent.click(button);
        });
    });

    it('can refuse cookies', async () => {
        render(<CookiesBanner />);

        const button = screen.getByText(/landing:cookie-banner-refusal/);

        await waitFor(() => {
            fireEvent.click(button);
        });
    });
});
