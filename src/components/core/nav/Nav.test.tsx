import Nav from '@components/core/nav/Nav';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            pathname: '/programs'
        };
    }
}));

const routes = [
    {
        href: '/programs',
        label: 'Programs'
    },
    {
        href: '/schools',
        label: 'Schools'
    },
    {
        href: '/about',
        label: 'About us'
    },
    {
        href: '/#contact',
        label: 'Contact'
    }
];

describe('Nav', () => {
    const linkBaseClasses =
        'text-gray-500 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150';
    const linkActiveClasses =
        'text-indigo-500 text-base leading-6 font-medium hover:text-indigo-500 transition ease-in-out duration-150';

    it('can render without crashing', () => {
        render(<Nav routes={routes} />);

        const nav = screen.getByRole('navigation');

        expect(nav).toBeInTheDocument();
    });

    it('can render anchors for each route', () => {
        render(<Nav routes={routes} />);

        expect(screen.getByText(/programs/i).closest('a')).toHaveAttribute('href', '/programs');
        expect(screen.getByText(/schools/i).closest('a')).toHaveAttribute('href', '/schools');
        expect(screen.getByText(/about us/i).closest('a')).toHaveAttribute('href', '/about');
        expect(screen.getByText(/contact/i).closest('a')).toHaveAttribute('href', '/#contact');
    });

    it('can style anchors correctly', () => {
        render(<Nav routes={routes} />);

        expect(screen.getByText(/programs/i).closest('a')).toHaveClass(linkBaseClasses);
        expect(screen.getByText(/programs/i).closest('a')).toHaveClass(linkActiveClasses);
        expect(screen.getByText(/schools/i).closest('a')).not.toHaveClass(linkActiveClasses);
        expect(screen.getByText(/about us/i).closest('a')).not.toHaveClass(linkActiveClasses);
        expect(screen.getByText(/contact/i).closest('a')).not.toHaveClass(linkActiveClasses);
    });
});
