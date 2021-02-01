import { faExclamationCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { FC, ReactNode, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import ReactPhoneNumberInput, { getCountryCallingCode } from 'react-phone-number-input';

import { Tooltip } from './../tooltip/Tooltip';

type Props = {
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
    form: FormikProps<unknown>;
    /**
     * If `true`, the component will display a loading skeleton.
     */
    isLoading?: boolean;
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
     * If `true`, the input will display an `(optional)` mention next to the label.
     */
    optional?: boolean;

    /**
     * The tooltip displayed when hovering the label.
     */
    tooltip?: ReactNode;
};

export const PhoneInput: FC<Props> = (props) => {
    const { disabled, field, form, isLoading, label, meta, optional, tooltip, ...rest } = props;

    const { t } = useTranslation();
    const [countryCallingCode, setCountryCallingCode] = useState('33');
    const onError = Boolean(meta?.touched && meta?.error);

    const baseClasses = 'form-input block w-full text-sm leading-5 min-h-input';
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
                {label && (
                    <div>
                        <Skeleton height="15px" width="120px" />
                    </div>
                )}
                <div className="rounded-md">
                    <Skeleton height="47px" width="100%" />
                </div>
            </div>
        );
    }

    const onChange = (phoneNumber: string) => {
        form.setFieldValue(field.name, phoneNumber);
    };

    const onCountryChange = (country: string | undefined) => {
        if (!country) {
            return;
        }
        try {
            setCountryCallingCode(getCountryCallingCode(country));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <label className="block font-sans" htmlFor={field.name} {...rest}>
            <Tooltip content={tooltip}>
                <div>
                    <span className="text-gray-700 text-sm font-medium leading-5">{label}</span>
                    {optional && (
                        <span className="text-gray-500 text-xs"> - {t('common:optional')}</span>
                    )}
                </div>
            </Tooltip>
            <div className="relative mt-1 rounded-md shadow-sm">
                <ReactPhoneNumberInput
                    className={classes}
                    data-testid={label}
                    defaultCountry="FR"
                    disabled={disabled}
                    name={field.name}
                    placeholder={`+${countryCallingCode}`}
                    value={field.value}
                    onChange={onChange}
                    onCountryChange={onCountryChange}
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
            {onError && (
                <p className="mt-2 text-red-600 text-sm" id={`${field.name}-error`}>
                    {meta?.error}
                </p>
            )}
        </label>
    );
};
