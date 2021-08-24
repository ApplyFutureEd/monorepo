import { Button, Input, Select } from '@applyfuture/ui';
import Flags from 'country-flag-icons/react/3x2';
import { Field, FieldProps, Form, Formik } from 'formik';
import { FC } from 'react';

import { namespaces } from './namespaces';

interface Props {
    handleAddKey: (values: any) => void;
    newKey: any;
}

const AddKeyForm: FC<Props> = (props) => {
    const { handleAddKey, newKey } = props;
    type FormValues = {
        namespace: string;
        key: string;
        enTranslation: string;
        frTranslation: string;
        chTranslation: string;
    };
    const initialValues: FormValues = {
        namespace: '',
        // eslint-disable-next-line sort-keys
        key: '',
        // eslint-disable-next-line sort-keys
        enTranslation: '',
        frTranslation: '',
        // eslint-disable-next-line sort-keys
        chTranslation: ''
    };
    const onSubmit = (values: FormValues) => {
        handleAddKey(values);
    };
    const chFlag = <Flags.CN className="h-4" title="简体中文" />;
    const frFlag = <Flags.FR className="h-4" title="Français" />;
    const enFlag = <Flags.US className="h-4" title="English" />;

    const namespaceOptions = namespaces.map((namespace) => ({
        label: namespace.label,
        value: namespace.value
    }));

    return (
        <div style={{ paddingBottom: '30px', paddingTop: '30px' }}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {() => {
                    return (
                        <Form>
                            <div>
                                <Field id="namespace" name="namespace">
                                    {(fieldProps: FieldProps) => (
                                        <Select
                                            label="Namespace"
                                            options={namespaceOptions}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="key" name="key">
                                    {(fieldProps: FieldProps) => (
                                        <label className="block font-sans" htmlFor={Field.name}>
                                            <span className="text-gray-700 text-sm font-medium leading-5">
                                                key
                                            </span>
                                            <Input placeholder="New key" {...fieldProps} />
                                        </label>
                                    )}
                                </Field>
                            </div>
                            <div>
                                {enFlag}
                                <Field id="enTranslation" name="enTranslation">
                                    {(fieldProps: FieldProps) => (
                                        <Input placeholder="Translation" {...fieldProps} />
                                    )}
                                </Field>
                            </div>
                            <div>
                                {frFlag}
                                <Field id="frTranslation" name="frTranslation">
                                    {(fieldProps: FieldProps) => (
                                        <Input placeholder="Translation" {...fieldProps} />
                                    )}
                                </Field>
                            </div>
                            <div>
                                {chFlag}
                                <Field id="chTranslation" name="chTranslation">
                                    {(fieldProps: FieldProps) => (
                                        <Input placeholder="Translation" {...fieldProps} />
                                    )}
                                </Field>
                            </div>
                            <Button type="submit" variant="primary">
                                Add
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
            <span>{JSON.stringify(newKey)}</span>
        </div>
    );
};

export default AddKeyForm;
