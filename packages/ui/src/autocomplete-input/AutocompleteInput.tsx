import { faExclamationCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import Skeleton from 'react-loading-skeleton';
import usePlacesAutocomplete, { Suggestion } from 'use-places-autocomplete';

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
     * If `true`, the component will display a loading skeleton.
     */
    isLoading?: boolean;
    /**
     * The label displayed above the input.
     */
    label?: string;
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
};

export const AutocompleteInput: FC<Props> = (props) => {
    const { field, form, isLoading, label, meta, optional, ...rest } = props;

    const { t } = useTranslation();
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        debounce: 300,
        requestOptions: {}
    });
    const registerRef = useOnclickOutside(() => {
        clearSuggestions();
    });

    const onError = Boolean(meta.touched && meta.error);

    const baseClasses = 'form-input block w-full text-sm leading-5 min-h-input';
    const onErrorClasses =
        'placeholder-red-300 pr-10 text-red-900 border-red-300 focus:border-red-300 focus:shadow-outline-red';

    const classes = cx({
        [`${baseClasses}`]: true,
        [`${onErrorClasses}`]: onError
    });

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
        form.setFieldValue(field.name, event.target.value);
    };

    const handleSelect = (suggestion: Suggestion) => () => {
        setValue(suggestion.description, false);
        form.setFieldValue(field.name, suggestion.description);
        clearSuggestions();
    };

    const renderSuggestions = () =>
        data.map((suggestion, index) => {
            const {
                structured_formatting: { main_text, secondary_text }
            } = suggestion;
            return (
                <div
                    key={index}
                    className="block px-4 py-2 text-gray-700 hover:text-gray-900 focus:text-gray-900 text-sm leading-5 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none cursor-pointer"
                    role="menuitem"
                    tabIndex={index}
                    onClick={handleSelect(suggestion)}
                    onKeyDown={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </div>
            );
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
        <div ref={registerRef}>
            <label className="block font-sans" htmlFor={field.name} {...rest}>
                {label && (
                    <div>
                        <span className="text-gray-700 text-sm font-medium leading-5">{label}</span>
                        {optional && (
                            <span className="text-gray-500 text-xs"> - {t('common:optional')}</span>
                        )}
                    </div>
                )}
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                        aria-describedby={`${field.name}-error`}
                        aria-invalid="true"
                        autoComplete="new-password"
                        className={classes}
                        disabled={!ready}
                        id={field.name}
                        value={value || field.value}
                        onBlur={field.onBlur}
                        onChange={handleInput}
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
                {status === 'OK' && (
                    <div className="relative z-20 left-0 mt-2 rounded-md shadow-lg">
                        <div className="absolute bg-white rounded-md shadow-xs">
                            <div
                                aria-labelledby="suggestions"
                                aria-orientation="vertical"
                                className="py-1">
                                {renderSuggestions()}
                            </div>
                        </div>
                    </div>
                )}
                {onError && (
                    <p className="mt-2 text-red-600 text-sm" id={`${field.name}-error`}>
                        {meta.error}
                    </p>
                )}
            </label>
        </div>
    );
};
