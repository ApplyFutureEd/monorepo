import Dropdown, { DropdownItem } from '@components/core/dropdown/Dropdown';
import { faHeart, faSignOut, faUser } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

describe('UserMenu', () => {
    const handleToggle = jest.fn();
    const handleClose = jest.fn();
    const handleFavorites = jest.fn();
    const handleSignOut = jest.fn();

    const trigger = (
        <button className="flex items-center space-x-2 lg:space-x-0" onClick={handleToggle}>
            <div
                aria-haspopup="true"
                aria-label="User menu"
                className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded-full cursor-pointer"
                id="user-menu">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="text-base font-medium leading-6 lg:hidden">
                awesome.student@gmail.com
            </div>
        </button>
    );

    const items: Array<DropdownItem> = [
        {
            label: 'Favorites',
            onClick: handleFavorites,
            startIcon: faHeart
        },
        {
            label: 'Sign out',
            onClick: handleSignOut,
            startIcon: faSignOut
        }
    ];

    it('can render without crashing', () => {
        render(
            <Dropdown items={items} open={false} trigger={trigger} onOutsideClick={handleClose} />
        );

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('can render inner items without crashing', () => {
        render(
            <Dropdown items={items} open={true} trigger={trigger} onOutsideClick={handleClose} />
        );

        const favorites = screen.getByText(/favorites/i);
        const signOut = screen.getByText(/sign out/i);

        expect(favorites).toBeVisible();
        expect(signOut).toBeVisible();
    });

    it('can call onClick callback function when clicking on the menu trigger', () => {
        render(
            <Dropdown items={items} open={false} trigger={trigger} onOutsideClick={handleClose} />
        );

        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(handleToggle).toHaveBeenCalled();
    });

    it('can call onClick callback functions when clicking on menu items', () => {
        render(
            <Dropdown items={items} open={true} trigger={trigger} onOutsideClick={handleClose} />
        );

        const favorites = screen.getByText(/favorites/i);
        const signOut = screen.getByText(/sign out/i);

        fireEvent.click(favorites);
        fireEvent.click(signOut);

        expect(handleFavorites).toHaveBeenCalled();
        expect(handleSignOut).toHaveBeenCalled();
    });
});
