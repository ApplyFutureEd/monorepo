import { Button, Input, Select } from '@applyfuture/ui';
import { namespaces } from '@data/namespaces';
import Flags from 'country-flag-icons/react/3x2';
import { Field, FieldProps, Form, Formik } from 'formik';
import React, { FC } from 'react';

type Props = {
    selected?: any;
    translationKey?: any;
    value?: any;
    handleAddKey?: (initialValues: any) => void;
};

const TranslationForm: FC<Props> = (props) => {
    const { selected, translationKey, value, handleAddKey } = props;

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

    const onSubmit = (values: FormValues) => handleAddKey(values);

    const zhFlag = <Flags.CN className="h-4" title="简体中文" />;
    const frFlag = <Flags.FR className="h-4" title="Français" />;
    const enFlag = <Flags.US className="h-4" title="English" />;

    const namespaceOptions = namespaces.map((namespace) => ({
        label: namespace.label,
        value: namespace.value
    }));

    const namespaceInput = (
        <Field id="namespace" name="namespace">
            {(fieldProps: FieldProps) => <Input disabled={true} {...fieldProps} />}
        </Field>
    );
    const namespaceSelect = (
        <Field id="namespace" name="namespace">
            {(fieldProps: FieldProps) => <Select options={namespaceOptions} {...fieldProps} />}
        </Field>
    );
    const submitButton = (
        <Button type="submit" variant="primary">
            Add
        </Button>
    );
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
                    <div className="my-8 px-6 py-4 border rounded-md shadow">
                        <Form className="space-y-6">
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                                <div className="flex flex-col w-full space-y-2">
                                    <p className="text-gray-700">Namespace :</p>
                                    {selected ? namespaceInput : namespaceSelect}
                                </div>
                                <div className="flex flex-col w-full space-y-2">
                                    <p className="text-gray-700">Key :</p>
                                    <Field id="translationKey" name="translationKey">
                                        {(fieldProps: FieldProps) => <Input {...fieldProps} />}
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
                            {selected ? '' : submitButton}
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};

export default TranslationForm;
