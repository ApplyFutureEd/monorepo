import { Button, Input, Select } from '@applyfuture/ui';
import { Modal } from '@applyfuture/ui';
import { toast } from '@applyfuture/utils';
import { namespaces } from '@applyfuture/utils';
import { faExclamationTriangle, faPlus, faSave, faTrash } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from 'aws-amplify';
import Flags from 'country-flag-icons/react/3x2';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { isEqual } from 'lodash';
import React, { ChangeEvent, FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

type Props = {
    fetchAndSetAllNamespaces?: () => void;
    fetchAndSetNamespace?: (namespace: string) => void;
    handleToggleDisplayForm?: () => void;
    isLoading?: boolean;
    newForm: boolean;
    selected?: string;
    translationKey?: string;
    value?: any;
};

const TranslationForm: FC<Props> = (props) => {
    const {
        fetchAndSetAllNamespaces,
        fetchAndSetNamespace,
        handleToggleDisplayForm,
        isLoading,
        newForm,
        selected,
        translationKey,
        value
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
    const [open, setOpen] = useState(false);

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

    const handleDelete = async (values: FormValues) => {
        setOpen(false);
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
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
    };

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
            {({ isSubmitting, values }) => {
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
                            {!newForm && (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                    {displayUpdateButton && (
                                        <Button
                                            isSubmitting={isSubmitting}
                                            startIcon={faSave}
                                            type="submit"
                                            variant="primary">
                                            Update
                                        </Button>
                                    )}
                                    <Button
                                        startIcon={faTrash}
                                        type="button"
                                        variant="secondary"
                                        onClick={() => handleOpen()}>
                                        Delete
                                    </Button>
                                </div>
                            )}
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
                        <Modal open={open} onClose={handleClose}>
                            <div className="sm:flex sm:items-start">
                                <div className="flex flex-shrink-0 items-center justify-center mx-auto w-12 h-12 text-red-500 bg-red-100 rounded-full sm:mx-0 sm:w-10 sm:h-10">
                                    <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3
                                        className="text-gray-900 text-lg font-medium leading-6"
                                        id="modal-headline">
                                        Delete translation
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-gray-500 text-sm leading-5">
                                            Are you sure you want to delete this translation?
                                            <br />
                                            It will be permanently removed from our servers. This
                                            action cannot be undone.
                                        </p>
                                        <div className="mt-4 sm:flex sm:flex-row-reverse">
                                            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                                <Button
                                                    isSubmitting={isSubmitting}
                                                    type="button"
                                                    variant="danger"
                                                    onClick={() => handleDelete(values)}>
                                                    Delete
                                                </Button>
                                            </span>
                                            <span className="flex mt-3 w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                                <Button
                                                    isSubmitting={isSubmitting}
                                                    type="button"
                                                    variant="secondary"
                                                    onClick={() => handleClose()}>
                                                    Cancel
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                );
            }}
        </Formik>
    );
};

export default TranslationForm;
