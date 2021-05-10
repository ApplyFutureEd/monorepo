import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonApplicationRow: FC = () => {
    return (
        <li className="hover:bg-gray-50 focus:bg-gray-50 flex items-center px-6 py-4 focus:outline-none transition duration-150 ease-in-out">
            <div className="w-11/12">
                <div className="flex items-center w-full">
                    <div className="flex items-center w-1/2 space-x-4">
                        <Skeleton height="48px" width="48px" />
                        <div>
                            <div className="mb-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                    <div className="flex items-center mt-2 text-sm leading-5 space-x-2 sm:mt-0">
                                        <div>
                                            <Skeleton height="20px" width="240px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="max-w-sm text-sm leading-5">
                                    <Skeleton height="20px" width="160px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden items-center w-1/2 space-x-24 md:flex">
                        <div className="w-1/2">
                            <div className="flex items-center justify-between mb-2">
                                <div className="truncate text-sm leading-5">
                                    <Skeleton height="20px" width="160px" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="truncate text-sm leading-5">
                                    <Skeleton height="20px" width="120px" />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center justify-between mb-2">
                                <div className="truncate text-sm leading-5">
                                    <Skeleton height="20px" width="160px" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="truncate text-sm leading-5">
                                    <Skeleton height="20px" width="120px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end w-1/12">
                <Skeleton height="42px" width="78px" />
            </div>
        </li>
    );
};

export default SkeletonApplicationRow;
