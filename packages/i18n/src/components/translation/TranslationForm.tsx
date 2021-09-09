import { Button, Input, Select } from '@applyfuture/ui';
import { toast } from '@applyfuture/utils';
import { namespaces } from '@applyfuture/utils/src/constants/namespaces';
import { faPlus } from '@fortawesome/pro-light-svg-icons';
import Flags from 'country-flag-icons/react/3x2';
import { Field, FieldProps, Form, Formik } from 'formik';
import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

type Props = {
    handleDisplayForm?: () => void;
    isLoading?: boolean;
    newForm: boolean;
    selected?: string;
    translationKey?: string;
    value?: any;
};

const TranslationForm: FC<Props> = (props) => {
    const { handleDisplayForm, isLoading, newForm, selected, translationKey, value } = props;

    type FormValues = {
        enTranslation: string;
        frTranslation: string;
        namespace: string;
        translationKey: string;
        zhTranslation: string;
    };

    const initialValues: FormValues = {
        enTranslation: selected && value?.en ? value.en : '',
        frTranslation: selected && value?.fr ? value.fr : '',
        namespace: selected ? selected : '',
        translationKey: selected && translationKey ? translationKey : '',
        zhTranslation: selected && value?.zh ? value.zh : ''
    };

    const onSubmit = () => {
        toast({
            title: 'The translation was successfully added',
            variant: 'success'
        });
        handleDisplayForm && handleDisplayForm();
    };

    const skeletonFlag = <Skeleton height={18} width={22} />;
    const enFlag = <Flags.US className="h-4" title="English" />;
    const frFlag = <Flags.FR className="h-4" title="Français" />;
    const zhFlag = <Flags.CN className="h-4" title="简体中文" />;

    const namespaceOptions = namespaces.map((namespace) => ({
        label: namespace.label,
        value: namespace.value
    }));

    const namespaceInput = (
        <Field id="namespace" name="namespace">
            {(fieldProps: FieldProps) => (
                <Input disabled isLoading={isLoading} label="Namespaces" {...fieldProps} />
            )}
        </Field>
    );

    const namespaceSelect = (
        <Field id="namespace" name="namespace">
            {(fieldProps: FieldProps) => (
                <Select
                    isLoading={isLoading}
                    label="Namespaces"
                    options={namespaceOptions}
                    {...fieldProps}
                />
            )}
        </Field>
    );

    const baseClasses = 'my-8 px-6 py-4 border rounded-md shadow';
    const formClasses = 'mt-8 mb-24 px-6 py-4 border rounded-md shadow bg-indigo-100';

    return (
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
            {() => {
                return (
                    <div className={newForm ? formClasses : baseClasses}>
                        <Form className="space-y-6">
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                                <div className="flex flex-col w-full space-y-2">
                                    {newForm ? namespaceSelect : namespaceInput}
                                </div>
                                <div className="flex flex-col w-full space-y-2">
                                    <Field id="translationKey" name="translationKey">
                                        {(fieldProps: FieldProps) => (
                                            <Input
                                                isLoading={isLoading}
                                                label="Key"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center space-x-4">
                                    {isLoading ? skeletonFlag : enFlag}
                                    <div className="w-full">
                                        <Field id="enTranslation" name="enTranslation">
                                            {(fieldProps: FieldProps) => (
                                                <Input isLoading={isLoading} {...fieldProps} />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    {isLoading ? skeletonFlag : frFlag}
                                    <div className="w-full">
                                        <Field id="frTranslation" name="frTranslation">
                                            {(fieldProps: FieldProps) => (
                                                <Input isLoading={isLoading} {...fieldProps} />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    {isLoading ? skeletonFlag : zhFlag}
                                    <div className="w-full">
                                        <Field id="zhTranslation" name="zhTranslation">
                                            {(fieldProps: FieldProps) => (
                                                <Input isLoading={isLoading} {...fieldProps} />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            </div>
                            {newForm && (
                                <Button startIcon={faPlus} type="submit" variant="primary">
                                    Add Translation
                                </Button>
                            )}
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};

export default TranslationForm;
