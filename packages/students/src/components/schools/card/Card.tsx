import { SearchSchoolsQuery } from '@applyfuture/graphql';
import { getCountryLabel } from '@applyfuture/utils';
import { faMapMarkerAlt } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    school: NonNullable<NonNullable<SearchSchoolsQuery['searchSchools']>['items']>[0];
};

const Card: FC<Props> = (props) => {
    const { school } = props;
    const { t } = useTranslation();

    return (
        <Link href={`/schools/${school?.slug}`}>
            <div className="h-full hover:bg-gray-50 focus:bg-gray-50 bg-white rounded-lg focus:outline-none shadow cursor-pointer overflow-hidden transition duration-150 ease-in-out">
                <div className="flex items-center px-4 py-5 h-full space-x-4 sm:p-6">
                    <img
                        alt={`${school?.name} logo`}
                        className="w-16 h-16"
                        src={`${process.env.ASSETS_CDN_URL}/${school?.logo}`}
                    />
                    <dl>
                        <dt className="text-gray-900 text-2xl font-semibold leading-9">
                            {school?.name}
                        </dt>
                        <dd className="flex items-center mt-1 text-gray-500 text-sm font-medium leading-5 space-x-2 truncate">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <div>
                                {school?.city}, {t(`common:${getCountryLabel(school?.country)}`)}
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </Link>
    );
};

export default Card;
