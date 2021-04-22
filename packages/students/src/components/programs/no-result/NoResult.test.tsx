import NoResult from '@components/programs/no-result/NoResult';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

describe('NoResult', () => {
    const query = {
        filter: {
            or: [
                { name: { matchPhrasePrefix: 'bruxelles' } },
                { city: { matchPhrasePrefix: 'bruxelles' } },
                { country: { matchPhrasePrefix: 'bruxelles' } },
                { schoolName: { matchPhrasePrefix: 'bruxelles' } }
            ],
            published: { eq: true }
        },
        limit: 20
    };
    // const onClick = jest.fn();

    it('can render without crashing', () => {
        render(<NoResult query={JSON.stringify(query)} />);

        const notification = screen.getByText('programs:no-results-cta');

        expect(notification).toBeInTheDocument();
    });

    // it('can call onClick callback function when clicking the CTA button', async () => {
    //     render(<NoResult query={JSON.stringify(query)} />);

    //     const button = screen.getByRole('button');

    //     await waitFor(() => {
    //         userEvent.click(button);
    //     });

    //     expect(onClick).toHaveBeenCalled();
    // });
});
