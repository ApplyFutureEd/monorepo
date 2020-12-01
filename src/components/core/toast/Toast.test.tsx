import Toast from '@components/core/toast/Toast';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Toast', () => {
    const closeToast = jest.fn();

    it('can render a success toast', () => {
        const toast = {
            description: 'You can now login with your new password',
            title: 'Password updated'
        };

        render(
            <Toast
                closeToast={closeToast}
                description={toast.description}
                title={toast.title}
                variant="success"
            />
        );

        const title = screen.getByText(toast.title);
        const description = screen.getByText(toast.description);

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it('can render an error toast', () => {
        const toast = {
            description: 'Please try again',
            title: 'Sorry, something went wrong'
        };

        render(
            <Toast
                closeToast={closeToast}
                description={toast.description}
                title={toast.title}
                variant="error"
            />
        );

        const title = screen.getByText(toast.title);
        const description = screen.getByText(toast.description);

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it('can call the closeToast callback function', async () => {
        const toast = {
            description: 'Please try again',
            title: 'Sorry, something went wrong'
        };

        render(
            <Toast
                closeToast={closeToast}
                description={toast.description}
                title={toast.title}
                variant="error"
            />
        );

        const button = screen.getByRole('button');

        await waitFor(() => {
            fireEvent.click(button);
        });

        expect(closeToast).toHaveBeenCalled();
    });
});
