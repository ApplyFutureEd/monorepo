import ConfirmAccount from '@components/auth/confirm-account/ConfirmAccount';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            query: {}
        };
    }
}));

describe('ConfirmAccount', () => {
    it('can render without crashing', () => {
        render(<ConfirmAccount />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
