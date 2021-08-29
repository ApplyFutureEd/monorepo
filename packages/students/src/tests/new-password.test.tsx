import NewPassword from '@pages/new-password';
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

Auth.signIn = jest.fn().mockImplementation(() => {
    return true;
});
Auth.completeNewPassword = jest.fn().mockImplementation(() => {
    return true;
});

describe.skip('NewPassword', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        newPassword: '$tR0nGPaSsw0rd',
        oldPassword: 'weakpassword'
    };

    it('can render without crashing', () => {
        render(<NewPassword />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<NewPassword />);

        const email = screen.getByLabelText(/email/);
        const oldPassword = screen.getByLabelText(/old-password/);
        const newPassword = screen.getByLabelText(/new-password/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(oldPassword, {
                target: {
                    value: fakeUser.oldPassword
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
            fireEvent.click(submitButton);
        });

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

        render(<NewPassword />);

        const email = screen.getByLabelText(/email/);
        const oldPassword = screen.getByLabelText(/old-password/);
        const newPassword = screen.getByLabelText(/new-password/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(oldPassword, {
                target: {
                    value: fakeUser.oldPassword
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
            fireEvent.click(submitButton);
        });

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

        render(<NewPassword />);

        const email = screen.getByLabelText(/email/);
        const oldPassword = screen.getByLabelText(/old-password/);
        const newPassword = screen.getByLabelText(/new-password/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(oldPassword, {
                target: {
                    value: fakeUser.oldPassword
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
            fireEvent.click(submitButton);
        });

        await waitFor(() => {
            expect(Auth.completeNewPassword).toThrow();

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
