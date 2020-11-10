import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import { render, screen } from '@testing-library/react';

describe('LandingLayout', () => {
    it('can render without crashing', () => {
        render(<LandingLayout title="Hello World">Hello World</LandingLayout>);

        const children = screen.getByText('Hello World');

        expect(children).toBeInTheDocument();
    });
});
