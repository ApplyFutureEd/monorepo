import useTranslation from 'next-translate/useTranslation';
import React, { FC, ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';

type Props = {
    children: ReactNode;
    description?: ReactNode;
    headerComponent?: ReactNode;
    isLoading?: boolean;
    optional?: boolean;
    title: string;
};

export const Section: FC<Props> = (props) => {
    const { children, description, headerComponent, isLoading, optional, title } = props;
    const { t } = useTranslation();

    return (
        <div className="shadow sm:rounded-lg">
            {headerComponent}
            <div className="px-4 py-5 bg-white sm:p-6 sm:rounded-lg">
                <div className="md:grid md:gap-6 md:grid-cols-3">
                    <div className="md:col-span-1">
                        <h3 className="flex justify-center text-gray-900 text-lg font-medium leading-6 sm:block">
                            {isLoading ? (
                                <Skeleton height="24px" width="160px" />
                            ) : (
                                <div className="flex items-baseline">
                                    <div>{title}</div>
                                    {optional && (
                                        <span className="ml-2 text-gray-500 text-xs">
                                            - {t('common:optional')}
                                        </span>
                                    )}
                                </div>
                            )}
                        </h3>
                        {description && (
                            <div className="flex justify-center mt-1 text-center text-gray-500 text-sm leading-5 sm:block sm:text-left">
                                {isLoading ? (
                                    <Skeleton height="20divx" width="240px" />
                                ) : (
                                    description
                                )}
                            </div>
                        )}
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">{children}</div>
                </div>
            </div>
        </div>
    );
};
