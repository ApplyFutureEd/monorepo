import EligibilityWarningModal from '@components/programs/eligibility-warning-modal/EligibilityWarningModal';
import { render, screen } from '@testing-library/react';

const handleClose = jest.fn();

describe('EligibilityWarningModal', () => {
    it('can render without crashing', () => {
        render(
            <EligibilityWarningModal
                handleClose={handleClose}
                isCompleted={false}
                open={true}
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
});
