import { Button, Input, Select } from '@applyfuture/ui';
import { namespaces } from '@data/namespaces';
import { faCheck, faPlus } from '@fortawesome/pro-light-svg-icons';
import Flags from 'country-flag-icons/react/3x2';
import { Field, FieldProps, Form, Formik } from 'formik';
import React, { FC, useState } from 'react';

type Props = {
    handleAddKey?: (initialValues: any) => void;
    newForm: boolean;
    selected?: string;
    translationKey?: any;
    value?: any;
};

const TranslationForm: FC<Props> = (props) => {
    const { handleAddKey, newForm, selected, translationKey, value } = props;

    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitTranslation = () => {
        setIsSubmitted(true);
    };

    type FormValues = {
        enTranslation: string;
        frTranslation: string;
        namespace: string;
        translationKey: string;
        zhTranslation: string;
    };

    const initialValues: FormValues = {
        enTranslation: selected ? value.en : '',
        frTranslation: selected ? value.fr : '',
        namespace: selected ? selected : '',
        translationKey: selected ? translationKey : '',
        zhTranslation: selected ? value.zh : ''
    };

    const onSubmit = (values: FormValues) => handleAddKey && handleAddKey(values);

    const zhFlag = <Flags.CN className="h-4" title="简体中文" />;
    const frFlag = <Flags.FR className="h-4" title="Français" />;
    const enFlag = <Flags.US className="h-4" title="English" />;

    const namespaceOptions = namespaces.map((namespace) => ({
        label: namespace.label,
        value: namespace.value
    }));

    const namespaceInput = (
        <Field id="namespace" name="namespace">
            {(fieldProps: FieldProps) => (
                <Input disabled={true} label="Namespaces" {...fieldProps} />
            )}
        </Field>
    );
    const namespaceSelect = (
        <Field id="namespace" name="namespace">
            {(fieldProps: FieldProps) => (
                <Select label="Namespaces" options={namespaceOptions} {...fieldProps} />
            )}
        </Field>
    );
    const submitButton = isSubmitted ? (
        <Button startIcon={faCheck} type="submit" variant="success">
            Translation Added
        </Button>
    ) : (
        <Button startIcon={faPlus} type="submit" variant="primary" onClick={submitTranslation}>
            Add Translation
        </Button>
    );
    const baseClasse = 'my-8 px-6 py-4 border rounded-md shadow';
    const formClasse = 'mt-8 mb-24 px-6 py-4 border rounded-md shadow bg-indigo-100';

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={
                selected
                    ? () => {
                          console.log('Submited');
                      }
                    : onSubmit
            }>
            {() => {
                return (
                    <div className={newForm ? formClasse : baseClasse}>
                        <Form className="space-y-6">
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                                <div className="flex flex-col w-full space-y-2">
                                    {newForm ? namespaceSelect : namespaceInput}
                                </div>
                                <div className="flex flex-col w-full space-y-2">
                                    <Field id="translationKey" name="translationKey">
                                        {(fieldProps: FieldProps) => (
                                            <Input label="Key" {...fieldProps} />
                                        )}
                                    </Field>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center space-x-4">
                                    {enFlag}
                                    <div className="w-full">
                                        <Field id="enTranslation" name="enTranslation">
                                            {(fieldProps: FieldProps) => <Input {...fieldProps} />}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    {frFlag}
                                    <div className="w-full">
                                        <Field id="frTranslation" name="frTranslation">
                                            {(fieldProps: FieldProps) => <Input {...fieldProps} />}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    {zhFlag}
                                    <div className="w-full">
                                        <Field id="zhTranslation" name="zhTranslation">
                                            {(fieldProps: FieldProps) => <Input {...fieldProps} />}
                                        </Field>
                                    </div>
                                </div>
                            </div>
                            {newForm ? submitButton : ''}
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};

export default TranslationForm;
