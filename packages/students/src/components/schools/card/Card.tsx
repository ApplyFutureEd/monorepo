import { getCountryLabel } from '@applyfuture/utils';
import { faMapMarkerAlt } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    city: string;
    country: string;
    logo: string;
    name: string;
    slug: string;
};

const Card: FC<Props> = (props) => {
    const { t } = useTranslation();

    const { city, country, logo, name, slug } = props;

    return (
        <Link href={`/schools/${slug}`}>
            <div className="hover:bg-gray-50 focus:bg-gray-50 h-full bg-white rounded-lg focus:outline-none shadow cursor-pointer overflow-hidden transition duration-150 ease-in-out">
                <div className="flex items-center px-4 py-5 h-full space-x-4 sm:p-6">
                    <img
                        alt={`${name} logo`}
                        className="w-16 h-16"
                        src={`${process.env.ASSETS_CDN_URL}/${logo}`}
                    />
                    <dl>
                        <dt className="text-gray-900 text-2xl font-semibold leading-9">{name}</dt>
                        <dd className="flex items-center mt-1 text-gray-500 truncate text-sm font-medium leading-5 space-x-2">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <div>
                                {city}, {t(`common:${getCountryLabel(country)}`)}
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </Link>
    );
};

export default Card;
