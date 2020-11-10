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
        | '10x'
        | undefined;
};

const Loader: FC<Props> = (props) => {
    const { size = 'lg' } = props;
    return (
        <div className="loader items-center inline-flex h-full justify-center w-full">
            <FontAwesomeIcon icon={faSpinnerThird} size={size} />
        </div>
    );
};

export default Loader;
