import { render, screen } from '@testing-library/react';

import NewsletterForm from './NewsletterForm';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

describe('NewsletterForm', () => {
    it('can render without crashing', () => {
        render(<NewsletterForm />);

        const input = screen.getByPlaceholderText('Enter your email');
        const button = screen.getByRole('button');

        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
});
