import SignUp from '@components/auth/sign-up/SignUp';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            query: {}
        };
    }
}));

describe('SignUp', () => {
    it('can render without crashing', () => {
        render(<SignUp />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
