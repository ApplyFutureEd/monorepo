import { faStar } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import React, { FC } from 'react';

type Props = {
    willBeActive?: boolean;
    isActive?: boolean;
};

const Star: FC<Props> = (props) => {
    const { willBeActive, isActive } = props;

    const classes = cx({
        ['text-3xl px-1 cursor-pointer']: true,
        ['text-gray-300']: !(isActive || willBeActive),
        ['text-yellow-300']: isActive || willBeActive
    });

    return (
        <div className={classes}>
            <FontAwesomeIcon icon={faStar} />
        </div>
    );
};

export default Star;
