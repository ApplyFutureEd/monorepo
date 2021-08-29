import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Help from '@pages/help';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC } from 'react';

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

const MockedDashboardLayout: FC = (props) => {
    return <div>{props.children}</div>;
};

jest.mock('@components/layouts/dashboard-layout/DashboardLayout', () => ({
    __esModule: true,
    default: jest.fn()
}));

((DashboardLayout as unknown) as any).mockImplementation(MockedDashboardLayout);

describe.skip('Help', () => {
    it('can render without crashing', () => {
        render(<Help />);

        const heading = screen.getAllByRole('heading')[0];

        expect(heading).toBeInTheDocument();
    });

    it('can open a question when the title is clicked', async () => {
        render(<Help />);

        const question = screen.getByText('help:question-1');
        const answer = screen.getByText('help:answer-1-p-1');

        await waitFor(() => {
            userEvent.click(question);
        });

        expect(answer).toBeVisible();
    });

    it('can close a question when the title is clicked again', async () => {
        render(<Help />);

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
