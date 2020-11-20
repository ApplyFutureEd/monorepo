import Tooltip from '@components/core/tooltip/Tooltip';
import cx from 'classnames';
import { FieldInputProps, FieldMetaProps } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import ReactSelect, { ValueType } from 'react-select';

type Props = {
    /**
     * If `true`, the `input` element will be disabled.
     */
    disabled?: boolean;
    /**
     * An object containing `onChange`, `onBlur`, `name`, and `value` of the field.
     *
     * https://formik.org/docs/api/useField#fieldinputpropsvalue
     */
    field: FieldInputProps<string>;
    /**
     * If `true`, the component will display a loading skeleton.
     */
    isLoading?: boolean;
    /**
     * If `true`, the component will support multiple selected options.
     */
    isMulti?: boolean;
    /**
     * The label displayed above the input.
     */
    label: string;
    /**
     * An object that contains relevant computed metadata.
     *
     * https://formik.org/docs/api/useField#fieldmetapropsvalue
     */
    meta: FieldMetaProps<string>;
    /**
     * Array of options that populate the select menu
     */
    options: Array<{ value: string; label: string }>;
    /**
     * If `true`, the input will display an `(optional)` mention next to the label.
     */
    optional?: boolean;
    /**
     * Set the value of a field imperatively.
     *
     * https://formik.org/docs/api/formik#setfieldvalue-field-string-value-any-shouldvalidate-boolean--void
     */
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
    /**
     * The tooltip displayed when hovering the label.
     */
    tooltip?: string;
};

const Select: FC<Props> = (props) => {
    const {
        disabled,
        field,
        isLoading = false,
        isMulti = false,
        label,
        meta,
        options,
        optional,
        setFieldValue,
        tooltip = '',
        ...rest
    } = props;

    const { t } = useTranslation(['common']);
    const onError = Boolean(meta?.touched && meta?.error);

    const baseClasses = 'block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5';
    const disabledClasses = 'bg-gray-100 cursor-not-allowed';
    const onErrorClasses =
        'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red';

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

    let value: ValueType<any> = options.find((option) => option.value === field.value);
    let onChange = (option: ValueType<any>) => {
        return setFieldValue(field.name, option.value);
    };

    if (isMulti) {
        value = options.filter((option) => field.value.includes(option.value));
        onChange = (options: ValueType<any>) => {
            if (!options) {
                return setFieldValue(field.name, ['']);
            }
            return setFieldValue(
                field.name,
                options.map((option: any) => option.value)
            );
        };
    }

    return (
        <label className="block font-sans" htmlFor={field.name} {...rest}>
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

            <div className="mt-1">
                <div className="rounded-md shadow-sm">
                    <ReactSelect
                        className={classes}
                        inputId={field.name}
                        isMulti={isMulti}
                        name={field.name}
                        options={options}
                        placeholder=""
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </div>
            {onError && (
                <p className="mt-2 text-red-600 text-sm" id={`${field.name}-error`}>
                    {meta?.error}
                </p>
            )}
        </label>
    );
};

export default Select;
