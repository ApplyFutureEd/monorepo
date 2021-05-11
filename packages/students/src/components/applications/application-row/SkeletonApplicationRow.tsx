import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonApplicationRow: FC = () => {
    return (
        <div>
            <button className="hover:bg-gray-50 focus:bg-gray-50 block w-full focus:outline-none cursor-pointer transition duration-150 ease-in-out">
                <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="flex flex-1 items-center min-w-0">
                        <div className="flex-shrink-0">
                            <Skeleton height="48px" width="48px" />
                        </div>
                        <div className="flex-1 px-4 min-w-0 md:grid md:gap-16 md:grid-cols-2">
                            <div>
                                <div className="hidden text-left text-gray-900 hover:text-indigo-500 text-sm font-bold leading-5 sm:block">
                                    <Skeleton height="20px" width="336px" />
                                </div>
                                <div className="flex items-center mt-2 text-left text-gray-500 text-sm leading-5">
                                    <span>
                                        <div className="flex flex-col hover:text-indigo-500 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                                            <div className="flex items-baseline space-x-1">
                                                <Skeleton height="20px" width="160px" />
                                            </div>
                                            <div className="flex items-baseline space-x-1">
                                                <Skeleton height="20px" width="160px" />
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="text-left text-gray-900 text-sm leading-5">
                                    <Skeleton height="20px" width="160px" />
                                </div>
                                <div className="mt-2 text-left text-gray-900 text-sm leading-5">
                                    <Skeleton height="20px" width="160px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Skeleton height="24px" width="24px" />
                    </div>
                </div>
            </button>
        </div>
    );
};

export default SkeletonApplicationRow;
