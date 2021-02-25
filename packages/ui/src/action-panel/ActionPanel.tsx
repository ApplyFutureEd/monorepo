import { FC, ReactNode } from 'react';

type Props = {
    actions: Array<ReactNode>;
    backgroundClass: string;
    description: string;
    title: string;
};

export const ActionPanel: FC<Props> = (props) => {
    const { actions, description, backgroundClass, title } = props;

    return (
        <div className={`bg-white rounded-md shadow ${backgroundClass}`}>
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-gray-900 text-lg font-medium leading-6">{title}</h3>
                <div className="mt-2 text-gray-500 text-sm">
                    <p>{description}</p>
                </div>
                <div className="mt-5 sm:flex sm:items-center">{actions}</div>
            </div>
        </div>
    );
};
