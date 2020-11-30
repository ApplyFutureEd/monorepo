import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { render, screen } from '@testing-library/react';

jest.mock('@components/core/nav/Nav', () => {
    return {
        __esModule: true,
        default: () => {
            return <nav />;
        }
    };
});

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
