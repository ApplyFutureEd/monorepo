import Country from '@pages/onboarding/country';
import { render, screen } from '@testing-library/react';

describe.skip('Onboarding Country page', () => {
    it('can render without crashing', () => {
        render(<Country />);

        const chatbotText = screen.getByText('profile:onboarding-step-country-chatbot-text-1');

        expect(chatbotText).toBeInTheDocument();
    });
});
