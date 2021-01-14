import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    routes: {
        href: string;
        label: string;
    }[];
};

export const Nav: FC<Props> = (props) => {
    const { routes } = props;
    const router = useRouter();
    const { t } = useTranslation();

    const linkBaseClasses =
        'text-gray-500 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150 cursor-pointer';
    const linkActiveClasses =
        'text-indigo-500 text-base leading-6 font-medium hover:text-indigo-500 transition ease-in-out duration-150 cursor-pointer';

    return (
        <nav className="hidden space-x-10 lg:flex">
            {routes.map((route) => (
                <div key={route.href} className="relative">
                    <Link href={route.href}>
                        <div
                            className={cx({
                                [`${linkBaseClasses}`]: true,
                                [`${linkActiveClasses}`]: route.href === router.pathname
                            })}>
                            {t(route.label)}
                        </div>
                    </Link>
                </div>
            ))}
        </nav>
    );
};
