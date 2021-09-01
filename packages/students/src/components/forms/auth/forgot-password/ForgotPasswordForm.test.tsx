import { AmplifyError } from '@applyfuture/models';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Auth } from 'aws-amplify';

import ForgotPasswordForm from './ForgotPasswordForm';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            query: {}
        };
    }
}));

Auth.forgotPassword = jest.fn().mockImplementation(() => {
    return true;
});

describe('ForgotPasswordForm', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com'
    };

    it('can render without crashing', () => {
        render(<ForgotPasswordForm />);

        const heading = screen.getByLabelText(/email/);

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<ForgotPasswordForm />);

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

        render(<ForgotPasswordForm />);

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

        render(<ForgotPasswordForm />);

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
