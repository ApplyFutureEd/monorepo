import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Auth } from 'aws-amplify';

import NewPasswordForm from './NewPasswordForm';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            query: {}
        };
    }
}));

jest.mock('aws-amplify');

Auth.signIn = jest.fn().mockImplementation(() => {
    return true;
});
Auth.completeNewPassword = jest.fn().mockImplementation(() => {
    return true;
});

describe('NewPasswordForm', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        newPassword: '$tR0nGPaSsw0rd',
        oldPassword: 'weakpassword'
    };

    it('can render without crashing', () => {
        render(<NewPasswordForm />);

        const heading = screen.getByLabelText(/email/);

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<NewPasswordForm />);

        const email = screen.getByLabelText(/email/);
        const oldPassword = screen.getByLabelText(/old-password/);
        const newPassword = screen.getByLabelText(/new-password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(oldPassword, fakeUser.oldPassword);
        userEvent.type(newPassword, fakeUser.newPassword);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(Auth.signIn).toHaveBeenCalledWith({
                password: fakeUser.oldPassword,
                username: fakeUser.email
            });
            expect(Auth.completeNewPassword).toHaveBeenCalledWith(true, fakeUser.newPassword);
        });
    });

    it('can display the right error message when an Error is thrown by the signIn method', async () => {
        Auth.signIn = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        render(<NewPasswordForm />);

        const email = screen.getByLabelText(/email/);
        const oldPassword = screen.getByLabelText(/old-password/);
        const newPassword = screen.getByLabelText(/new-password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(oldPassword, fakeUser.oldPassword);
        userEvent.type(newPassword, fakeUser.newPassword);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(Auth.signIn).toThrow();

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can display the right error message when an Error is thrown by the completeNewPassword method', async () => {
        Auth.completeNewPassword = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        render(<NewPasswordForm />);

        const email = screen.getByLabelText(/email/);
        const oldPassword = screen.getByLabelText(/old-password/);
        const newPassword = screen.getByLabelText(/new-password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(oldPassword, fakeUser.oldPassword);
        userEvent.type(newPassword, fakeUser.newPassword);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(Auth.completeNewPassword).toThrow();

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
