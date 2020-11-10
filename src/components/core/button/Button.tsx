import Loader from '@components/core/loader/Loader';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import React, { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger';
    loading?: boolean;
    disabled?: boolean;
    startIcon?: IconProp;
    endIcon?: IconProp;
    onClick?: () => void;
};

const Button: FC<Props> = (props) => {
    const {
        children,
        type = 'button',
        variant = 'primary',
        loading = false,
        disabled = false,
        startIcon,
        endIcon,
        onClick,
        ...rest
    } = props;

    const baseClasses =
        'font-sans items-center rounded-md border inline-flex text-base font-medium leading-6 px-4 py-2 duration-150 transition ease-in-out';
    const primaryClasses =
        'hover:bg-indigo-500 bg-indigo-600 active:bg-indigo-700 focus:border-indigo-700 border-transparent focus:shadow-outline-indigo focus:outline-none text-white';
    const secondaryClasses =
        'active:bg-gray-50 bg-white border-gray-300 focus:outline-none hover:text-gray-500 text-gray-700 active:text-gray-800';
    const dangerClasses =
        'hover:bg-red-500 bg-red-600 focus:border-red-700 border-transparent focus:shadow-outline-red focus:outline-none text-white';
    const disabledClasses = 'bg-indigo-100 border-transparent cursor-not-allowed text-gray-500';

    const classes = cx({
        [`${baseClasses}`]: true,
        [`${primaryClasses}`]: !disabled && variant === 'primary',
        [`${secondaryClasses}`]: !disabled && variant === 'secondary',
        [`${dangerClasses}`]: !disabled && variant === 'danger',
        [`${disabledClasses}`]: disabled
    });

    return (
        <span className="rounded-md shadow-sm inline-flex" {...rest}>
            <button type={type} disabled={disabled} className={classes} onClick={onClick}>
                {startIcon && (
                    <FontAwesomeIcon icon={startIcon} className={cx({ 'mr-2': children })} />
                )}
                {loading ? <Loader /> : <span>{children}</span>}
                {endIcon && <FontAwesomeIcon icon={endIcon} className={cx({ 'ml-2': children })} />}
            </button>
        </span>
    );
};

export default Button;
