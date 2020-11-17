import AuthLayout from '@components/layouts/auth-layout/AuthLayout';
import { render, screen } from '@testing-library/react';

describe('AuthLayout', () => {
    it('can render without crashing', () => {
        render(<AuthLayout title="Hello World">Hello World</AuthLayout>);

        const children = screen.getByText('Hello World');

        expect(children).toBeInTheDocument();
    });
});
