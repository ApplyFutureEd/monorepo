import { Input } from '@applyfuture/ui';
import Flags from 'country-flag-icons/react/3x2';
import { Field, FieldProps, Form, Formik } from 'formik';
import React, { FC } from 'react';

import { namespaces } from '../../data/namespaces';

interface Props {
    translationKey: string;
    value: any;
    selected: string;
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

    const namespaceOptions = namespaces.map((namespace) => ({
        label: namespace.label,
        value: namespace.value
    }));

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={() => {
                    console.log('Submited');
                }}>
                {() => {
                    return (
                        <Form>
                            {/* <Field id="namespace" name="namespace">
                                {(fieldProps: FieldProps) => (
                                    <Select options={namespaceOptions} {...fieldProps} />
                                )}
                            </Field> */}
                            <div className="flex gap-2 items-center">
                                <p>NAMESPACE :</p>
                                <Field id="namespace" name="namespace">
                                    {(fieldProps: FieldProps) => (
                                        <Input disabled={true} {...fieldProps} />
                                    )}
                                </Field>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p>KEY :</p>
                                <Field id="translationKey" name="translationKey">
                                    {(fieldProps: FieldProps) => <Input {...fieldProps} />}
                                </Field>
                            </div>
                            <div className="flex gap-2 items-center">
                                {enFlag}
                                <Field id="enTranslation" name="enTranslation">
                                    {(fieldProps: FieldProps) => <Input {...fieldProps} />}
                                </Field>
                            </div>
                            <div className="flex gap-2 items-center">
                                {frFlag}
                                <Field id="frTranslation" name="frTranslation">
                                    {(fieldProps: FieldProps) => <Input {...fieldProps} />}
                                </Field>
                            </div>
                            <div className="flex gap-2 items-center">
                                {zhFlag}
                                <Field id="zhTranslation" name="zhTranslation">
                                    {(fieldProps: FieldProps) => <Input {...fieldProps} />}
                                </Field>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default TranslationForm;
