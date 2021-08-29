import { AmplifyError } from '@applyfuture/models';
import SignUp from '@pages/sign-up';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Auth } from 'aws-amplify';
import { FC } from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            query: {}
        };
    }
}));

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, FC>),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        user: {
            attributes: {
                email: 'awesome.student@gmail.com'
            }
        }
    })),
    useQuery: jest.fn().mockImplementation(() => ({
        data: {}
    }))
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

        await waitFor(() => {
            expect(Auth.signUp).toHaveBeenCalledWith({
                password: fakeUser.password,
                username: fakeUser.email
            });
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

    it('can display the right error message when an Error is thrown', async () => {
        Auth.signUp = jest.fn().mockImplementation(() => {
            throw new Error();
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

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
