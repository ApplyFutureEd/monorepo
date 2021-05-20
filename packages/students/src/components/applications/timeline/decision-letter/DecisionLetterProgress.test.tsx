import DecisionLetterProgress from '@components/applications/timeline/decision-letter/DecisionLetterProgress';
import { render, screen } from '@testing-library/react';

describe('DecisionLetterProgress', () => {
    it('can render without crashing', () => {
        render(<DecisionLetterProgress />);

        const description = screen.getByText(
            'application:timeline-step-decision-letter-description'
        );

        expect(description).toBeInTheDocument;
    });
});
