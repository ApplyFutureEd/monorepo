import SchoolTuitionsFeePaymentProgress from '@components/applications/timeline/school-tuitions-fee-payment/SchoolTuitionsFeePaymentProgress';
import { render, screen } from '@testing-library/react';

describe('SchoolTuitionsFeePaymentProgress', () => {
    it('can render without crashing', () => {
        render(<SchoolTuitionsFeePaymentProgress />);

        const description = screen.getByText('application:timeline-step-tuitions-fee-description');

        expect(description).toBeInTheDocument;
    });
});
