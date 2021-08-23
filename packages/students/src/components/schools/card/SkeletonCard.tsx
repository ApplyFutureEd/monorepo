import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonCard: FC = () => {
    return (
        <div>
            <div className="h-full bg-white rounded-lg shadow overflow-hidden">
                <div className="flex items-center px-4 py-5 h-full space-x-4 sm:p-6">
                    <Skeleton height="64px" width="64px" />
                    <dl>
                        <dt className="text-gray-900 text-2xl font-semibold leading-9">
                            <Skeleton height="20px" width="240px" />
                            <Skeleton height="20px" width="160px" />
                        </dt>
                        <dd className="flex items-center mt-1 text-gray-500 text-sm font-medium leading-5 space-x-2 truncate">
                            <Skeleton height="20px" width="120px" />
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
