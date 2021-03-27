import {
    GetProgramBySchoolQuery,
    GetStudentByEmailQuery,
    SearchProgramsQuery
} from '@applyfuture/graphql';
import { Button } from '@applyfuture/ui';
import {
    convertSecondsToUnit,
    currency,
    date,
    getCountryLabel,
    useAuthenticatedUser
} from '@applyfuture/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';
import { SupportedLocale } from 'src/types/SupportedLocale';

import IntakesModal from '../intakes-modal/IntakesModal';

type Props = {
    program:
        | NonNullable<NonNullable<SearchProgramsQuery['searchPrograms']>['items']>[0]
        | NonNullable<NonNullable<GetProgramBySchoolQuery['getProgramBySchool']>['items']>[0];
    student:
        | NonNullable<NonNullable<GetStudentByEmailQuery['getStudentByEmail']>['items']>[0]
        | null
        | undefined;
};

const Row: FC<Props> = (props) => {
    const { program, student } = props;

    const { t } = useTranslation();
    const { user } = useAuthenticatedUser();
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
        if (program?.intakes && program?.intakes?.split(',').length > 1) {
            return handleOpenIntakesModal();
        }
        console.log('Apply - to be implemented');
    };

    const renderMainActionButton = () => {
        if (!user) {
            return (
                <Link href={`/sign-in?from=${router.asPath}`}>
                    <Button type="button" variant="primary">
                        {t('programs:apply')}
                    </Button>
                </Link>
            );
        }

        return (
            <Button type="button" variant="primary" onClick={handleClick}>
                {t('programs:apply')}
            </Button>
        );
    };

    return (
        <>
            {student && (
                <IntakesModal
                    handleClose={handleCloseIntakesModal}
                    open={openIntakesModal}
                    program={program}
                    student={student}
                />
            )}
            <li className="hover:bg-gray-50 focus:bg-gray-50 flex items-center px-6 py-4 focus:outline-none transition duration-150 ease-in-out">
                <Link href={`/programs/${program?.slug}`}>
                    <div className="w-11/12 cursor-pointer">
                        <div className="flex items-center w-full">
                            <div className="flex items-center w-full space-x-4 md:w-1/2">
                                <img
                                    alt={`${program?.school?.name} logo`}
                                    className="w-12 h-12"
                                    src={`${process.env.ASSETS_CDN_URL}/${program?.school?.logo}`}
                                />
                                <div>
                                    <div className="mb-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <div className="flex items-center mt-2 text-sm leading-5 space-x-2 sm:mt-0">
                                                <div>{program?.school?.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm leading-5">
                                            <b>{program?.name}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex md:items-center md:w-1/2 md:space-x-24">
                                <div className="w-1/2">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="truncate text-sm leading-5">
                                            {convertSecondsToUnit({
                                                unit: program?.durationUnit as
                                                    | 'DAY'
                                                    | 'MONTH'
                                                    | 'YEAR'
                                                    | 'WEEK',
                                                value: program?.duration
                                            })}{' '}
                                            {t(`programs:${program?.durationUnit.toLowerCase()}`, {
                                                count: convertSecondsToUnit({
                                                    unit: program?.durationUnit as
                                                        | 'DAY'
                                                        | 'MONTH'
                                                        | 'YEAR'
                                                        | 'WEEK',
                                                    value: program?.duration
                                                })
                                            })}
                                            , {t(`programs:${program?.schedule.toLowerCase()}`)}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="truncate text-sm leading-5">
                                            {program?.city},{' '}
                                            {t(`common:${getCountryLabel(program?.country)}`)}
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
                                                        value: program?.intakes.split(',')[0]
                                                    })}
                                                </b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="truncate text-sm leading-5">
                                            <div>
                                                {t(`programs:${program?.feeUnit.toLowerCase()}`)}{' '}
                                                <b>
                                                    {currency({
                                                        currency: program?.feeCurrency,
                                                        locale: locale,
                                                        value: program?.fee
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
                {renderMainActionButton()}
            </li>
        </>
    );
};

export default Row;
