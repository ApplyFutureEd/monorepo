import ConfirmForgotPassword from '@pages/confirm-forgot-password';
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

jest.mock('@components/core/nav/Nav', () => {
    return {
        __esModule: true,
        default: () => {
            return <nav />;
        }
    };
});
jest.mock('@components/core/language-menu/LanguageMenu', () => {
    return {
        __esModule: true,
        default: () => {
            return <div />;
        }
    };
});

Auth.forgotPasswordSubmit = jest.fn().mockImplementation(() => {
    return true;
});

describe('ConfirmForgotPassword', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        newPassword: '$tR0nGPaSsw0rd',
        verificationCode: '1337'
    };

    it('can render without crashing', () => {
        render(<ConfirmForgotPassword />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<ConfirmForgotPassword />);

        const email = screen.getByLabelText(/email/);
        const newPassword = screen.getByLabelText(/new-password/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(newPassword, {
                target: {
                    value: fakeUser.newPassword
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
            fireEvent.click(submitButton);
        });

        await waitFor(() => {
            expect(Auth.forgotPasswordSubmit).toHaveBeenCalledWith(
                fakeUser.email,
                fakeUser.verificationCode,
                fakeUser.newPassword
            );
        });
    });

    it('can display the right error message when ExpiredCodeException is thrown', async () => {
        Auth.forgotPasswordSubmit = jest.fn().mockImplementation(() => {
            throw new AmplifyError('ExpiredCodeException');
        });

        render(<ConfirmForgotPassword />);

        const email = screen.getByLabelText(/email/);
        const newPassword = screen.getByLabelText(/new-password/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(newPassword, {
                target: {
                    value: fakeUser.newPassword
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
            fireEvent.click(submitButton);
        });

        await waitFor(() => {
            expect(Auth.forgotPasswordSubmit).toThrow();

            const errorMessage = screen.getByText(/auth:error-expired-code-exception/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can display the right error message when CodeMismatchException is thrown', async () => {
        Auth.forgotPasswordSubmit = jest.fn().mockImplementation(() => {
            throw new AmplifyError('CodeMismatchException');
        });

        render(<ConfirmForgotPassword />);

        const email = screen.getByLabelText(/email/);
        const newPassword = screen.getByLabelText(/new-password/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(newPassword, {
                target: {
                    value: fakeUser.newPassword
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
            fireEvent.click(submitButton);
        });

        await waitFor(() => {
            expect(Auth.forgotPasswordSubmit).toThrow();

            const errorMessage = screen.getByText(/auth:error-code-mismatch-exception/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can display the right error message when an Error is thrown', async () => {
        Auth.forgotPasswordSubmit = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        render(<ConfirmForgotPassword />);

        const email = screen.getByLabelText(/email/);
        const newPassword = screen.getByLabelText(/new-password/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(newPassword, {
                target: {
                    value: fakeUser.newPassword
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
            fireEvent.click(submitButton);
        });

        await waitFor(() => {
            expect(Auth.forgotPasswordSubmit).toThrow();

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
