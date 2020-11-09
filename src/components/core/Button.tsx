import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import React, { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    type: 'button' | 'submit' | 'reset';
    variant: 'primary' | 'secondary' | 'danger';
    loading?: boolean;
    disabled?: boolean;
    icon?: IconProp;
    iconPosition?: 'prepend' | 'append';
    onClick?: () => void;
};

const Button: FC<Props> = (props) => {
    const {
        children,
        type = 'button',
        variant = 'primary',
        loading = false,
        disabled = false,
        icon,
        iconPosition = 'prepend',
        onClick,
        ...rest
    } = props;

    const baseClasses =
        'inline-flex items-center px-4 py-2 border text-base leading-6 font-medium rounded-md transition ease-in-out duration-150';
    const primaryClasses =
        'border-transparent text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700';
    const secondaryClasses =
        'border-gray-300 text-gray-700 bg-white hover:text-gray-500 focus:outline-none active:text-gray-800 active:bg-gray-50';
    const dangerClasses =
        'border-transparent text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red';
    const disabledClasses = 'border-transparent text-gray-500 bg-indigo-100 cursor-not-allowed';

    const classes = cx({
        [`${baseClasses}`]: true,
        [`${primaryClasses}`]: !disabled && variant === 'primary',
        [`${secondaryClasses}`]: !disabled && variant === 'secondary',
        [`${dangerClasses}`]: !disabled && variant === 'danger',
        [`${disabledClasses}`]: disabled
    });

    return (
        <span className="inline-flex rounded-md shadow-sm" {...rest}>
            <button type={type} disabled={disabled} className={classes} onClick={onClick}>
                {iconPosition === 'prepend' && icon && (
                    <FontAwesomeIcon icon={icon} className={cx({ 'mr-2': children })} />
                )}
                {loading ? '...' : children}
                {iconPosition === 'append' && icon && (
                    <FontAwesomeIcon icon={icon} className={cx({ 'ml-2': children })} />
                )}
            </button>
        </span>
    );
};

export default Button;
