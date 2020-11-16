import { faSpinnerThird } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { FC } from 'react';

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

Loader.propTypes = {
    size: PropTypes.oneOf([
        'xs',
        'sm',
        'lg',
        '1x',
        '2x',
        '3x',
        '4x',
        '5x',
        '6x',
        '7x',
        '8x',
        '9x',
        '10x'
    ])
};

export default Loader;
