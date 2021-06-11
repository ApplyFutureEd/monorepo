import Discipline from '@pages/onboarding/discipline';
import { render, screen } from '@testing-library/react';

describe('Onboarding Discipline page', () => {
    it('can render without crashing', () => {
        render(<Discipline />);

        const chatbotText = screen.getByText('profile:onboarding-step-discipline-chatbot-text-1');

        expect(chatbotText).toBeInTheDocument();
    });
});
