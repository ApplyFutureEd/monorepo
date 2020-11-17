import SignIn from '@components/auth/sign-in/SignIn';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            query: {}
        };
    }
}));

describe('SignIn', () => {
    it('can render without crashing', () => {
        render(<SignIn />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
