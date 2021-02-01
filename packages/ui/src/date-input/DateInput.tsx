import { faExclamationCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { enGB, fr, zhCN } from 'date-fns/locale';
import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import Skeleton from 'react-loading-skeleton';

registerLocale('fr', fr);
registerLocale('zh', zhCN);
registerLocale('en', enGB);

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
    field: FieldInputProps<Date>;
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
     * The maximum date accepted.
     */
    maxDate?: Date | null;
    /**
     * An object that contains relevant computed metadata.
     *
     * https://formik.org/docs/api/useField#fieldmetapropsvalue
     */
    meta: FieldMetaProps<Date>;
    /**
     * If `true`, the input will display an `(optional)` mention next to the label.
     */
    optional?: boolean;
};

export const DateInput: FC<Props> = (props) => {
    const { field, meta, form, label, disabled, optional, isLoading, maxDate, ...rest } = props;

    const router = useRouter();
    const { t } = useTranslation();
    const handleChange = (value: Date | [Date, Date] | null) => {
        form.setFieldValue(field.name, value);
    };
    const onError = Boolean(meta.touched && meta.error);

    const baseClasses = 'form-input block w-full sm:text-sm sm:leading-5 min-h-input';
    const disabledClasses = 'bg-gray-100 cursor-not-allowed';

    const classes = cx({
        [`${baseClasses}`]: true,
        [`${disabledClasses}`]: disabled
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

    return (
        <label
            className="block text-gray-700 text-sm font-medium leading-5"
            htmlFor={field.name}
            {...rest}>
            {label && (
                <div className="flex items-center space-x-2">
                    <div className="flex w-full">
                        <div>{label}</div>
                        {optional && (
                            <div className="ml-2 text-xs italic">({t('common:optional')})</div>
                        )}
                    </div>
                </div>
            )}
            <div className="relative mt-1 rounded-md shadow-sm">
                <DatePicker
                    showMonthDropdown
                    showYearDropdown
                    className={classes}
                    dateFormat="d MMMM yyyy"
                    disabled={disabled}
                    dropdownMode="select"
                    locale={router.locale}
                    maxDate={maxDate}
                    name={field.name}
                    selected={(field.value && new Date(field.value)) || null}
                    onChange={handleChange}
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
                    {meta.error}
                </p>
            )}
        </label>
    );
};
