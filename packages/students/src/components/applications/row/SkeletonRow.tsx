import cx from 'classnames';
import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

type Props = {
    index: number;
};

const SkeletonRow: FC<Props> = (props) => {
    const { index } = props;

    const baseClasses =
        'sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5';

    const classes = cx({
        [`${baseClasses}`]: true,
        ['bg-gray-50']: !(index % 2),
        ['bg-white']: index % 2,
        ['mt-2']: index === 0,
        ['mt-8']: !(index === 0)
    });

    return (
        <div className={classes}>
            <dt className="text-gray-600 text-sm font-medium leading-5">
                <div>
                    <Skeleton height="16px" width="120px" />
                </div>
            </dt>
            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-1 sm:mt-0">
                <div className="mb-2 space-y-8">
                    <Skeleton height="40px" width="100%" />
                </div>
            </dd>
        </div>
    );
};

export default SkeletonRow;
