import { Tooltip } from './../tooltip/Tooltip';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { ChangeEvent, FC, ReactNode, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
    /**
     * Controls whether and how text input is automatically capitalized as it is entered/edited by the user.
     */
    autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    /**
     * Delay in milliseconds after which the value is updated and submitted.
     */
    debounce?: number;
    /**
     * If `true`, the component element will be disabled.
     */
    disabled?: boolean;
    /**
     * An object containing `onChange`, `onBlur`, `name`, and `value` of the field.
     *
     * https://formik.org/docs/api/useField#fieldinputpropsvalue
     */
    field: FieldInputProps<string>;
    /**
     * State, handlers, and helpers from the parent form.
     */
    form: FormikProps<any>;
    /**
     * If `true`, the component will display a loading skeleton.
     */
    isLoading?: boolean;
    /**
     * The label displayed above the input.
     */
    label?: string;
    /**
     * The maximum value accepted when input type is set to `number`.
     */
    max?: number;
    /**
     * An object that contains relevant computed metadata.
     *
     * https://formik.org/docs/api/useField#fieldmetapropsvalue
     */
    meta: FieldMetaProps<string>;
    /**
     * The minimum value accepted when input type is set to `number`.
     */
    min?: number;
    /**
     * If `true`, the input will display an `(optional)` mention next to the label.
     */
    optional?: boolean;
    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder?: string;
    /**
     * Number of rows to display when multiline option is set to `true`.
     */
    rows?: number;
    /**
     * The icon displayed inside the input before the typed value.
     */
    startIcon?: IconProp;
    /**
     * The step attribute specifies the interval between legal numbers
     */
    step?: number | string;
    /**
     * The tooltip displayed when hovering the label.
     */
    tooltip?: ReactNode;
    /**
     * The type to use.
     */
    type?: 'text' | 'number' | 'password';
};

export const Input: FC<Props> = (props) => {
    const {
        autoCapitalize = 'on',
        debounce,
        disabled = false,
        field,
        form,
        isLoading = false,
        label,
        max,
        meta,
        min,
        optional = false,
        placeholder = '',
        rows = 0,
        startIcon,
        step,
        tooltip,
        type = 'text',
        ...rest
    } = props;

    const { t } = useTranslation();
    const [debouncedValue, setDebouncedValue] = useState('');
    const debounced = useDebouncedCallback((value: string) => {
        form.setFieldValue(field.name, value);
        form.submitForm();
    }, debounce);

    const onError = Boolean(meta?.touched && meta?.error);
    const withStartIcon = Boolean(startIcon);
    const withDebounce = Boolean(debounce);

    const baseClasses = 'form-input block w-full text-sm leading-5 min-h-input';
    const disabledClasses = 'bg-gray-100 cursor-not-allowed';
    const onErrorClasses =
        'placeholder-red-300 pr-10 text-red-900 border-red-300 focus:border-red-300 focus:shadow-outline-red';
    const withLabelClasses = 'mt-1';
    const withStartIconClasses = 'pl-9';

    const classes = cx({
        [`${baseClasses}`]: true,
        [`${disabledClasses}`]: disabled,
        [`${onErrorClasses}`]: onError,
        [`${withStartIconClasses}`]: withStartIcon
    });

    if (isLoading) {
        return (
            <div>
                <div>
                    <Skeleton height="15px" width="120px" />
                </div>
                <div className="rounded-md">
                    <Skeleton height="47px" width="100%" />
                </div>
            </div>
        );
    }

    const onDebouncedChange = (
        event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { value } = event.target;
        setDebouncedValue(value);
        debounced.callback(value);
    };

    const value = withDebounce ? debouncedValue : field.value;
    const onChange = withDebounce ? onDebouncedChange : field.onChange;

    return (
        <label className="block font-sans" htmlFor={field.name} {...rest}>
            {label && (
                <Tooltip content={tooltip}>
                    <div>
                        <span className="text-gray-700 text-sm font-medium leading-5">{label}</span>
                        {optional && (
                            <span className="text-gray-500 text-xs"> - {t('common:optional')}</span>
                        )}
                    </div>
                </Tooltip>
            )}
            <div
                className={cx({
                    ['relative rounded-md shadow-sm']: true,
                    [`${withLabelClasses}`]: label
                })}>
                {startIcon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon
                            className="text-gray-700"
                            fixedWidth={true}
                            icon={startIcon}
                            size="1x"
                        />
                    </div>
                )}
                {rows ? (
                    <textarea
                        autoCapitalize={autoCapitalize}
                        className={classes}
                        disabled={disabled}
                        id={field.name}
                        name={field.name}
                        placeholder={placeholder}
                        rows={rows}
                        value={value}
                        onBlur={field.onBlur}
                        onChange={onChange}
                    />
                ) : (
                    <input
                        autoCapitalize={autoCapitalize}
                        className={classes}
                        disabled={disabled}
                        id={field.name}
                        max={max}
                        min={min}
                        name={field.name}
                        placeholder={placeholder}
                        step={step}
                        type={type}
                        value={value}
                        onBlur={field.onBlur}
                        onChange={onChange}
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
                <p className="mt-2 text-red-600 text-sm" id={`${field.name}-error`}>
                    {meta?.error}
                </p>
            )}
        </label>
    );
};
