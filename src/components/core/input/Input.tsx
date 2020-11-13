import Tooltip from '@components/core/tooltip/Tooltip';
import { faExclamationCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { FieldInputProps, FieldMetaProps } from 'formik';
import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';

type Props = {
    autoCapitalize?: string;
    disabled?: boolean;
    field?: FieldInputProps<string>;
    isLoading?: boolean;
    label: string;
    max?: string | number;
    meta?: FieldMetaProps<string>;
    min?: string | number;
    optional?: boolean;
    placeholder?: string;
    rows?: number;
    step?: string | number;
    tooltip?: ReactNode;
    type?: string;
};

const Input: FC<Props> = (props) => {
    const {
        autoCapitalize = undefined,
        disabled = false,
        field,
        isLoading = false,
        label,
        max,
        meta,
        min,
        optional = false,
        placeholder = '',
        rows = 0,
        step,
        tooltip,
        type = 'text',
        ...rest
    } = props;

    const { t } = useTranslation(['common']);
    const onError = Boolean(meta?.touched && meta?.error);

    const baseClasses = 'form-input block w-full sm:text-sm sm:leading-5"';
    const disabledClasses = 'bg-gray-100 cursor-not-allowed';
    const onErrorClasses =
        'placeholder-red-300 pr-10 text-red-900 border-red-300 focus:border-red-300 focus:shadow-outline-red';

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
        <label className="font-sans" htmlFor={field?.name} {...rest}>
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
                {rows ? (
                    <textarea
                        autoCapitalize={autoCapitalize}
                        className={classes}
                        disabled={disabled}
                        id={field?.name}
                        placeholder={placeholder}
                        rows={rows}
                        onBlur={field?.onBlur}
                        onChange={field?.onChange}
                    />
                ) : (
                    <input
                        autoCapitalize={autoCapitalize}
                        className={classes}
                        disabled={disabled}
                        id={field?.name}
                        max={max}
                        min={min}
                        placeholder={placeholder}
                        step={step}
                        type={type}
                        onBlur={field?.onBlur}
                        onChange={field?.onChange}
                    />
                )}
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
            {onError && (
                <p className="mt-2 text-red-600 text-sm" id={`${field?.name}-error`}>
                    {meta?.error}
                </p>
            )}
        </label>
    );
};

export default Input;
