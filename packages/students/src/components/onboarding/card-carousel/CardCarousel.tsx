import { SearchProgramsQuery } from '@applyfuture/graphql';
import { SupportedLocale } from '@applyfuture/models';
import { Tooltip } from '@applyfuture/ui';
import {
    convertSecondsToUnit,
    currency,
    date,
    getCountryLabel,
    getDurationUnitLabel,
    getFeeUnitLabel,
    useAuthenticatedUser
} from '@applyfuture/utils';
import { faClock, faEuroSign, faGlobe, faUniversity } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    program: NonNullable<NonNullable<SearchProgramsQuery['searchPrograms']>['items']>[0];
};

export const CardCarousel: FC<Props> = (props) => {
    const { user } = useAuthenticatedUser();
    const { t } = useTranslation();
    const router = useRouter();
    const locale = router.locale as SupportedLocale;
    const { program } = props;

    const handleClick = () => {
        user
            ? router.push(`/programs/${program?.slug}`)
            : router.push(`/sign-up?from=/programs/${program?.slug}`);
    };

    return (
        <div className="flex flex-none p-8 pb-16 max-w-sm">
            <button
                className="flex flex-col text-left bg-white rounded-2xl outline-none focus:outline-none hover:shadow-2xl shadow-xl"
                style={{ minHeight: '420px' }}
                onClick={handleClick}>
                <div className="relative flex-1 pb-2 pt-12 px-6 space-y-3 md:px-8">
                    <div className="absolute top-0 inline-block p-3 rounded-xl shadow-lg transform -translate-y-1/2">
                        <img
                            alt="school"
                            height="50"
                            src={`${process.env.ASSETS_CDN_URL}/${program?.school?.logo}`}
                            width="50"
                        />
                    </div>
                    <Tooltip content={program?.name} icon={false}>
                        <h3 className="clamp-2 mb-1 text-gray-900 text-xl font-bold">
                            {program?.name}
                        </h3>
                    </Tooltip>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-indigo-600 text-2xl">
                            <FontAwesomeIcon fixedWidth icon={faUniversity} />
                        </div>
                        <p className="text-gray-500 text-base">{program?.school?.name}</p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-indigo-600 text-2xl">
                            <FontAwesomeIcon fixedWidth icon={faGlobe} />
                        </div>
                        <p className="text-gray-500 text-base">
                            {t(`common:${getCountryLabel(program?.country)}`)}
                        </p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-indigo-600 text-2xl">
                            <FontAwesomeIcon fixedWidth icon={faClock} />
                        </div>
                        <p className="text-gray-500 text-base">
                            <span>
                                {convertSecondsToUnit({
                                    unit: program?.durationUnit as
                                        | 'DAY'
                                        | 'MONTH'
                                        | 'YEAR'
                                        | 'WEEK',
                                    value: program?.duration
                                })}{' '}
                                {t(`programs:${getDurationUnitLabel(program?.durationUnit)}`, {
                                    count: convertSecondsToUnit({
                                        unit: program?.durationUnit as
                                            | 'DAY'
                                            | 'MONTH'
                                            | 'YEAR'
                                            | 'WEEK',
                                        value: program?.duration
                                    })
                                })}
                                .
                            </span>
                            <span>
                                {' '}
                                {t('programs:next-intake', {
                                    count: router.locale === 'zh' ? 0 : 1
                                })}
                            </span>{' '}
                            <span className="text-gray-600 text-base font-bold">
                                {date({
                                    locale: locale,
                                    value: program?.intakes.split(',')[0]
                                })}
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-indigo-600 text-2xl">
                            <FontAwesomeIcon fixedWidth icon={faEuroSign} />
                        </div>
                        <p className="text-gray-500 text-base">
                            <span>{t(`programs:${getFeeUnitLabel(program?.feeUnit)}`)}</span>{' '}
                            <span className="text-gray-600 text-base font-bold">
                                {currency({
                                    currency: program?.feeCurrency,
                                    locale: locale,
                                    value: program?.fee
                                })}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="bg-gray-50 flex flex-row items-center px-6 py-3 rounded-bl-2xl rounded-br-2xl">
                    <a
                        className="ml-2.5 hover:text-indigo-600 text-indigo-700 text-base font-medium"
                        href="/">
                        {t('profile:onboarding-step-suggestions-learn-more')}
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </button>
        </div>
    );
};

export default CardCarousel;
