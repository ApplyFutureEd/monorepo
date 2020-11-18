import SignUp from '@components/auth/sign-up/SignUp';
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

Auth.signUp = jest.fn().mockImplementation(() => {
    return true;
});

describe('SignUp', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        password: '$tR0nGPaSsw0rd'
    };

    it('can render without crashing', () => {
        render(<SignUp />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<SignUp />);

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

        expect(Auth.signUp).toHaveBeenCalledWith({
            password: fakeUser.password,
            username: fakeUser.email
        });
    });

    it('can display the right error message when UsernameExistsException is thrown', async () => {
        Auth.signUp = jest.fn().mockImplementation(() => {
            throw new AmplifyError('UsernameExistsException');
        });

        render(<SignUp />);

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
            expect(Auth.signUp).toThrow();

            const errorMessage = screen.getByText(/auth:error-username-exists-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
