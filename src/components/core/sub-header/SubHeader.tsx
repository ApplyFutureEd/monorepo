import React, { FC, ReactNode } from 'react';

type Props = {
    actionComponents?: ReactNode;
    title: string;
    src: string;
    subtitleComponents?: ReactNode;
};

const SubHeader: FC<Props> = (props) => {
    const { actionComponents, title, src, subtitleComponents } = props;

    return (
        <div className="mb-6 bg-white rounded-b-lg shadow overflow-hidden">
            <div className="px-4 py-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center space-x-0 md:space-x-4">
                        <div className="hidden md:block">
                            <img alt="" className="w-16 h-16" src={src} />
                        </div>
                        <dl>
                            <div className="flex items-center space-x-4 md:space-x-0">
                                <div className="block flex-shrink-0 md:hidden">
                                    <img alt="" className="w-16 h-16" src={src} />
                                </div>
                                <dd className="text-gray-900 text-xl font-semibold leading-9">
                                    {title}
                                </dd>
                            </div>
                            {subtitleComponents && (
                                <dt className="inline-flex flex-col mt-2 text-gray-500 text-sm font-medium leading-5 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                                    {subtitleComponents}
                                </dt>
                            )}
                        </dl>
                    </div>
                    {actionComponents && (
                        <div className="flex mt-4 space-x-2 md:mt-0">{actionComponents}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
