import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const StatisticsSkeleton: FC = () => {
    return (
        <div>
            <Skeleton height={30} width={80} />
        </div>
    );
};

export default StatisticsSkeleton;
