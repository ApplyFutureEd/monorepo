import { GetApplicationByStudentQuery } from '@applyfuture/graphql';
import { date } from '@applyfuture/utils';
import StatusIcon from '@components/applications/timeline/status-icon/StatusIcon';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import { SupportedLocale } from 'src/types/SupportedLocale';

type Props = {
    application: NonNullable<
        NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
    >[0];
};

const Timeline: FC<Props> = (props) => {
    const { application } = props;
    const router = useRouter();
    const locale = router.locale as SupportedLocale;
    const { t } = useTranslation();

    return (
        <div className="clearfix">
            <ul className="-mb-8">
                <li>
                    {application?.steps.map((step, index) => {
                        const isLastEvent = index + 1 === application?.steps.length;
                        return (
                            <div key={step.id} className="relative pb-8">
                                {!isLastEvent && (
                                    <span
                                        aria-hidden="true"
                                        className="left-1 top-1 w-0.5 absolute -ml-px h-full bg-gray-200"
                                    />
                                )}
                                <div className="relative flex space-x-3">
                                    <div>
                                        <StatusIcon status={step.status} />
                                    </div>
                                    <div className="pt-1.5 flex flex-1 justify-between min-w-0 space-x-4">
                                        <div>
                                            <p className="text-gray-900 text-sm font-medium">
                                                {t(step.label)}
                                            </p>
                                        </div>
                                        <div className="whitespace-nowrap text-right text-gray-500 text-sm">
                                            <time dateTime={step.date}>
                                                {date({
                                                    locale: locale,
                                                    scheme: 'd MMMM y',
                                                    value: step.date
                                                })}
                                            </time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </li>
            </ul>
        </div>
    );
};

export default Timeline;
