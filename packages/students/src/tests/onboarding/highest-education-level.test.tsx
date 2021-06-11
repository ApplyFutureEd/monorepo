import HighestEducationLevel from '@pages/onboarding/highest-education-level';
import { render, screen } from '@testing-library/react';

describe('Onboarding HighestEducationLevel page', () => {
    it('can render without crashing', () => {
        render(<HighestEducationLevel />);

        const chatbotText = screen.getByText(
            'profile:onboarding-step-highest-education-level-chatbot-text-1'
        );

        expect(chatbotText).toBeInTheDocument();
    });
});
