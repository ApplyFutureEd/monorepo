import { AmplifyError } from '@applyfuture/models';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

jest.mock('aws-amplify');

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

        userEvent.type(email, fakeUser.email);
        userEvent.click(submitButton);

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

        userEvent.type(email, fakeUser.email);
        userEvent.click(submitButton);

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

        userEvent.type(email, fakeUser.email);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(Auth.forgotPassword).toThrow();

            const errorMessage = screen.getByText(/auth:error-generic-exception/);
            expect(errorMessage).toBeVisible();
        });
    });
});
