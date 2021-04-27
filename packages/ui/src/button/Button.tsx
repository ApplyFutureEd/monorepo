import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { forwardRef, ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';

import { Loader } from './../loader/Loader';

type Ref = HTMLButtonElement;

type Props = {
    /**
     * The content of the button.
     */
    children?: ReactNode;
    /**
     * If `true`, the button will be disabled.
     */
    disabled?: boolean;
    /**
     * Element placed after the children. Must be an FontAwesome icon.
     */
    endIcon?: IconProp;
    /**
     * If `true`, the button will display a skeleton.
     */
    isLoading?: boolean;
    /**
     * If `true`, the button will display a loader before the children.
     */
    isSubmitting?: boolean;
    /**
     * The function called on the `click` event.
     */
    onClick?: () => void;
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

export const Button = forwardRef<Ref, Props>((props, ref) => {
    const {
        children,
        disabled,
        endIcon,
        isLoading,
        isSubmitting,
        onClick,
        startIcon,
        type = 'button',
        variant = 'primary',
        ...rest
    } = props;

    const baseClasses =
        'min-h-button inline-flex items-center px-4 py-2 font-sans text-base font-medium leading-6 border rounded-md transition duration-150 ease-in-out';
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
        [`${disabledClasses}`]: disabled || isSubmitting
    });

    if (isLoading) {
        return (
            <div className="rounded-md">
                <Skeleton height="47px" width="120px" />
            </div>
        );
    }

    return (
        <span className="inline-flex rounded-md shadow-sm" {...rest}>
            <button
                ref={ref}
                className={classes}
                disabled={disabled || isSubmitting}
                type={type}
                onClick={onClick}>
                {!isSubmitting && startIcon && (
                    <FontAwesomeIcon
                        fixedWidth
                        className={cx({ 'mr-2': children })}
                        icon={startIcon}
                        size="sm"
                    />
                )}
                {isSubmitting ? (
                    <span className="flex items-center">
                        <Loader />
                        <span className="flex-shrink-0 ml-2">{children}</span>
                    </span>
                ) : (
                    <span>{children}</span>
                )}
                {endIcon && (
                    <FontAwesomeIcon
                        fixedWidth
                        className={cx({ 'ml-2': children })}
                        icon={endIcon}
                        size="sm"
                    />
                )}
            </button>
        </span>
    );
});
