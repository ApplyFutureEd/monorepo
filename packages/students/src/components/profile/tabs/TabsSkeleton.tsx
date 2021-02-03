import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const TabsSkeleton: FC = () => {
    const baseClasses =
        'flex items-center space-x-2 whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300';

    return (
        <nav className="flex -mb-px space-x-8">
            <div className={baseClasses}>
                <Skeleton height="20px" width="140px" />
            </div>
            <div className={baseClasses}>
                <Skeleton height="20px" width="140px" />
            </div>
            <div className={baseClasses}>
                <Skeleton height="20px" width="140px" />
            </div>
            <div className={baseClasses}>
                <Skeleton height="20px" width="140px" />
            </div>
            <div className={baseClasses}>
                <Skeleton height="20px" width="140px" />
            </div>
        </nav>
    );
};

export default TabsSkeleton;
