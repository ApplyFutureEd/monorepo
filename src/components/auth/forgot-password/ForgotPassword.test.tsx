import ForgotPassword from '@components/auth/forgot-password/ForgotPassword';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            query: {}
        };
    }
}));

describe('ForgotPassword', () => {
    it('can render without crashing', () => {
        render(<ForgotPassword />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
