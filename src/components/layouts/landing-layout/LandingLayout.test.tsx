import LandingLayout from '@components/layout/landing-layout/LandingLayout';
import { render, screen } from '@testing-library/react';

jest.mock('@components/layout/nav/Nav', () => {
    return {
        __esModule: true,
        default: () => {
            return <nav />;
        }
    };
});

describe('LandingLayout', () => {
    it('can render without crashing', () => {
        render(<LandingLayout title="Hello World">Hello World</LandingLayout>);

        const children = screen.getByText('Hello World');

        expect(children).toBeInTheDocument();
    });
});
