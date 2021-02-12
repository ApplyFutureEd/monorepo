import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal', () => {
    const handleClose = jest.fn();
    const content = (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus neque id
            elit dapibus suscipit. Pellentesque ornare elit sed augue vestibulum egestas. Sed
            vehicula mauris nec ullamcorper fringilla. Nullam at turpis sed nisl volutpat porta.
        </p>
    );

    it('can render without crashing', () => {
        render(
            <Modal open={true} onClose={handleClose}>
                {content}
            </Modal>
        );

        const modalContent = screen.getByText(/Lorem ipsum/gi);

        expect(modalContent).toBeInTheDocument();
    });

    it('can call onClose callback function when the close icon is clicked', async () => {
        render(
            <Modal open={true} onClose={handleClose}>
                {content}
            </Modal>
        );

        const closeIcon = screen.getByRole('img', { hidden: true });

        await waitFor(() => {
            fireEvent.click(closeIcon);
        });

        expect(handleClose).toHaveBeenCalled();
    });
});
