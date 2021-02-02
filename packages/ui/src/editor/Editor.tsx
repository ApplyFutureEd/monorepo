import { markdown } from '@applyfuture/utils';
import { FieldInputProps, FormikProps } from 'formik';
import React, { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import ReactMde from 'react-mde';

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
     * The label displayed above the select.
     */
    label: string;
};

export const Editor: FC<Props> = (props) => {
    const { field, form, isLoading, label, ...rest } = props;
    const [selectedTab, setSelectedTab] = useState<'write' | 'preview' | undefined>('write');

    const handleTabChange = (tab: 'write' | 'preview') => {
        setSelectedTab(tab);
    };

    const handleChange = (value: string) => {
        return form.setFieldValue(field.name, value);
    };

    if (isLoading) {
        return (
            <div>
                {label && (
                    <div>
                        <Skeleton height="15px" width="120px" />
                    </div>
                )}
                <div className="rounded-md">
                    <Skeleton height="257px" width="100%" />
                </div>
            </div>
        );
    }

    return (
        <label className="block font-sans" htmlFor={field.name} {...rest}>
            <span className="text-gray-700 text-sm font-medium leading-5">{label}</span>
            <div className="mt-1">
                <ReactMde
                    classes={{ preview: 'markdown' }}
                    generateMarkdownPreview={(value: string) =>
                        Promise.resolve(markdown({ value }))
                    }
                    selectedTab={selectedTab}
                    value={field.value}
                    onChange={handleChange}
                    onTabChange={handleTabChange}
                />
            </div>
        </label>
    );
};
