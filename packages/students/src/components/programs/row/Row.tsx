import { Program } from '@applyfuture/models';
import { Button } from '@applyfuture/ui';
import { convertSecondsToUnit, currency, date, getCountryLabel } from '@applyfuture/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';
import { SupportedLocale } from 'src/types/SupportedLocale';

import IntakesModal from '../intakes-modal/IntakesModal';

type Props = {
    program: Program;
};

const Row: FC<Props> = (props) => {
    const { program } = props;
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
        schedule,
        school,
        slug
    } = program;

    const { t } = useTranslation();
    const router = useRouter();
    const locale = router.locale as SupportedLocale;
    const [openIntakesModal, setOpenIntakesModal] = useState(false);

    const handleOpenIntakesModal = () => {
        setOpenIntakesModal(true);
    };

    const handleCloseIntakesModal = async () => {
        setOpenIntakesModal(false);
    };

    const handleClick = () => {
        if (program.intakes.split(',').length > 1) {
            return handleOpenIntakesModal();
        }
        console.log('Apply - to be implemented');
    };

    return (
        <>
            <IntakesModal
                handleClose={handleCloseIntakesModal}
                open={openIntakesModal}
                program={program}
            />
            <li className="hover:bg-gray-50 focus:bg-gray-50 flex items-center px-6 py-4 focus:outline-none transition duration-150 ease-in-out">
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
                                            {convertSecondsToUnit({
                                                unit: durationUnit as
                                                    | 'DAY'
                                                    | 'MONTH'
                                                    | 'YEAR'
                                                    | 'WEEK',
                                                value: duration
                                            })}{' '}
                                            {t(`programs:${durationUnit.toLowerCase()}`, {
                                                count: convertSecondsToUnit({
                                                    unit: durationUnit as
                                                        | 'DAY'
                                                        | 'MONTH'
                                                        | 'YEAR'
                                                        | 'WEEK',
                                                    value: duration
                                                })
                                            })}
                                            , {t(`programs:${schedule.toLowerCase()}`)}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="truncate text-sm leading-5">
                                            {city}, {t(`common:${getCountryLabel(country)}`)}
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
                                                {t(`programs:${feeUnit.toLowerCase()}`)}{' '}
                                                <b>
                                                    {currency({
                                                        currency: feeCurrency,
                                                        locale: locale,
                                                        value: fee
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
                <Button onClick={handleClick}>{t('programs:apply')}</Button>
            </li>
        </>
    );
};

export default Row;
