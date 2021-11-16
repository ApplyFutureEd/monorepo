import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SocialMedia from './SocialMedia';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

describe('social media', () => {
    it('can render without crashing', () => {
        render(<SocialMedia url="https://www.applyfuture.com/fr" />);

        const submitButton = screen.getAllByRole(/button/)[0];
        userEvent.click(submitButton);
        expect(submitButton).toHaveBeenCalled;
    });
});
