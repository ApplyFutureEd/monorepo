import Contact from '@components/landing/contact/Contact';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { API } from 'aws-amplify';

API.post = jest.fn().mockImplementation(() => {
    return true;
});

describe('Contact', () => {
    const fakeUser = {
        email: 'awesome.student@gmail.com',
        firstName: 'John',
        lastName: 'Doe',
        message: 'Lorem ipsum'
    };

    it('can render without crashing', () => {
        render(<Contact />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<Contact />);

        const email = screen.getByLabelText(/email/);
        const firstName = screen.getByLabelText(/first-name/);
        const lastName = screen.getByLabelText(/last-name/);
        const message = screen.getByLabelText(/message/);
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
            fireEvent.change(lastName, {
                target: {
                    value: fakeUser.lastName
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(message, {
                target: {
                    value: fakeUser.message
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(submitButton);
        });

        await waitFor(() => {
            expect(API.post).toHaveBeenCalledWith('REST', '/ses/contact-form', {
                body: {
                    email: fakeUser.email,
                    firstName: fakeUser.firstName,
                    lastName: fakeUser.lastName,
                    message: fakeUser.message
                }
            });
        });
    });

    it('can display the right error message when an Error is thrown', async () => {
        API.post = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        render(<Contact />);

        const email = screen.getByLabelText(/email/);
        const firstName = screen.getByLabelText(/first-name/);
        const lastName = screen.getByLabelText(/last-name/);
        const message = screen.getByLabelText(/message/);
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
            fireEvent.change(lastName, {
                target: {
                    value: fakeUser.lastName
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(message, {
                target: {
                    value: fakeUser.message
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
