import {
    faCheck,
    faClock,
    faEllipsisH,
    faExclamationTriangle
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

type Props = {
    status: string;
};

const StatusIcon: FC<Props> = (props) => {
    const { status } = props;

    if (status === 'IDLE') {
        return (
            <span className="timeline-icon flex items-center justify-center w-8 h-8 text-white bg-gray-400 rounded-full">
                <FontAwesomeIcon icon={faEllipsisH} />
            </span>
        );
    }

    if (status === 'PROGRESS') {
        return (
            <span className="timeline-icon flex items-center justify-center w-8 h-8 text-white bg-blue-400 rounded-full">
                <FontAwesomeIcon icon={faClock} />
            </span>
        );
    }

    if (status === 'DONE') {
        return (
            <span className="timeline-icon flex items-center justify-center w-8 h-8 text-white bg-green-400 rounded-full">
                <FontAwesomeIcon icon={faCheck} />
            </span>
        );
    }

    return (
        <span className="timeline-icon flex items-center justify-center w-8 h-8 text-white bg-red-400 rounded-full">
            <FontAwesomeIcon icon={faExclamationTriangle} />
        </span>
    );
};

export default StatusIcon;
