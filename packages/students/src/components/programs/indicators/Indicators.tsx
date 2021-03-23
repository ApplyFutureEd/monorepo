import { Program } from '@applyfuture/models';
import { IconPanel, Tooltip } from '@applyfuture/ui';
import {
    convertSecondsToUnit,
    currency,
    date,
    getDurationUnitLabel,
    getFeeUnitLabel,
    getLanguageLabel,
    getScheduleLabel
} from '@applyfuture/utils';
import {
    faCalendar,
    faClock,
    faGlobe,
    faGraduationCap,
    faMoneyBill
} from '@fortawesome/pro-light-svg-icons';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import { SupportedLocale } from 'src/types/SupportedLocale';

type Props = {
    program: Program;
};

const Indicators: FC<Props> = (props) => {
    const { program } = props;

    const { t } = useTranslation();
    const router = useRouter();
    const locale = router.locale as SupportedLocale;

    return (
        <div className="bg-white rounded-md shadow">
            <div className="grid grid-cols-1 bg-white rounded-lg lg:grid-cols-6">
                <div>
                    <IconPanel
                        icon={faClock}
                        label={t(`programs:${getScheduleLabel(program?.schedule)}`)}>
                        {convertSecondsToUnit({
                            unit: program?.durationUnit as 'DAY' | 'MONTH' | 'YEAR' | 'WEEK',
                            value: program?.duration
                        })}{' '}
                        {t(`programs:${getDurationUnitLabel(program?.durationUnit)}`, {
                            count: convertSecondsToUnit({
                                unit: program?.durationUnit as 'DAY' | 'MONTH' | 'YEAR' | 'WEEK',
                                value: program?.duration
                            })
                        })}
                    </IconPanel>
                </div>
                <div className="border-t border-gray-200 md:border-0 md:border-l">
                    <IconPanel
                        icon={faGraduationCap}
                        label={t(`programs:${getFeeUnitLabel(program?.feeUnit)}`)}>
                        {currency({
                            currency: program?.feeCurrency,
                            locale: locale,
                            value: program?.fee
                        })}
                    </IconPanel>
                </div>
                <div className="border-t border-gray-200 md:border-0 md:border-l">
                    <IconPanel
                        icon={faGlobe}
                        label={t('programs:language', {
                            count: program?.languages?.length
                        })}>
                        {program?.languages?.length > 1 ? (
                            <Tooltip
                                content={program?.languages?.map((language: string) => (
                                    <div key={language}>
                                        {t(`common:${getLanguageLabel(language)}`)}
                                    </div>
                                ))}>
                                {t('programs:multilingual')}
                            </Tooltip>
                        ) : (
                            t(`common:${getLanguageLabel(program?.languages[0])}`)
                        )}
                    </IconPanel>
                </div>
                <div className="border-t border-gray-200 md:border-0 md:border-l">
                    <IconPanel icon={faCalendar} label={t('programs:next-intake', { count: 1 })}>
                        {date({ locale: locale, value: program?.intakes.split(',')[0] })}
                    </IconPanel>
                </div>
                <div className="border-t border-gray-200 md:border-0 md:border-l">
                    <IconPanel icon={faCalendar} label={t('programs:submission-deadline')}>
                        {date({ locale: locale, value: program?.submissionDeadline })}
                    </IconPanel>
                </div>
                <div className="border-t border-gray-200 md:border-0 md:border-l">
                    <IconPanel icon={faMoneyBill} label={t('programs:cost-of-living')}>
                        <Tooltip
                            content={
                                <div>
                                    {t('programs:cost-of-living-tooltip', {
                                        currency: t(
                                            `common:${program?.costOfLivingCurrency.toLowerCase()}`
                                        )
                                    })}
                                </div>
                            }>
                            {currency({
                                currency: program?.costOfLivingCurrency,
                                locale: locale,
                                value: program?.costOfLiving
                            })}
                        </Tooltip>
                    </IconPanel>
                </div>
            </div>
        </div>
    );
};

export default Indicators;
