import VisaProgress from '@components/applications/timeline/visa/VisaProgress';
import { render, screen } from '@testing-library/react';

describe('VisaProgress', () => {
    it('can render without crashing', () => {
        render(<VisaProgress />);

        const description = screen.getByText('application:timeline-step-visa-description');

        expect(description).toBeInTheDocument;
    });
});
