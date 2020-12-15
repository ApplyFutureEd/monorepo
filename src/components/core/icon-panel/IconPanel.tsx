import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, ReactNode } from 'react';

type Props = {
    icon: IconProp;
    label: string;
    children: ReactNode;
    isLoading?: boolean;
};

const KPI: FC<Props> = (props) => {
    const { icon, label, children } = props;

    return (
        <div className="flex items-center p-3 space-x-3">
            <div className="flex items-center justify-center text-indigo-500 text-2xl rounded-md">
                <FontAwesomeIcon fixedWidth icon={icon} />
            </div>

            <dl>
                <dt className="text-gray-500 whitespace-pre-wrap text-xs font-medium">{label}</dt>

                <dd className="text-normal text-gray-900 whitespace-pre-wrap font-semibold">
                    {children}
                </dd>
            </dl>
        </div>
    );
};

export default KPI;
