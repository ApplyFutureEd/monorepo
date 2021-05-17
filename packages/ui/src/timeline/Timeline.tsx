import {
    GetApplicationByStudentQuery,
    GetApplicationQuery,
    onUpdateApplication
} from '@applyfuture/graphql';
import { ApplicationStep } from '@applyfuture/models';
import { SupportedLocale } from '@applyfuture/models/src/SupportedLocale';
import { date, useSubscription } from '@applyfuture/utils';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

import StatusIcon from './status-icon/StatusIcon';

export type TimelineConfig = {
    [stepId: string]: {
        [STATUS: string]: (
            application:
                | NonNullable<
                      NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
                  >[0]
                | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>,
            step: ApplicationStep
        ) => JSX.Element | null;
    };
};

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>
        | null
        | undefined;
    config: TimelineConfig;
};

export const Timeline: FC<Props> = (props) => {
    const { application, config } = props;
    console.log({ initialApplication: application });
    const router = useRouter();
    const locale = router.locale as SupportedLocale;
    const { t } = useTranslation();

    const [steps, setSteps] = useState(application?.steps);
    const [item] = useSubscription<any>({
        config: {
            key: 'onUpdateApplication',
            query: onUpdateApplication,
            variables: {
                id: application?.id
            }
        }
    });

    console.log({ currentSteps: steps });

    console.log({ nextApplication: item });

    useEffect(() => {
        if (item?.steps) {
            setSteps(item.steps);
        }
    }, [item]);

    return (
        <div className="clearfix">
            <ul className="-mb-8">
                <li>
                    {application &&
                        steps &&
                        steps
                            .filter((step) => {
                                if (
                                    step.id === 'fees-payment' &&
                                    application.program?.applicationFee &&
                                    application.program?.applicationFee < 0
                                ) {
                                    return false;
                                }
                                return true;
                            })
                            .map((step) => {
                                const isLastStep = step.id === 'visa';

                                return (
                                    <div key={step.id} className="relative pb-8">
                                        {!isLastStep && (
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
                                                <div className="max-w-xl">
                                                    <p className="text-gray-900 text-sm font-medium">
                                                        {t(step.timelineLabel)}
                                                    </p>
                                                    {config[step.id][step.status](
                                                        application,
                                                        step
                                                    )}
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
