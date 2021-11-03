import { render, screen } from '@testing-library/react';

import Newsletter from './Newsletter';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

describe('Newsletter', () => {
    it('can render without crashing', () => {
        render(<Newsletter />);

        const title = screen.getByRole('heading');
        const link = screen.getByText('Privacy Policy.');

        expect(title).toBeInTheDocument;
        expect(link).toBeInTheDocument;
    });
});
