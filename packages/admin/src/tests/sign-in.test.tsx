import { AmplifyError } from '@applyfuture/models';
import SignInPage from '@pages/sign-in';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Auth } from 'aws-amplify';

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

describe.skip('SignInPage', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        password: '$tR0nGPaSsw0rd'
    };

    it('can render without crashing', () => {
        render(<SignInPage />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<SignInPage />);

        const email = screen.getByLabelText(/email/i);
        const password = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button');

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

        render(<SignInPage />);

        const email = screen.getByLabelText(/email/i);
        const password = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button');

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

            const errorMessage = screen.getByText(/Email or password is incorrect/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can display the right error message when an Error is thrown', async () => {
        Auth.signIn = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        render(<SignInPage />);

        const email = screen.getByLabelText(/email/i);
        const password = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button');

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

            const errorMessage = screen.getByText(/Sorry, an error occurred/);
            expect(errorMessage).toBeVisible();
        });
    });
});
