import cx from 'classnames';
import { FieldInputProps, FormikProps } from 'formik';
import React, { FC } from 'react';

type Props = {
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
     * The label displayed next to the toggle.
     */
    label?: string;
};

export const Toggle: FC<Props> = (props) => {
    const { field, form, label } = props;

    const backgroundBaseClasses =
        'w-11 relative inline-flex flex-shrink-0 h-6 border-2 border-transparent rounded-full focus:outline-none focus:ring cursor-pointer transition-colors duration-200 ease-in-out';
    const backgroundClasses = cx({
        [`${backgroundBaseClasses}`]: true,
        ['bg-gray-200']: !field.value,
        ['bg-indigo-600']: field.value
    });

    const foregroundBaseClasses =
        'inline-block w-5 h-5 bg-white rounded-full shadow transform translate-x-0 transition duration-200 ease-in-out';
    const foregroundClasses = cx({
        [`${foregroundBaseClasses}`]: true,
        ['translate-x-0']: !field.value,
        ['translate-x-5']: field.value
    });

    const handleClick = () => form.setFieldValue(field.name, !field.value);

    return (
        <div className="flex items-center space-x-4">
            <span className="text-gray-700 text-sm font-medium leading-5">{label}</span>
            <span
                aria-checked="false"
                className={backgroundClasses}
                role="checkbox"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}>
                <span aria-hidden="true" className={foregroundClasses} />
            </span>
        </div>
    );
};
