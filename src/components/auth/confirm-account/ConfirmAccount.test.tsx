import ConfirmAccount from '@components/auth/confirm-account/ConfirmAccount';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Auth } from 'aws-amplify';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            query: {}
        };
    }
}));

Auth.confirmSignUp = jest.fn().mockImplementation(() => {
    return true;
});

Auth.signIn = jest.fn().mockImplementation(() => {
    return true;
});

describe('ConfirmAccount', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        password: '$tR0nGPaSsw0rd',
        verificationCode: '1337'
    };

    it('can render without crashing', () => {
        render(<ConfirmAccount />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can render submit the form', async () => {
        render(<ConfirmAccount />);

        const email = screen.getByLabelText(/email/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const password = screen.getByLabelText(/password/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(verificationCode, {
                target: {
                    value: fakeUser.verificationCode
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(password, {
                target: {
                    value: fakeUser.password
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(submitButton);
        });

        expect(Auth.confirmSignUp).toHaveBeenCalledWith(fakeUser.email, fakeUser.verificationCode);
        expect(Auth.signIn).toHaveBeenCalledWith({
            password: fakeUser.password,
            username: fakeUser.email
        });
    });
});
