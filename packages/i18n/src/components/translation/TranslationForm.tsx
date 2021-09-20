import { Button, Input, Select } from '@applyfuture/ui';
import { toast } from '@applyfuture/utils';
import { namespaces } from '@applyfuture/utils';
import { faPlus, faSave, faTrash } from '@fortawesome/pro-light-svg-icons';
import { API } from 'aws-amplify';
import Flags from 'country-flag-icons/react/3x2';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { isEqual } from 'lodash';
import React, { ChangeEvent, FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

type Props = {
    handleToggleDisplayForm?: () => void;
    fetchAndSetAllNamespaces?: () => void;
    fetchAndSetNamespace?: (namespace: string) => void;
    isLoading?: boolean;
    newForm: boolean;
    selected?: string;
    translationKey?: string;
    value?: any;
};

const TranslationForm: FC<Props> = (props) => {
    const {
        handleToggleDisplayForm,
        isLoading,
        newForm,
        selected,
        translationKey,
        value,
        fetchAndSetAllNamespaces,
        fetchAndSetNamespace
    } = props;

    type FormValues = {
        chineseTranslation: string;
        englishTranslation: string;
        frenchTranslation: string;
        namespace: string;
        translationKey: string;
    };

    const initialValues: FormValues = {
        chineseTranslation: selected && value?.zh ? value.zh : '',
        englishTranslation: selected && value?.en ? value.en : '',
        frenchTranslation: selected && value?.fr ? value.fr : '',
        namespace: selected ? selected : '',
        translationKey: selected && translationKey ? translationKey : ''
    };
    const [displayUpdateButton, setDisplayUpdateButton] = useState(false);

    const handleDisplayUpdateButton = () => {
        setDisplayUpdateButton(true);
    };
    const handleHideUpdateButton = () => {
        setDisplayUpdateButton(false);
    };

    const isDirty = (values: FormValues) => {
        return !isEqual(initialValues, values);
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            await API.post('rest', '/i18n/save', {
                body: { ...values, namespace: values.namespace.toLowerCase() }
            });
            if (selected === 'all') {
                fetchAndSetAllNamespaces && fetchAndSetAllNamespaces();
            } else {
                fetchAndSetNamespace && fetchAndSetNamespace(values.namespace);
            }
            toast({
                title: 'The translation was successfully added',
                variant: 'success'
            });
            handleToggleDisplayForm && handleToggleDisplayForm();
            !newForm && handleHideUpdateButton();
        } catch (error) {
            toast({
                title: 'Something went wrong',
                variant: 'error'
            });
        }
        actions.setSubmitting(false);
    };

    /* const handleDelete = async (values: FormValues) => {
        console.log('deleted');
        try {
            await API.post('rest', '/i18n/delete', {
                body: {
                    namespace: values.namespace,
                    translationKey: values.translationKey
                }
            });
            toast({
                title: 'The translation was successfully deleted',
                variant: 'success'
            });
        } catch (error) {
            toast({
                title: 'Something went wrong',
                variant: 'error'
            });
            console.log(error);
        }
    }; */

    const skeletonFlag = <Skeleton height={18} width={22} />;
    const enFlag = <Flags.US className="h-4" title="English" />;
    const frFlag = <Flags.FR className="h-4" title="Français" />;
    const zhFlag = <Flags.CN className="h-4" title="简体中文" />;

    const namespaceOptions = namespaces.map((namespace) => ({
        label: namespace,
        value: namespace
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

    const baseClasses = 'px-6 py-4 border rounded-md shadow';
    const formClasses = 'mt-8 mb-24 px-6 py-4 border rounded-md shadow bg-indigo-100';

    return (
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting, validateOnChange }) => {
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
                                                field={{
                                                    ...fieldProps.field,
                                                    onChange: (event: ChangeEvent<any>) => {
                                                        if (
                                                            isDirty({
                                                                ...fieldProps.form.values,
                                                                translationKey: event.target.value
                                                            })
                                                        ) {
                                                            handleDisplayUpdateButton();
                                                        } else {
                                                            handleHideUpdateButton();
                                                        }

                                                        fieldProps.field.onChange(event);
                                                    }
                                                }}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center space-x-4">
                                    {isLoading ? skeletonFlag : enFlag}
                                    <div className="w-full">
                                        <Field id="englishTranslation" name="englishTranslation">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    rows={2}
                                                    {...fieldProps}
                                                    field={{
                                                        ...fieldProps.field,
                                                        onChange: (event: ChangeEvent<any>) => {
                                                            if (
                                                                isDirty({
                                                                    ...fieldProps.form.values,
                                                                    englishTranslation:
                                                                        event.target.value
                                                                })
                                                            ) {
                                                                handleDisplayUpdateButton();
                                                            } else {
                                                                handleHideUpdateButton();
                                                            }

                                                            fieldProps.field.onChange(event);
                                                        }
                                                    }}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    {isLoading ? skeletonFlag : frFlag}
                                    <div className="w-full">
                                        <Field id="frenchTranslation" name="frenchTranslation">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    rows={2}
                                                    {...fieldProps}
                                                    field={{
                                                        ...fieldProps.field,
                                                        onChange: (event: ChangeEvent<any>) => {
                                                            if (
                                                                isDirty({
                                                                    ...fieldProps.form.values,
                                                                    frenchTranslation:
                                                                        event.target.value
                                                                })
                                                            ) {
                                                                handleDisplayUpdateButton();
                                                            } else {
                                                                handleHideUpdateButton();
                                                            }

                                                            fieldProps.field.onChange(event);
                                                        }
                                                    }}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    {isLoading ? skeletonFlag : zhFlag}
                                    <div className="w-full">
                                        <Field id="chineseTranslation" name="chineseTranslation">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    rows={2}
                                                    {...fieldProps}
                                                    field={{
                                                        ...fieldProps.field,
                                                        onChange: (event: ChangeEvent<any>) => {
                                                            if (
                                                                isDirty({
                                                                    ...fieldProps.form.values,
                                                                    chineseTranslation:
                                                                        event.target.value
                                                                })
                                                            ) {
                                                                handleDisplayUpdateButton();
                                                            } else {
                                                                handleHideUpdateButton();
                                                            }

                                                            fieldProps.field.onChange(event);
                                                        }
                                                    }}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            </div>
                            {!newForm && displayUpdateButton && (
                                <Button
                                    isSubmitting={isSubmitting}
                                    startIcon={faSave}
                                    type="submit"
                                    variant="primary"
                                    onClick={() => validateOnChange}>
                                    Update
                                </Button>
                            )}
                            <Button
                                startIcon={faTrash}
                                type="button"
                                variant="secondary"
                                onClick={() => console.log('deleted')}
                            />
                            {newForm && (
                                <Button
                                    isSubmitting={isSubmitting}
                                    startIcon={faPlus}
                                    type="submit"
                                    variant="primary">
                                    Add
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
