import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Header } from './Header';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        attributes: {
            email: 'awesome.student@gmail.com'
        }
    })),
    useOutsideAlerter: jest.fn()
}));

describe('Header', () => {
    const mobileMenu = <button>user menu</button>;

    const routes = [
        {
            href: '/profile',
            label: 'navigation:profile'
        },
        {
            href: '/programs',
            label: 'navigation:programs'
        },
        {
            href: '/schools',
            label: 'navigation:schools'
        },
        {
            href: '/applications',
            label: 'navigation:applications'
        },
        {
            href: '/help',
            label: 'navigation:help'
        }
    ];

    const handleOpenMobileMenu = jest.fn();

    it('can render without crashing', () => {
        render(
            <Header
                handleOpenMobileMenu={handleOpenMobileMenu}
                mobileMenu={mobileMenu}
                routes={routes}
            />
        );

        const nav = screen.getByRole('navigation');

        expect(nav).toBeInTheDocument();
    });

    it('can call the open callback function when clicking on an anchor', () => {
        render(
            <Header
                handleOpenMobileMenu={handleOpenMobileMenu}
                mobileMenu={mobileMenu}
                routes={routes}
            />
        );

        const anchor = screen.getByLabelText(/open/i);
        fireEvent.click(anchor);

        expect(handleOpenMobileMenu).toHaveBeenCalled();
    });
});
