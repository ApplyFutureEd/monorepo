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

    const customStyles = {
        clearIndicator: (provided: any) => ({ ...provided, padding: 0 }),
        control: (provided: any, state: any) => {
            console.log(state);
            const appearance = 'none';
            const backgroundColor = state.selectProps.isDisabled
                ? 'rgba(243, 244, 246)'
                : '#ffffff';
            const borderColor = state.selectProps.onError ? 'rgba(252, 165, 165)' : '#d2d6dc';
            const borderRadius = '0.375rem';
            const borderWidth = '1px';
            const boxShadow = state.selectProps.onError
                ? '0 0 0 3px rgba(248, 180, 180, 0.45)'
                : provided.boxShadow;
            const fontSize = '0.875rem';
            const minHeight = 'auto';
            const outline = 'none';
            const padding = '0.5rem 0.75rem';

            return {
                ...provided,
                '&:focus': {
                    borderColor,
                    boxShadow,
                    outline
                },
                '&:hover': {
                    borderColor,
                    boxShadow,
                    outline
                },
                appearance,
                backgroundColor,
                borderColor,
                borderRadius,
                borderWidth,
                fontSize,
                minHeight,
                outline,
                padding
            };
        },
        dropdownIndicator: (provided: any) => ({ ...provided, padding: 0 }),
        indicatorSeparator: (provided: any) => ({ ...provided, display: 'none' }),
        multiValue: (provided: any) => ({ ...provided, fontSize: '0.875rem' }),
        multiValueLabel: (provided: any) => ({ ...provided, padding: 0 }),
        singleValue: (provided: any) => ({ ...provided, fontSize: '0.875rem' }),
        valueContainer: (provided: any) => ({ ...provided, padding: 0 })
    };

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
                        inputId={field.name}
                        isDisabled={disabled}
                        isMulti={isMulti}
                        name={field.name}
                        options={options}
                        placeholder=""
                        styles={customStyles}
                        value={value}
                        onChange={onChange}
                        onError={onError}
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
