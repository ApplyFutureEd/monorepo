import { isObjectValuesEmpty } from '@applyfuture/utils';
import { Translation } from '@pages/index';
import { FC } from 'react';

import StatisticsSkeleton from './StatisticsSkeleton';

type Props = {
    isLoading: boolean;
    translations: Translation[];
};

const Statistics: FC<Props> = (props) => {
    const { isLoading, translations } = props;

    const uncompleteTranslations = translations.reduce(
        (accumulator: Translation[], value: Translation) => {
            if (isObjectValuesEmpty(value.values)) {
                accumulator.push(value);
            }
            return accumulator;
        },
        []
    );
    const completeTranslations = translations.length - uncompleteTranslations.length;
    const completeTranslationsPercentage = Math.floor(
        (completeTranslations * 100) / translations.length
    );

    return (
        <div>
            <div className="pt-8 bg-white border-b border-gray-200 sm:pt-0">
                <div className="pb-12 bg-white sm:pb-0">
                    <div className="relative">
                        <div className="white absolute inset-0 h-1/2" />
                        <div className="relative mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-5xl">
                                <dl className="bg-white rounded-lg sm:grid sm:grid-cols-4">
                                    <div className="flex flex-col p-4 text-center border-b border-gray-100 sm:border-0">
                                        <dt className="order-2 mt-1 text-gray-500 font-sans text-sm font-medium leading-5">
                                            Translations
                                        </dt>
                                        <dd className="order-1 text-indigo-600 text-3xl font-extrabold">
                                            {isLoading ? (
                                                <StatisticsSkeleton />
                                            ) : (
                                                translations.length
                                            )}
                                        </dd>
                                    </div>

                                    <div className="flex flex-col p-4 text-center border-b border-t border-gray-100 sm:border-0">
                                        <dt className="order-2 mt-1 text-gray-500 font-sans text-sm font-medium leading-5">
                                            Complete
                                        </dt>
                                        <dd className="order-1 text-indigo-600 text-3xl font-extrabold">
                                            {isLoading ? (
                                                <StatisticsSkeleton />
                                            ) : (
                                                completeTranslations
                                            )}
                                        </dd>
                                    </div>

                                    <div className="flex flex-col p-4 text-center border-t border-gray-100 sm:border-0">
                                        <dt className="order-2 mt-1 text-gray-500 font-sans text-sm font-medium leading-5">
                                            Uncomplete
                                        </dt>
                                        <dd className="order-1 text-indigo-600 text-3xl font-extrabold">
                                            {isLoading ? (
                                                <StatisticsSkeleton />
                                            ) : (
                                                uncompleteTranslations.length
                                            )}
                                        </dd>
                                    </div>

                                    <div className="flex flex-col p-4 text-center border-t border-gray-100 sm:border-0">
                                        <dt className="order-2 mt-1 text-gray-500 font-sans text-sm font-medium leading-5">
                                            Completion
                                        </dt>
                                        <dd className="order-1 text-indigo-600 text-3xl font-extrabold">
                                            {isLoading ? (
                                                <StatisticsSkeleton />
                                            ) : isNaN(completeTranslationsPercentage) ? (
                                                '0 %'
                                            ) : (
                                                `${completeTranslationsPercentage} %`
                                            )}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
