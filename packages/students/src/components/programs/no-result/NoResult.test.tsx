import { graphql, toast } from '@applyfuture/utils';
import NoResult from '@components/programs/no-result/NoResult';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    graphql: jest.fn(),
    toast: jest.fn(),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        user: {
            attributes: {
                email: 'awesome.student@gmail.com'
            }
        }
    })),
    useQuery: () => ({
        data: { getStudentByEmail: { items: [{ id: '41fdc5e7-fd1c-4428-b77c-b17895e64937' }] } }
    })
}));

describe('NoResult', () => {
    const variables = {
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

    it('can render without crashing', () => {
        render(<NoResult variables={variables} />);

        const notification = screen.getByText('programs:no-results-cta');

        expect(notification).toBeInTheDocument();
    });

    it('can call onClick callback function when clicking the CTA button', async () => {
        render(<NoResult variables={variables} />);

        const button = screen.getByRole('button');

        await waitFor(() => {
            userEvent.click(button);
        });

        expect(graphql).toHaveBeenCalled();
        expect(toast).toHaveBeenCalled();
    });
});
