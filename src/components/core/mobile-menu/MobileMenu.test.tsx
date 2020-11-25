import MobileMenu from '@components/core/mobile-menu/MobileMenu';
import { fireEvent, render, screen } from '@testing-library/react';
import useAuthenticatedUser from '@utils/hooks/useAuthenticatedUser';
import { ReactNode } from 'react';

type LinkProps = {
    children: ReactNode;
};

jest.mock('next/link', () => {
    return ({ children }: LinkProps) => {
        return children;
    };
});

jest.mock('@utils/useAuthenticatedUser');

const useAuthenticatedUserMock = useAuthenticatedUser as jest.MockedFunction<
    typeof useAuthenticatedUser
>;

const setOpen = jest.fn();

describe('MobileMenu', () => {
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

    it('display UserMenu if logged', () => {
        useAuthenticatedUserMock.mockReturnValue({
            attributes: { email: 'awesome.student@gmail.com' }
        });
        render(<MobileMenu routes={routes} setOpen={setOpen} />);

        const button = screen.getByLabelText(/user menu/i);
        const email = screen.getByText(/awesome.student@gmail.com/i);

        expect(button).toBeVisible();
        expect(email).toBeVisible();
    });
});
