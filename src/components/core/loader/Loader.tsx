import { faSpinnerThird } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

type Props = {
    size?:
        | 'xs'
        | 'sm'
        | 'lg'
        | '1x'
        | '2x'
        | '3x'
        | '4x'
        | '5x'
        | '6x'
        | '7x'
        | '8x'
        | '9x'
        | '10x';
};

const Loader: FC<Props> = (props) => {
    const { size = 'lg' } = props;

    return (
        <div className="loader inline-flex items-center justify-center w-full h-full">
            <FontAwesomeIcon icon={faSpinnerThird} size={size} />
        </div>
    );
};

export default Loader;
