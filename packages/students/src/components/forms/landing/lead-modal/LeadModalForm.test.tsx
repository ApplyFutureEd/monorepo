import LeadModalForm from '@components/forms/landing/lead-modal/LeadModalForm';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { API } from 'aws-amplify';

API.post = jest.fn().mockImplementation(() => {
    return true;
});

describe('LeadModalForm', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        firstName: 'John'
    };

    const setOpen = jest.fn();

    it('can render without crashing', () => {
        render(<LeadModalForm setOpen={setOpen} />);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<LeadModalForm setOpen={setOpen} />);

        const email = screen.getByLabelText(/email/);
        const firstName = screen.getByLabelText(/first-name/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(firstName, {
                target: {
                    value: fakeUser.firstName
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(submitButton);
        });

        await waitFor(() => {
            expect(API.post).toHaveBeenCalledWith('rest', '/contact-form', {
                body: {
                    email: fakeUser.email,
                    firstName: fakeUser.firstName,
                    lastName: '',
                    message: 'New lead from modal'
                }
            });
        });
    });

    it('can display the right error message when an Error is thrown', async () => {
        API.post = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        render(<LeadModalForm setOpen={setOpen} />);

        const email = screen.getByLabelText(/email/);
        const firstName = screen.getByLabelText(/first-name/);
        const submitButton = screen.getByRole(/button/);

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeUser.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(firstName, {
                target: {
                    value: fakeUser.firstName
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(submitButton);
        });

        await waitFor(() => {
            expect(API.post).toThrow();

            const errorMessage = screen.getByText(/landing:contact-form-error/);
            expect(errorMessage).toBeVisible();
        });
    });
});
