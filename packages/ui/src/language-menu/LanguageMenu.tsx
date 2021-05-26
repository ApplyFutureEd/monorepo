import {
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables,
    updateStudent
} from '@applyfuture/graphql';
import { graphql, useAuthenticatedUser, useQuery } from '@applyfuture/utils';
import Flags from 'country-flag-icons/react/3x2';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { Dropdown, DropdownItem } from './../dropdown/Dropdown';

export const LanguageMenu: FC = () => {
    const { user } = useAuthenticatedUser();
    const { data: studentData } = useQuery<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(
        getStudentByEmail,
        { email: user?.attributes.email }
    );
    const student = studentData?.getStudentByEmail?.items?.[0];
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen((prev) => !prev);

    const handleClose = () => {
        setOpen(false);
    };

    const handleLanguageChange = async (locale: string) => {
        handleClose();
        if (student) {
            await graphql(updateStudent, {
                input: {
                    id: student?.id,
                    locale: locale
                }
            });
        }
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

    return (
        <Dropdown
            handleClose={handleClose}
            items={items}
            open={open}
            trigger={trigger}
            onOutsideClick={handleClose}
        />
    );
};
