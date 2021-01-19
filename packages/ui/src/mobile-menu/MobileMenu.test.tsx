import { fireEvent, render, screen } from '@testing-library/react';
import { ReactNode } from 'react';

import { MobileMenu } from './MobileMenu';

type LinkProps = {
    children: ReactNode;
};

jest.mock('next/link', () => {
    return ({ children }: LinkProps) => {
        return children;
    };
});

jest.mock('@applyfuture/utils');

const handleCloseMobileMenu = jest.fn();

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
        render(<MobileMenu handleCloseMobileMenu={handleCloseMobileMenu} routes={routes} />);

        const nav = screen.getByRole('navigation');

        expect(nav).toBeInTheDocument();
    });

    it('can call the close callback function when clicking on the close icon', () => {
        render(<MobileMenu handleCloseMobileMenu={handleCloseMobileMenu} routes={routes} />);

        const button = screen.getByLabelText(/close/i);
        fireEvent.click(button);

        expect(handleCloseMobileMenu).toHaveBeenCalled();
    });

    it('can call the close callback function when clicking on an anchor', () => {
        render(<MobileMenu handleCloseMobileMenu={handleCloseMobileMenu} routes={routes} />);

        const anchor = screen.getByText(/programs/i);
        fireEvent.click(anchor);

        expect(handleCloseMobileMenu).toHaveBeenCalled();
    });
});
