import { AmplifyError } from '@applyfuture/models';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Auth } from 'aws-amplify';

import ConfirmForgotPasswordForm from './ConfirmForgotPasswordForm';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            query: {}
        };
    }
}));

Auth.forgotPasswordSubmit = jest.fn().mockImplementation(() => {
    return true;
});

describe('ConfirmForgotPasswordForm', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        newPassword: '$tR0nGPaSsw0rd',
        verificationCode: '1337'
    };

    it('can render without crashing', () => {
        render(<ConfirmForgotPasswordForm />);

        const heading = screen.getByLabelText(/email/);

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<ConfirmForgotPasswordForm />);

        const email = screen.getByLabelText(/email/);
        const newPassword = screen.getByLabelText(/new-password/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(newPassword, fakeUser.newPassword);
        userEvent.type(verificationCode, fakeUser.verificationCode);
        userEvent.click(submitButton);

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

        render(<ConfirmForgotPasswordForm />);

        const email = screen.getByLabelText(/email/);
        const newPassword = screen.getByLabelText(/new-password/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(newPassword, fakeUser.newPassword);
        userEvent.type(verificationCode, fakeUser.verificationCode);
        userEvent.click(submitButton);

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

        render(<ConfirmForgotPasswordForm />);

        const email = screen.getByLabelText(/email/);
        const newPassword = screen.getByLabelText(/new-password/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(newPassword, fakeUser.newPassword);
        userEvent.type(verificationCode, fakeUser.verificationCode);
        userEvent.click(submitButton);

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

        render(<ConfirmForgotPasswordForm />);

        const email = screen.getByLabelText(/email/);
        const newPassword = screen.getByLabelText(/new-password/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(newPassword, fakeUser.newPassword);
        userEvent.type(verificationCode, fakeUser.verificationCode);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(Auth.forgotPasswordSubmit).toThrow();

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
