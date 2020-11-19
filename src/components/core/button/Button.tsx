import Loader from '@components/core/loader/Loader';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';

type Props = {
    /**
     * The content of the button.
     */
    children: ReactNode;
    /**
     * If `true`, the button will be disabled.
     */
    disabled?: boolean;
    /**
     * Element placed after the children. Must be an FontAwesome icon.
     */
    endIcon?: IconProp;
    /**
     * If `true`, the button will display a loader before the children.
     */
    isLoading?: boolean;
    /**
     * Element placed before the children. Must be an FontAwesome icon.
     */
    startIcon?: IconProp;
    /**
     * The type to use.
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * The variant to use.
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
};

const Button: FC<Props> = (props) => {
    const {
        children,
        disabled = false,
        endIcon,
        isLoading = false,
        startIcon,
        type = 'button',
        variant = 'primary',
        ...rest
    } = props;

    const baseClasses =
        'inline-flex items-center px-4 py-2 font-sans text-base font-medium leading-6 border rounded-md transition duration-150 ease-in-out';
    const primaryClasses =
        'text-white hover:bg-indigo-500 bg-indigo-600 active:bg-indigo-700 focus:border-indigo-700 border-transparent focus:outline-none focus:shadow-outline-indigo';
    const secondaryClasses =
        'hover:text-gray-500 text-gray-700 active:text-gray-800 active:bg-gray-50 bg-white border-gray-300 focus:outline-none';
    const successClasses =
        'text-white bg-green-400 focus:border-green-700 border-transparent focus:outline-none focus:shadow-outline-green cursor-default';
    const dangerClasses =
        'text-white hover:bg-red-500 bg-red-600 focus:border-red-700 border-transparent focus:outline-none focus:shadow-outline-red';
    const disabledClasses = 'text-gray-500 bg-indigo-100 border-transparent cursor-not-allowed';

    const classes = cx({
        [`${baseClasses}`]: true,
        [`${primaryClasses}`]: !disabled && variant === 'primary',
        [`${secondaryClasses}`]: !disabled && variant === 'secondary',
        [`${successClasses}`]: !disabled && variant === 'success',
        [`${dangerClasses}`]: !disabled && variant === 'danger',
        [`${disabledClasses}`]: disabled
    });

    return (
        <span className="inline-flex rounded-md shadow-sm" {...rest}>
            <button className={classes} disabled={disabled} type={type}>
                {startIcon && (
                    <FontAwesomeIcon className={cx({ 'mr-2': children })} icon={startIcon} />
                )}
                {isLoading ? (
                    <span className="flex items-center">
                        <Loader />
                        <span className="ml-2">{children}</span>
                    </span>
                ) : (
                    <span>{children}</span>
                )}
                {endIcon && <FontAwesomeIcon className={cx({ 'ml-2': children })} icon={endIcon} />}
            </button>
        </span>
    );
};

Button.propTypes = {
    /**
     * The content of the button.
     */
    children: PropTypes.node.isRequired,
    /**
     * If `true`, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Element placed after the children. Must be an FontAwesome icon.
     */
    endIcon: PropTypes.any,
    /**
     * If `true`, the button will display a loader before the children.
     */
    isLoading: PropTypes.bool,
    /**
     * Element placed before the children. Must be an FontAwesome icon.
     */
    startIcon: PropTypes.any,
    /**
     * The type to use.
     */
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger'])
};

export default Button;
