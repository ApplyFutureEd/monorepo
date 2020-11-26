import ConfirmAccount from '@components/auth/confirm-account/ConfirmAccount';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AmplifyError from '@utils/services/AmplifyError';
import { Auth } from 'aws-amplify';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: jest.fn(),
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

    it('can submit the form', async () => {
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

        await waitFor(() => {
            expect(Auth.confirmSignUp).toHaveBeenCalledWith(
                fakeUser.email,
                fakeUser.verificationCode
            );
            expect(Auth.signIn).toHaveBeenCalledWith({
                password: fakeUser.password,
                username: fakeUser.email
            });
        });
    });

    it('can display the right error message when ExpiredCodeException is thrown', async () => {
        Auth.confirmSignUp = jest.fn().mockImplementation(() => {
            throw new AmplifyError('ExpiredCodeException');
        });

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

        await waitFor(() => {
            expect(Auth.confirmSignUp).toThrow();

            const errorMessage = screen.getByText(/auth:error-expired-code-exception/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can display the right error message when CodeMismatchException is thrown', async () => {
        Auth.confirmSignUp = jest.fn().mockImplementation(() => {
            throw new AmplifyError('CodeMismatchException');
        });

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

        await waitFor(() => {
            expect(Auth.confirmSignUp).toThrow();

            const errorMessage = screen.getByText(/auth:error-code-mismatch-exception/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can display the right error message when NotAuthorizedException is thrown', async () => {
        Auth.confirmSignUp = jest.fn().mockImplementation(() => {
            return true;
        });
        Auth.signIn = jest.fn().mockImplementation(() => {
            throw new AmplifyError('NotAuthorizedException');
        });

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

        await waitFor(() => {
            expect(Auth.signIn).toThrow();

            const errorMessage = screen.getByText(/auth:error-not-authorized-exception/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can display the right error message when an Error is thrown', async () => {
        Auth.confirmSignUp = jest.fn().mockImplementation(() => {
            return true;
        });
        Auth.signIn = jest.fn().mockImplementation(() => {
            throw new Error();
        });

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

        await waitFor(() => {
            expect(Auth.signIn).toThrow();

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
