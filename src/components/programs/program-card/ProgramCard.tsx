import Button from '@components/core/button/Button';
import { currency } from '@utils/helpers/currency';
import { date } from '@utils/helpers/date';
import { duration } from '@utils/helpers/duration';
import { getUrl } from '@utils/helpers/image';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-translate';
import React, { FC } from 'react';
import { SupportedLocale } from 'src/types/SupportedLocale';

type Props = {
    program: any;
};

const ProgramCard: FC<Props> = (props) => {
    const { program } = props;
    const router = useRouter();
    const locale = router.locale as SupportedLocale;
    const { t } = useTranslation();

    return (
        <li className="flex items-center px-6 py-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition duration-150 ease-in-out">
            <Link href={`/programs/${program.slug}`}>
                <div className="w-11/12">
                    <div className="flex items-center w-full">
                        <div className="flex items-center w-full space-x-4 md:w-1/2">
                            <Image height="3rem" src={getUrl(program.school?.logo)} width="3rem" />
                            <div>
                                <div className="mb-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        <div className="flex items-center mt-2 text-sm leading-5 space-x-2 sm:mt-0">
                                            <div>{program.school?.name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm leading-5">
                                        <b>{program.name}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex md:items-center md:w-1/2 md:space-x-24">
                            <div className="w-1/2">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="truncate text-sm leading-5">
                                        {duration({
                                            unit: program.durationUnit,
                                            value: program.duration
                                        })}{' '}
                                        {t(`programs:${program.durationUnit}`, {
                                            count: +program.duration
                                        })}
                                        , {t('programs:full-time') || t('programs:part-time')}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="truncate text-sm leading-5">
                                        {program.city}, {program.country}
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="truncate text-sm leading-5">
                                        <div>
                                            {t('programs:next-intake', { count: 1 })}{' '}
                                            <b>
                                                {program.intakes &&
                                                    date({
                                                        locale: locale,
                                                        value: program.intakes[0]
                                                    })}
                                            </b>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="truncate text-sm leading-5">
                                        <div>
                                            {t(`programs:${program.feeUnit}`)}{' '}
                                            <b>
                                                {currency({
                                                    currency: program.feeCurrency,
                                                    locale: locale,
                                                    value: program.fee
                                                })}
                                            </b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Button
                onClick={() => {
                    console.log('create');
                }}>
                {t('programs:apply')}
            </Button>
        </li>
    );
};

export default ProgramCard;
