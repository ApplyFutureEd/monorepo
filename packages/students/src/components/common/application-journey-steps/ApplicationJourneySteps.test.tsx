import { render, screen } from '@testing-library/react';

import ApplicationJourneySteps from './ApplicationJourneySteps';

describe('ApplicationJourneySteps', () => {
    it('can render step 1 without crashing', () => {
        render(<ApplicationJourneySteps />);

        const step1 = screen.getByText('programs:application-steps-1');

        expect(step1).toBeInTheDocument();
    });

    it('can render step 2 without crashing', () => {
        render(<ApplicationJourneySteps />);

        const step2 = screen.getByText('programs:application-steps-2');

        expect(step2).toBeInTheDocument();
    });

    it('can render step 3 without crashing', () => {
        render(<ApplicationJourneySteps />);

        const step3 = screen.getByText('programs:application-steps-3');

        expect(step3).toBeInTheDocument();
    });
});
