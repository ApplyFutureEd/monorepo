import { AmplifyError } from '@applyfuture/models';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Auth } from 'aws-amplify';

import SignInForm from './SignInForm';

const mockedPush = jest.fn();

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: mockedPush,
            query: {}
        };
    }
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, any>),
    graphql: jest.fn().mockImplementation(() => ({
        data: {
            getStudentByEmail: { items: [] }
        }
    })),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        handleAuth: jest.fn()
    }))
}));

jest.mock('aws-amplify');

Auth.signIn = jest.fn().mockImplementation(() => {
    return true;
});

describe('SignInForm', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        password: '$tR0nGPaSsw0rd'
    };

    it('can render without crashing', () => {
        render(<SignInForm />);

        const heading = screen.getByLabelText(/email/);

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<SignInForm />);

        const email = screen.getByLabelText(/email/);
        const password = screen.getByLabelText(/password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(password, fakeUser.password);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(Auth.signIn).toHaveBeenCalledWith({
                password: fakeUser.password,
                username: fakeUser.email
            });
        });
    });

    it('can display the right error message when NotAuthorizedException is thrown', async () => {
        Auth.signIn = jest.fn().mockImplementation(() => {
            throw new AmplifyError('NotAuthorizedException');
        });

        render(<SignInForm />);

        const email = screen.getByLabelText(/email/);
        const password = screen.getByLabelText(/password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(password, fakeUser.password);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(Auth.signIn).toThrow();

            const errorMessage = screen.getByText(/auth:error-not-authorized-exception/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can display the right error message when an Error is thrown', async () => {
        Auth.signIn = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        render(<SignInForm />);

        const email = screen.getByLabelText(/email/);
        const password = screen.getByLabelText(/password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(password, fakeUser.password);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(Auth.signIn).toThrow();

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
