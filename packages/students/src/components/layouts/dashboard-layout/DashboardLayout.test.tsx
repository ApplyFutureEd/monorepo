import DashboardLayout from '@applyfuture/students/components/layouts/dashboard-layout/DashboardLayout';
import { render, screen } from '@testing-library/react';
import { FC } from 'react';

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

describe('DashboardLayout', () => {
    it('can render without crashing', () => {
        render(
            <DashboardLayout description="Lorem ipsum" title="Hello World">
                Hello World
            </DashboardLayout>
        );

        const children = screen.getByText('Hello World');

        expect(children).toBeInTheDocument();
    });
});
