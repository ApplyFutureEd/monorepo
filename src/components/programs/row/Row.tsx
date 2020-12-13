import Button from '@components/core/button/Button';
import { DurationUnit } from '@graphql/API';
import { currency } from '@utils/helpers/currency';
import { date } from '@utils/helpers/date';
import { convertDuration } from '@utils/helpers/duration';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useMemo } from 'react';
import { SupportedLocale } from 'src/types/SupportedLocale';

type Props = {
    city: string;
    country: string;
    duration: number;
    durationUnit: DurationUnit;
    fee: number;
    feeCurrency: string;
    feeUnit: string;
    intakes: string;
    name: string;
    onClick: () => void;
    slug: string;
    school: {
        name: string;
        logo: string;
    };
};

const Row: FC<Props> = (props) => {
    const {
        city,
        country,
        duration,
        durationUnit,
        fee,
        feeCurrency,
        feeUnit,
        intakes,
        name,
        onClick,
        slug,
        school
    } = props;

    const router = useRouter();
    const locale = router.locale as SupportedLocale;
    const { t } = useTranslation();

    const convertedDuration = useMemo(
        () =>
            convertDuration({
                unit: durationUnit,
                value: duration
            }),
        [durationUnit, duration]
    );

    const localizedFee = useMemo(
        () =>
            currency({
                currency: feeCurrency,
                locale: locale,
                value: fee
            }),
        [feeCurrency, locale, fee]
    );

    return (
        <li className="flex items-center px-6 py-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition duration-150 ease-in-out">
            <Link href={`/programs/${slug}`}>
                <div className="w-11/12 cursor-pointer">
                    <div className="flex items-center w-full">
                        <div className="flex items-center w-full space-x-4 md:w-1/2">
                            <img
                                alt={`${school?.name} logo`}
                                className="w-12 h-12"
                                src={`${process.env.ASSETS_CDN_URL}/${school?.logo}`}
                            />
                            <div>
                                <div className="mb-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        <div className="flex items-center mt-2 text-sm leading-5 space-x-2 sm:mt-0">
                                            <div>{school?.name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm leading-5">
                                        <b>{name}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex md:items-center md:w-1/2 md:space-x-24">
                            <div className="w-1/2">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="truncate text-sm leading-5">
                                        {convertedDuration}{' '}
                                        {t(`programs:${durationUnit}`, {
                                            count: convertedDuration
                                        })}
                                        , {t('programs:full-time')}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="truncate text-sm leading-5">
                                        {city}, {country}
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="truncate text-sm leading-5">
                                        <div>
                                            {t('programs:next-intake', {
                                                count: router.locale === 'zh' ? 0 : 1
                                            })}{' '}
                                            <b>
                                                {date({
                                                    locale: locale,
                                                    value: intakes.split(',')[0]
                                                })}
                                            </b>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="truncate text-sm leading-5">
                                        <div>
                                            {t(`programs:${feeUnit}`)} <b>{localizedFee}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Button onClick={onClick}>{t('programs:apply')}</Button>
        </li>
    );
};

export default Row;
