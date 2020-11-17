import ConfirmForgotPassword from '@components/auth/confirm-forgot-password/ConfirmForgotPassword';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            query: {}
        };
    }
}));

describe('ConfirmForgotPassword', () => {
    it('can render without crashing', () => {
        render(<ConfirmForgotPassword />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
