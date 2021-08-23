import { Button, Input } from '@applyfuture/ui';
import { Field, FieldProps, Form, Formik } from 'formik';
import { FC } from 'react';

interface Props {
    handleAddKey: (values: any) => void;
    newKey: any;
}

const AddKeyForm: FC<Props> = (props) => {
    const { handleAddKey, newKey } = props;
    type FormValues = {
        key: string;
        enTranslation: string;
        frTranslation: string;
        chTranslation: string;
    };
    const initialValues: FormValues = {
        chTranslation: '',
        enTranslation: '',
        frTranslation: '',
        key: ''
    };
    const onSubmit = (values: FormValues) => {
        handleAddKey(values);
    };
    return (
        <div
            style={{
                alignItems: 'flex-start',
                display: 'flex',
                flexDirection: 'column',
                height: '350px',
                justifyContent: 'center'
            }}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {() => {
                    return (
                        <Form>
                            <div style={{ display: 'flex' }}>
                                <Field id="namespace" name="namespace">
                                    {(fieldProps: FieldProps) => (
                                        <label className="block font-sans" htmlFor={Field.name}>
                                            <span className="text-gray-700 text-sm font-medium leading-5">
                                                Namespace
                                            </span>
                                            <Input placeholder="Namespace" {...fieldProps} />
                                        </label>
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
                            <Field id="enTranslation" name="enTranslation">
                                {(fieldProps: FieldProps) => (
                                    <Input placeholder="enTranslation" {...fieldProps} />
                                )}
                            </Field>
                            <Field id="frTranslation" name="frTranslation">
                                {(fieldProps: FieldProps) => (
                                    <Input placeholder="frTranslation" {...fieldProps} />
                                )}
                            </Field>
                            <Field id="chTranslation" name="chTranslation">
                                {(fieldProps: FieldProps) => (
                                    <Input placeholder="chTranslation" {...fieldProps} />
                                )}
                            </Field>
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
