import { Drawer } from './Drawer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Drawer', () => {
    const handleClose = jest.fn();
    const title = 'Filters';
    const content = (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus neque id
            elit dapibus suscipit. Pellentesque ornare elit sed augue vestibulum egestas. Sed
            vehicula mauris nec ullamcorper fringilla. Nullam at turpis sed nisl volutpat porta.
        </p>
    );

    it('can render without crashing', () => {
        render(
            <Drawer open={false} title={title} onClose={handleClose}>
                {content}
            </Drawer>
        );

        const drawerTitle = screen.getByText('Filters');

        expect(drawerTitle).toBeInTheDocument();
    });

    it('can render the content when open', () => {
        render(
            <Drawer open={true} title={title} onClose={handleClose}>
                {content}
            </Drawer>
        );

        const drawerContent = screen.getByText(/Lorem ipsum/);

        expect(drawerContent).toBeVisible();
    });

    it('can call onClose callback function when the close icon is clicked', async () => {
        render(
            <Drawer open={false} title={title} onClose={handleClose}>
                {content}
            </Drawer>
        );

        const closeIcon = screen.getByRole('img', { hidden: true });

        await waitFor(() => {
            fireEvent.click(closeIcon);
        });

        expect(handleClose).toHaveBeenCalled();
    });
});
