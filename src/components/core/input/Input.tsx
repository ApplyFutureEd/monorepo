import Tooltip from '@components/core/tooltip/Tooltip';
import { faExclamationCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import React, { FC, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';

type Props = {
    autoCapitalize?: string;
    disabled?: boolean;
    errors: Record<string, FieldError>;
    isLoading?: boolean;
    label: string;
    max?: string | number;
    min?: string | number;
    name: string;
    optional?: boolean;
    placeholder?: string;
    step?: string | number;
    tooltip?: ReactNode;
    type?: string;
};

const Input: FC<Props> = (props) => {
    const {
        autoCapitalize = undefined,
        disabled = false,
        errors = {},
        isLoading = false,
        label = '',
        max,
        min,
        name,
        optional = false,
        placeholder = '',
        step,
        tooltip,
        type = 'text',
        ...rest
    } = props;

    const { t } = useTranslation(['common']);

    const baseClasses = 'form-input py-input-y block w-full sm:text-sm sm:leading-5"';
    const disabledClasses = 'bg-gray-100 cursor-not-allowed';
    const onErrorClasses =
        'placeholder-red-300 pr-10 text-red-900 border-red-300 focus:border-red-300 focus:shadow-outline-red';
    const onError = errors[name];

    const classes = cx({
        [`${baseClasses}`]: true,
        [`${disabledClasses}`]: disabled,
        [`${onErrorClasses}`]: onError
    });

    if (isLoading) {
        return (
            <div>
                <div className="block text-gray-700 text-sm font-medium leading-5">
                    <Skeleton height="16px" width="120px" />
                </div>
                <div className="relative rounded-md shadow-sm">
                    <Skeleton height="40px" width="100%" />
                </div>
            </div>
        );
    }

    return (
        <label className="font-sans" htmlFor={name} {...rest}>
            <Tooltip content={tooltip}>
                <div>
                    <span className="text-gray-700 text-sm font-medium leading-5">{label}</span>
                    {optional && (
                        <span className="text-gray-500 text-sm uppercase">
                            {' '}
                            - {t('common:optional')}
                        </span>
                    )}
                </div>
            </Tooltip>
            <div className="relative mt-1 rounded-md shadow-sm">
                <input
                    autoCapitalize={autoCapitalize}
                    className={classes}
                    disabled={disabled}
                    max={max}
                    min={min}
                    name={name}
                    placeholder={placeholder}
                    step={step}
                    type={type}
                />
                {onError && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FontAwesomeIcon
                            className="text-red-600"
                            fixedWidth={true}
                            icon={faExclamationCircle}
                            size="1x"
                        />
                    </div>
                )}
            </div>
            {onError && <p className="mt-2 text-red-600 text-sm">{errors[name].message}</p>}
        </label>
    );
};

export default Input;
