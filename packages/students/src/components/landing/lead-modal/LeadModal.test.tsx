import LeadModal from '@components/landing/lead-modal/LeadModal';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Cookies from 'js-cookie';

jest.mock('js-cookie');

describe('LeadModal', () => {
    jest.useFakeTimers();

    it('can render without crashing', () => {
        render(
            <div>
                <LeadModal />
            </div>
        );

        act(() => {
            jest.advanceTimersByTime(5000);
        });

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can call onClose callback function when the close icon is clicked', async () => {
        render(
            <div>
                <LeadModal />
            </div>
        );

        act(() => {
            jest.advanceTimersByTime(5000);
        });

        const closeIcon = screen.getByRole('img', { hidden: true });

        await waitFor(() => {
            fireEvent.click(closeIcon);
        });

        const heading = screen.queryByRole('heading');

        expect(heading).not.toBeInTheDocument();
    });

    it('does not open modal if cookie exists', () => {
        Cookies.get = jest.fn().mockImplementation(() => true);

        render(
            <div>
                <LeadModal />
            </div>
        );

        jest.advanceTimersByTime(5000);

        const heading = screen.queryByRole('heading');

        expect(heading).not.toBeInTheDocument();
    });
});
