import { SearchProgramsQuery } from '@applyfuture/graphql';
import { SupportedLocale } from '@applyfuture/models';
import {
    convertSecondsToUnit,
    currency,
    date,
    getCountryLabel,
    getDurationUnitLabel,
    getFeeUnitLabel
} from '@applyfuture/utils';
import { faClock, faDiploma, faEuroSign, faGlobe } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    program: NonNullable<NonNullable<SearchProgramsQuery['searchPrograms']>['items']>[0];
};

export const CardCarousel: FC<Props> = (props) => {
    const { t } = useTranslation();
    const router = useRouter();
    const locale = router.locale as SupportedLocale;
    const { program } = props;

    return (
        <div className="flex flex-none p-8 pb-16 max-w-sm">
            <div className="flex flex-col bg-white rounded-2xl hover:shadow-2xl shadow-xl cursor-pointer">
                <div className="relative flex-1 pb-2 pt-12 px-6 space-y-3 md:px-8">
                    <div className="absolute top-0 inline-block p-3 rounded-xl shadow-lg transform -translate-y-1/2">
                        <img
                            alt="school"
                            height="50"
                            src={`${process.env.ASSETS_CDN_URL}/${program?.school?.logo}`}
                            width="50"
                        />
                    </div>
                    <h3 className="mb-1 text-gray-900 text-xl font-bold">
                        {program?.school?.name}
                    </h3>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-indigo-600 text-2xl">
                            <FontAwesomeIcon fixedWidth icon={faDiploma} />
                        </div>
                        <p className="text-gray-500 text-base">{program?.name}</p>
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
                            </span>
                            <span>
                                {t('programs:next-intake', {
                                    count: router.locale === 'zh' ? 0 : 1
                                })}
                            </span>
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
                            <span>{t(`programs:${getFeeUnitLabel(program?.feeUnit)}`)}</span>
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
            </div>
        </div>
    );
};

export default CardCarousel;
