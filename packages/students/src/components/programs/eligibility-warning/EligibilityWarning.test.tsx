import EligibilityWarning from '@components/programs/eligibility-warning/EligibilityWarning';
import { render, screen } from '@testing-library/react';

describe('EligibilityWarning', () => {
    it('can render without crashing', () => {
        render(
            <EligibilityWarning
                isCompleted={false}
                isEligible={false}
                reasons={[{ id: 'testToeic', message: 'Lorem ipsum' }]}
            />
        );

        const reason = screen.getByText('Lorem ipsum');

        expect(reason).toBeInTheDocument;
    });

    it('can render nothing on some conditions', () => {
        render(<EligibilityWarning isCompleted={true} isEligible={true} reasons={[]} />);

        const headline = screen.queryByText('programs:not-eligible-headline');

        expect(headline).not.toBeInTheDocument();
    });
});
