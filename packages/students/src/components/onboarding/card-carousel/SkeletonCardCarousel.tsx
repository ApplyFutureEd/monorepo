import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

export const SkeletonCardCarousel: FC = () => {
    return (
        <div className="flex flex-none p-8 pb-16 max-w-sm">
            <button
                className="flex flex-col text-left bg-white rounded-2xl outline-none focus:outline-none hover:shadow-2xl shadow-xl"
                style={{ minHeight: '420px' }}>
                <div className="relative flex-1 pb-2 pt-12 px-6 space-y-3 md:px-8">
                    <div className="absolute top-0 inline-block rounded-xl shadow-lg transform -translate-y-1/2">
                        <Skeleton height="74px" width="74px" />
                    </div>
                    <h3 className="mb-1 text-gray-900 text-xl font-bold">
                        <Skeleton height="24px" width="240px" />
                        <Skeleton height="24px" width="160px" />
                    </h3>
                    <div className="flex flex-row items-center space-x-2">
                        <Skeleton height="24px" width="24px" />
                        <Skeleton height="20px" width="200px" />
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <Skeleton height="24px" width="24px" />
                        <Skeleton height="20px" width="200px" />
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <Skeleton height="24px" width="24px" />
                        <Skeleton height="20px" width="200px" />
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <Skeleton height="24px" width="24px" />
                        <Skeleton height="20px" width="200px" />
                    </div>
                </div>
                <div className="bg-gray-50 flex flex-row items-center px-6 py-3 rounded-bl-2xl rounded-br-2xl">
                    <Skeleton height="20px" width="140px" />
                </div>
            </button>
        </div>
    );
};

export default SkeletonCardCarousel;
