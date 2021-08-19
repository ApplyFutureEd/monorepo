import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const TabsSkeleton: FC = () => {
    const baseClasses =
        'flex items-center px-1 py-4 text-gray-500 hover:text-gray-700 focus:text-gray-700 whitespace-nowrap text-sm font-medium leading-5 border-b-2 hover:border-gray-300 focus:border-gray-300 border-transparent focus:outline-none space-x-2';

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
