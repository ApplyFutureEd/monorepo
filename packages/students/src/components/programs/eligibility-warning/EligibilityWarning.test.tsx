import EligibilityWarning from '@components/programs/eligibility-warning/EligibilityWarning';
import { render, screen } from '@testing-library/react';

describe('EligibilityWarning', () => {
    it('can render without crashing', () => {
        render(
            <EligibilityWarning
                isCompleted={false}
                isEligible={false}
                reasons={[
                    { id: 'highestEducationLevel', message: 'Lorem ipsum' },
                    { id: 'testToeic', message: 'Dolor sit amet' },
                    { id: 'testDele', message: 'Consectetur adipiscing elit' },
                    { id: 'testGmat', message: 'Sed do eiusmod' }
                ]}
            />
        );

        const reason1 = screen.getByText('Lorem ipsum');
        const reason2 = screen.getByText('Dolor sit amet');
        const reason3 = screen.getByText('Consectetur adipiscing elit');
        const reason4 = screen.getByText('Sed do eiusmod');

        expect(reason1).toBeInTheDocument;
        expect(reason2).toBeInTheDocument;
        expect(reason3).toBeInTheDocument;
        expect(reason4).toBeInTheDocument;
    });

    it('can render nothing on some conditions', () => {
        render(<EligibilityWarning isCompleted={true} isEligible={true} reasons={[]} />);

        const headline = screen.queryByText('programs:not-eligible-headline');

        expect(headline).not.toBeInTheDocument();
    });
});
