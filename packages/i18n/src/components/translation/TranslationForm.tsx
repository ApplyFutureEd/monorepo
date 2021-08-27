import { Input } from '@applyfuture/ui';
import Flags from 'country-flag-icons/react/3x2';
import { Field, FieldProps, Form, Formik } from 'formik';
import React, { FC } from 'react';

interface Props {
    translationKey: any;
    value: any;
    selected: any;
}

const TranslationForm: FC<Props> = (props) => {
    const { translationKey, value, selected } = props;

    type FormValues = {
        namespace: string;
        translationKey: string;
        enTranslation: string;
        frTranslation: string;
        zhTranslation: string;
    };

    const initialValues: FormValues = {
        enTranslation: value.en,
        frTranslation: value.fr,
        namespace: selected,
        translationKey: translationKey,
        zhTranslation: value.zh
    };

    const zhFlag = <Flags.CN className="h-4" title="简体中文" />;
    const frFlag = <Flags.FR className="h-4" title="Français" />;
    const enFlag = <Flags.US className="h-4" title="English" />;

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={() => {
                console.log('Submited');
            }}>
            {() => {
                return (
                    <Form className="space-y-6">
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                            <div className="flex flex-col w-full space-y-2">
                                <p className="text-gray-700">Namespace :</p>
                                <Field id="namespace" name="namespace">
                                    {(fieldProps: FieldProps) => (
                                        <Input disabled={true} {...fieldProps} />
                                    )}
                                </Field>
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
                    </Form>
                );
            }}
        </Formik>
    );
};

export default TranslationForm;
