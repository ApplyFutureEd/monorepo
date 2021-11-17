import { FC } from 'react';

const NoResult: FC = () => {
    return (
        <div className="sm:px-6 sm:py-5">
            <div className="bg-white">
                <div className="mx-auto px-4 py-12 max-w-screen-xl text-center sm:px-6 lg:px-32 lg:py-16">
                    <h2 className="text-gray-900 text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10">
                        No results
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default NoResult;
