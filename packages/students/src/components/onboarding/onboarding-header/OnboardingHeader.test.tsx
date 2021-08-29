import OnboardingHeader from '@components/onboarding/onboarding-header/OnboardingHeader';
import { render, screen } from '@testing-library/react';

describe.skip('OnboardingHeader', () => {
    it('can render without crashing', () => {
        render(<OnboardingHeader />);

        const logo = screen.getByRole('presentation');

        expect(logo).toBeInTheDocument();
    });
});
