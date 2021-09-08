import Degree from '@pages/onboarding/degree';
import { render, screen } from '@testing-library/react';

describe.skip('Onboarding Degree page', () => {
    it('can render without crashing', () => {
        render(<Degree />);

        const chatbotText = screen.getByText('profile:onboarding-step-degree-chatbot-text-1');

        expect(chatbotText).toBeInTheDocument();
    });
});
