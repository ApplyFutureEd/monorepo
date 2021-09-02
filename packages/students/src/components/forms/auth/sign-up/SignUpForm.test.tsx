import { AmplifyError } from '@applyfuture/models';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Auth } from 'aws-amplify';

import SignUpForm from './SignUpForm';

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

Auth.signUp = jest.fn().mockImplementation(() => {
    return true;
});

describe('SignUpForm', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        password: '$tR0nGPaSsw0rd'
    };

    it('can render without crashing', () => {
        render(<SignUpForm />);

        const heading = screen.getByLabelText(/email/);

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<SignUpForm />);

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
            expect(Auth.signUp).toHaveBeenCalledWith({
                password: fakeUser.password,
                username: fakeUser.email
            });
            expect(mockedPush).toBeCalledWith('/confirm-account?email=awesome.student@gmail.com');
        });
    });

    it('can submit the form and redirect', async () => {
        mockedQuery.mockImplementationOnce(() => ({
            from: '/programs'
        }));

        render(<SignUpForm />);

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
            expect(Auth.signUp).toHaveBeenCalledWith({
                password: fakeUser.password,
                username: fakeUser.email
            });
            expect(mockedPush).toBeCalledWith(
                '/confirm-account?email=awesome.student@gmail.com&from=/programs'
            );
        });
    });

    it('can display the right error message when UsernameExistsException is thrown', async () => {
        Auth.signUp = jest.fn().mockImplementation(() => {
            throw new AmplifyError('UsernameExistsException');
        });

        render(<SignUpForm />);

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

    it('can display the right error message when an Error is thrown', async () => {
        Auth.signUp = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        render(<SignUpForm />);

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

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
