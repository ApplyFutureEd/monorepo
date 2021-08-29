import { AmplifyError } from '@applyfuture/models';
import ForgotPassword from '@pages/forgot-password';
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

Auth.forgotPassword = jest.fn().mockImplementation(() => {
    return true;
});

describe.skip('ForgotPassword', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com'
    };

    it('can render without crashing', () => {
        render(<ForgotPassword />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<ForgotPassword />);

        const email = screen.getByLabelText(/email/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(submitButton);
        });

        await waitFor(() => {
            expect(Auth.forgotPassword).toHaveBeenCalledWith(fakeUser.email);
        });
    });

    it('can display the right error message when CodeDeliveryDetails is thrown', async () => {
        Auth.forgotPassword = jest.fn().mockImplementation(() => {
            throw new AmplifyError('CodeDeliveryDetails');
        });

        render(<ForgotPassword />);

        const email = screen.getByLabelText(/email/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(submitButton);
        });

        await waitFor(() => {
            expect(Auth.forgotPassword).toThrow();

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can display the right error message when an Error is thrown', async () => {
        Auth.forgotPassword = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        render(<ForgotPassword />);

        const email = screen.getByLabelText(/email/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(submitButton);
        });

        await waitFor(() => {
            expect(Auth.forgotPassword).toThrow();

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
