import OnboardingLayout from '@components/layouts/onboarding-layout/OnboardingLayout';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

describe.skip('OnboardingLayout', () => {
    it('can render without crashing', () => {
        render(
            <OnboardingLayout description="Lorem ipsum" title="Hello World">
                Hello World
            </OnboardingLayout>
        );

        const children = screen.getByText('Hello World');

        expect(children).toBeInTheDocument();
    });
});
