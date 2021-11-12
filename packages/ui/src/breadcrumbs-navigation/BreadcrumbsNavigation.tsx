import { faHomeAlt } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
    /**
     * Items displayed in the breadcrumbs. Order matters.
     */
    items: Array<any>;
};

export const BreadcrumbsNavigation: FC<Props> = (props) => {
    const { items } = props;

    return (
        <nav aria-label="Breadcrumb" className="hidden mb-6 sm:flex">
            <ol className="flex px-6 w-full bg-white rounded-md shadow space-x-4">
                <li className="flex">
                    <div className="flex items-center">
                        <a className="text-gray-400 hover:text-gray-500" href="/index">
                            <FontAwesomeIcon fixedWidth icon={faHomeAlt} />
                        </a>
                    </div>
                </li>
                {items?.map((item, index) => (
                    <li key={index} className="flex">
                        <div className="flex items-center">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-full text-gray-200"
                                fill="currentColor"
                                preserveAspectRatio="none"
                                viewBox="0 0 24 44"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                            </svg>
                            <span className="ml-4 text-gray-500 hover:text-gray-700 text-sm font-medium">
                                <Link href={item.link}>{item.label}</Link>
                            </span>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
};
