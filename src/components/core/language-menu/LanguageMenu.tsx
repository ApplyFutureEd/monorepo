import Dropdown, { DropdownItem } from '@components/core/dropdown/Dropdown';
import Flags from 'country-flag-icons/react/3x2';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

const LanguageMenu: FC = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prev) => !prev);

    const handleClose = () => {
        setOpen(false);
    };

    const handleLanguageChange = (locale: string) => {
        handleClose();
        Cookies.set('NEXT_LOCALE', locale);
        router.push(router.asPath, router.asPath, { locale });
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
            flag: <Flags.FR className="h-4" title="Français" />,
            locale: 'fr',
            name: 'Français'
        }
    ];

    const trigger = (
        <button className="flex items-center space-x-2 lg:space-x-0" onClick={handleToggle}>
            {languages.find((language) => language.locale === router.locale)?.flag}
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

    return <Dropdown items={items} open={open} trigger={trigger} onOutsideClick={handleClose} />;
};

export default LanguageMenu;
