import MobileMenu from '@components/layout/mobile-menu/MobileMenu';
import { fireEvent, render, screen } from '@testing-library/react';

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

const setOpen = jest.fn();

describe('MobileMenu', () => {
    it('can render without crashing', () => {
        render(<MobileMenu routes={routes} setOpen={setOpen} />);

        const nav = screen.getByRole('navigation');

        expect(nav).toBeInTheDocument();
    });

    it('can call the close callback when clicking on the close icon', () => {
        render(<MobileMenu routes={routes} setOpen={setOpen} />);

        const button = screen.getByLabelText(/close/i);
        fireEvent.click(button);

        expect(setOpen).toHaveBeenNthCalledWith(1, false);
    });

    it('can call the close callback when clicking on an anchor', () => {
        render(<MobileMenu routes={routes} setOpen={setOpen} />);

        const anchor = screen.getByText(/programs/i);
        fireEvent.click(anchor);

        expect(setOpen).toHaveBeenNthCalledWith(1, false);
    });
});
