import { Nav } from './Nav';
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

    it('can style links correctly', () => {
        render(<Nav routes={routes} />);

        expect(screen.getByText(/programs/i).closest('div')).toHaveClass(linkBaseClasses);
        expect(screen.getByText(/programs/i).closest('div')).toHaveClass(linkActiveClasses);
        expect(screen.getByText(/schools/i).closest('div')).not.toHaveClass(linkActiveClasses);
        expect(screen.getByText(/about us/i).closest('div')).not.toHaveClass(linkActiveClasses);
        expect(screen.getByText(/contact/i).closest('div')).not.toHaveClass(linkActiveClasses);
    });
});
