import { AmplifyError } from '@applyfuture/models';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Auth } from 'aws-amplify';

import ConfirmAccountForm from './ConfirmAccountForm';

const mockedPush = jest.fn();
const mockedQuery = jest.fn().mockImplementation(() => ({
    from: ''
}));

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: mockedPush,
            query: mockedQuery()
        };
    }
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, any>),
    graphql: jest.fn(),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        handleAuth: jest.fn()
    })),
    useLocalStorage: jest.fn().mockImplementation(() => [
        {
            country: 'FR',
            degree: 'MASTER',
            discipline: 'BUSINESS_MANAGEMENT_AND_ECONOMICS',
            highestEducationLevel: 1
        }
    ])
}));

Auth.confirmSignUp = jest.fn().mockImplementation(() => {
    return true;
});

Auth.signIn = jest.fn().mockImplementation(() => {
    return true;
});

describe('ConfirmAccountForm', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        password: '$tR0nGPaSsw0rd',
        verificationCode: '1337'
    };

    it('can render without crashing', () => {
        render(<ConfirmAccountForm />);

        const heading = screen.getByLabelText(/email/);

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<ConfirmAccountForm />);

        const email = screen.getByLabelText(/email/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const password = screen.getByLabelText(/password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(verificationCode, fakeUser.verificationCode);
        userEvent.type(password, fakeUser.password);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(Auth.confirmSignUp).toHaveBeenCalledWith(
                fakeUser.email,
                fakeUser.verificationCode
            );
            expect(Auth.signIn).toHaveBeenCalledWith({
                password: fakeUser.password,
                username: fakeUser.email
            });
            expect(mockedPush).toBeCalledWith('/onboarding/country');
        });
    });

    it('can submit the form and redirect', async () => {
        mockedQuery.mockImplementationOnce(() => ({
            from: '/programs'
        }));

        render(<ConfirmAccountForm />);

        const email = screen.getByLabelText(/email/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const password = screen.getByLabelText(/password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(verificationCode, fakeUser.verificationCode);
        userEvent.type(password, fakeUser.password);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(Auth.confirmSignUp).toHaveBeenCalledWith(
                fakeUser.email,
                fakeUser.verificationCode
            );
            expect(Auth.signIn).toHaveBeenCalledWith({
                password: fakeUser.password,
                username: fakeUser.email
            });
            expect(mockedPush).toBeCalledWith('/programs');
        });
    });

    it('can display the right error message when ExpiredCodeException is thrown', async () => {
        Auth.confirmSignUp = jest.fn().mockImplementation(() => {
            throw new AmplifyError('ExpiredCodeException');
        });

        render(<ConfirmAccountForm />);

        const email = screen.getByLabelText(/email/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const password = screen.getByLabelText(/password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(verificationCode, fakeUser.verificationCode);
        userEvent.type(password, fakeUser.password);
        userEvent.click(submitButton);

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

        render(<ConfirmAccountForm />);

        const email = screen.getByLabelText(/email/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const password = screen.getByLabelText(/password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(verificationCode, fakeUser.verificationCode);
        userEvent.type(password, fakeUser.password);
        userEvent.click(submitButton);

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

        render(<ConfirmAccountForm />);

        const email = screen.getByLabelText(/email/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const password = screen.getByLabelText(/password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(verificationCode, fakeUser.verificationCode);
        userEvent.type(password, fakeUser.password);
        userEvent.click(submitButton);

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

        render(<ConfirmAccountForm />);

        const email = screen.getByLabelText(/email/);
        const verificationCode = screen.getByLabelText(/verification-code/);
        const password = screen.getByLabelText(/password/);
        const submitButton = screen.getByRole(/button/);

        userEvent.type(email, fakeUser.email);
        userEvent.type(verificationCode, fakeUser.verificationCode);
        userEvent.type(password, fakeUser.password);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(Auth.signIn).toThrow();

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
