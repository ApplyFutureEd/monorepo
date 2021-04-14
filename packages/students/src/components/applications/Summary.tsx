import { GetApplicationQuery } from '@applyfuture/graphql';
import { SupportedLocale } from '@applyfuture/models';
import { Tooltip } from '@applyfuture/ui';
import { currency, date } from '@applyfuture/utils';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

type Props = {
    application: GetApplicationQuery['getApplication'];
    isLoading: boolean;
};

const Summary: FC<Props> = (props) => {
    const { application, isLoading } = props;
    const router = useRouter();
    const locale = router.locale as SupportedLocale;
    const { t } = useTranslation();

    return (
        <div className="inside hidden w-1/3 bg-white rounded-lg shadow overflow-hidden md:block">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-gray-900 text-lg font-medium leading-6">
                    {t('application:application-information')}
                </h3>
                <p className="mt-1 max-w-2xl text-gray-500 text-sm leading-5">
                    {t('application:summary-of-your-application')}
                </p>
            </div>
            <div className="mb-8 space-y-8">
                <div className="px-4 py-5 sm:p-0">
                    <dl>
                        <div className="bg-white sm:grid sm:gap-4 sm:grid-cols-3 sm:px-6 sm:py-5">
                            <dt className="text-gray-500 text-sm font-medium leading-5">
                                {t('application:school')}
                            </dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2 sm:mt-0">
                                {isLoading ? (
                                    <Skeleton height="20px" width="160px" />
                                ) : (
                                    application?.program?.school?.name
                                )}
                            </dd>
                        </div>
                        <div className="bg-gray-50 mt-8 sm:grid sm:gap-4 sm:grid-cols-3 sm:mt-0 sm:px-6 sm:py-5 sm:border-t sm:border-gray-200">
                            <dt className="text-gray-500 text-sm font-medium leading-5">
                                {t('application:program')}
                            </dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2 sm:mt-0">
                                {isLoading ? (
                                    <Skeleton height="20px" width="160px" />
                                ) : (
                                    application?.program?.name
                                )}
                            </dd>
                        </div>
                        <div className="mt-8 bg-white sm:grid sm:gap-4 sm:grid-cols-3 sm:mt-0 sm:px-6 sm:py-5 sm:border-t sm:border-gray-200">
                            <dt className="text-gray-500 text-sm font-medium leading-5">
                                {t('application:campus')}
                            </dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2 sm:mt-0">
                                {isLoading ? (
                                    <Skeleton height="20px" width="120px" />
                                ) : (
                                    application?.program?.city
                                )}
                            </dd>
                        </div>
                        <div className="bg-gray-50 mt-8 sm:grid sm:gap-4 sm:grid-cols-3 sm:mt-0 sm:px-6 sm:py-5 sm:border-t sm:border-gray-200">
                            <dt className="text-gray-500 text-sm font-medium leading-5">
                                {t('application:intake')}
                            </dt>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2 sm:mt-0">
                                {isLoading ? (
                                    <Skeleton height="20px" width="160px" />
                                ) : (
                                    date({
                                        scheme: 'LLLL y',
                                        value: application?.intake
                                    })
                                )}
                            </dd>
                        </div>
                        <div className="mt-8 bg-white sm:grid sm:gap-4 sm:grid-cols-3 sm:mt-0 sm:px-6 sm:py-5 sm:border-t sm:border-gray-200">
                            <Tooltip
                                content={`${t('application:requested-by', {
                                    school: application?.program?.school?.name as string
                                })}`}>
                                <dt className="text-gray-500 text-sm font-medium leading-5">
                                    {t('application:fee')}
                                </dt>
                            </Tooltip>
                            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-2 sm:mt-0">
                                {isLoading ? (
                                    <Skeleton height="20px" width="40px" />
                                ) : application?.program?.applicationFee &&
                                  application?.program?.applicationFee > 0 ? (
                                    currency({
                                        currency: application.program?.feeCurrency,
                                        locale: locale,
                                        value: application?.program?.applicationFee
                                    })
                                ) : (
                                    t('programs:free-of-charge')
                                )}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Summary;
