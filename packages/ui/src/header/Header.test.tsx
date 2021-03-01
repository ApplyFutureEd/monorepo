import { faBars } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        user: {
            attributes: {
                email: 'awesome.student@gmail.com'
            }
        }
    })),
    useOutsideAlerter: jest.fn()
}));

describe('Header', () => {
    const handleOpenMobileMenu = jest.fn();

    const mobileComponents = [
        <button
            key={1}
            aria-label={'common:open'}
            className="inline-flex items-center justify-center p-2 text-gray-500 focus:text-gray-500 hover:text-indigo-500 hover:bg-gray-100 focus:bg-gray-100 rounded-md focus:outline-none transition duration-150 ease-in-out"
            type="button"
            onClick={handleOpenMobileMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
    ];

    const mobileMenu = <div>user menu</div>;

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

    it('can render without crashing', () => {
        render(
            <Header mobileComponents={mobileComponents} mobileMenu={mobileMenu} routes={routes} />
        );

        const nav = screen.getByRole('navigation');

        expect(nav).toBeInTheDocument();
    });

    it('can call the open callback function when clicking on an anchor', () => {
        render(
            <Header mobileComponents={mobileComponents} mobileMenu={mobileMenu} routes={routes} />
        );

        const anchor = screen.getByLabelText(/open/i);
        fireEvent.click(anchor);

        expect(handleOpenMobileMenu).toHaveBeenCalled();
    });
});
