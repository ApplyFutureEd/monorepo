import Skeleton from 'react-loading-skeleton';

const SkeletonRow = () => (
    <li className="flex items-center px-6 py-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition duration-150 ease-in-out">
        <div className="w-11/12">
            <div className="flex items-center w-full">
                <div className="flex items-center w-1/2 space-x-4">
                    <Skeleton height="48px" width="48px" />
                    <div>
                        <div className="mb-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                                <div className="flex items-center mt-2 text-sm leading-5 sm:mt-0">
                                    <div className="hidden md:block">
                                        <Skeleton height="20px" width="240px" />
                                    </div>
                                    <div className="block md:hidden">
                                        <Skeleton height="20px" width="160px" />
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

export default SkeletonRow;
