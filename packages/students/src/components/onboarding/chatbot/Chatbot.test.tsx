import Chatbot from '@components/onboarding/chatbot/Chatbot';
import { render, screen } from '@testing-library/react';

describe('Chatbot', () => {
    it('can render without crashing', () => {
        render(
            <Chatbot name="Charly">
                <p>Hi, I am Charly</p>
            </Chatbot>
        );

        const text = screen.getByText('Hi, I am Charly');

        expect(text).toBeInTheDocument();
    });
});
