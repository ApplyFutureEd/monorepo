import LeadModal from '@components/landing/lead-modal/LeadModal';
import { render, screen } from '@testing-library/react';

describe('LeadModal', () => {
    it('can render without crashing', () => {
        render(
            <div>
                <LeadModal />
            </div>
        );

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
