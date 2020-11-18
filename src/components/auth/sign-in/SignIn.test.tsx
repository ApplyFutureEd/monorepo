import SignIn from '@components/auth/sign-in/SignIn';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AmplifyError from '@utils/AmplifyError';
import { Auth } from 'aws-amplify';
import React from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            query: {}
        };
    }
}));

Auth.signIn = jest.fn().mockImplementation(() => {
    return true;
});

describe('SignIn', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        password: '$tR0nGPaSsw0rd'
    };

    it('can render without crashing', () => {
        render(<SignIn />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<SignIn />);

        const email = screen.getByLabelText(/email/);
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
            fireEvent.change(password, {
                target: {
                    value: fakeUser.password
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(submitButton);
        });

        expect(Auth.signIn).toHaveBeenCalledWith({
            password: fakeUser.password,
            username: fakeUser.email
        });
    });

    it('can display the right error message when NotAuthorizedException is thrown', async () => {
        Auth.signIn = jest.fn().mockImplementation(() => {
            throw new AmplifyError('NotAuthorizedException');
        });

        render(<SignIn />);

        const email = screen.getByLabelText(/email/);
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
});
