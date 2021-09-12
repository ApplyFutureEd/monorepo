import FrequentlyAskedQuestions from '@components/help/frequently-asked-questions/FrequentlyAskedQuestions';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('FrequentlyAskedQuestions', () => {
    it('can render without crashing', () => {
        render(<FrequentlyAskedQuestions />);

        const heading = screen.getAllByRole('heading')[0];

        expect(heading).toBeInTheDocument();
    });

    it('can open a question when the title is clicked', async () => {
        render(<FrequentlyAskedQuestions />);

        const question = screen.getByText('help:question-1');
        const answer = screen.getByText('help:answer-1-p-1');

        await waitFor(() => {
            userEvent.click(question);
        });

        expect(answer).toBeVisible();
    });

    it('can close a question when the title is clicked again', async () => {
        render(<FrequentlyAskedQuestions />);

        const question = screen.getByText('help:question-1');
        const answer = screen.getByText('help:answer-1-p-1');

        await waitFor(() => {
            userEvent.click(question);
        });

        await waitFor(() => {
            userEvent.click(question);
        });

        await waitFor(() => {
            expect(answer).not.toBeVisible();
        });
    });
});
