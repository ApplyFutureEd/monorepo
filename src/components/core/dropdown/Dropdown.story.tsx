import Dropdown, { DropdownItem } from '@components/core/dropdown/Dropdown';
import { faHeart, faSignOut } from '@fortawesome/pro-light-svg-icons';
import { faUser } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flags from 'country-flag-icons/react/3x2';
import React, { ReactNode, useState } from 'react';

export default {
    component: Dropdown,
    title: 'Dropdown'
};

export const UserMenu = (): ReactNode => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prev) => !prev);

    const handleClose = () => {
        setOpen(false);
    };

    const handleFavorites = () => {
        handleClose();
        alert('Navigates to /favorites');
    };

    const handleSignOut = () => {
        alert('Sign out');
    };

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

    return (
        <div className="flex justify-center h-32">
            <Dropdown items={items} open={open} trigger={trigger} onOutsideClick={handleClose} />
        </div>
    );
};

export const LanguageMenu = (): ReactNode => {
    const [open, setOpen] = useState(false);
    const [locale, setLocale] = useState('en');

    const handleToggle = () => setOpen((prev) => !prev);

    const handleClose = () => {
        setOpen(false);
    };

    const handleLanguageChange = (locale: string) => {
        handleClose();
        setLocale(locale);
        alert(`Navigates to /${locale}`);
    };

    const languages = [
        {
            flag: <Flags.US className="h-4" title="English" />,
            locale: 'en',
            name: 'English'
        },
        {
            flag: <Flags.CN className="h-4" title="简体中文" />,
            locale: 'zh',
            name: '简体中文'
        },
        {
            flag: <Flags.FR className="h-4" title="English" />,
            locale: 'fr',
            name: 'Français'
        }
    ];

    const trigger = (
        <button className="flex items-center space-x-2 lg:space-x-0" onClick={handleToggle}>
            {languages.find((language) => language.locale === locale)?.flag}
        </button>
    );

    const items: Array<DropdownItem> = languages.map((language) => {
        const { flag, locale, name } = language;

        return {
            label: (
                <div className="flex items-center space-x-2">
                    {flag}
                    <span>{name}</span>
                </div>
            ),
            onClick: () => handleLanguageChange(locale)
        };
    });

    return (
        <div className="flex justify-center h-32">
            <Dropdown items={items} open={open} trigger={trigger} onOutsideClick={handleClose} />
        </div>
    );
};
