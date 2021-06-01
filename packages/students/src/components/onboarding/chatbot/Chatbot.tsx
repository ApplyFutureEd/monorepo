import React, { FC, ReactNode } from 'react';

type Props = {
    avatarUrl: string;
    children: ReactNode;
    name: string;
};

const Chatbot: FC<Props> = (props) => {
    const { avatarUrl, children, name } = props;

    return (
        <div className="relative flex pl-6 py-5 space-x-6">
            <div>
                <span className="relative inline-block">
                    <img alt="" className="w-16 h-16 rounded-full" src={avatarUrl} />
                    <span className="absolute bottom-0 right-0 block w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
                </span>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-gray-900 text-lg font-bold">{name}</p>
                <div className="mt-2">{children}</div>
            </div>
        </div>
    );
};

export default Chatbot;