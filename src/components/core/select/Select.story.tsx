import Button from '@components/core/button/Button';
import Select from '@components/core/select/Select';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import React, { FC, ReactNode } from 'react';
import { array, object, string } from 'yup';

export default {
    component: Select,
    title: 'Select'
};

const options = [
    {
        label: 'Bachelor degree',
        value: 'bachelor'
    },
    {
        label: 'Master degree',
        value: 'master'
    },
    {
        label: 'Doctor degree',
        value: 'doctor'
    }
];

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    return <div className="h-64">{children}</div>;
};

export const Default = (): ReactNode => {
    const validationSchema = object().shape({
        degree: string()
    });

    type FormValues = {
        degree: string;
    };

    const initialValues: FormValues = {
        degree: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {(props) => {
                    const { setFieldValue, isSubmitting } = props;
                    return (
                        <Form className="space-y-6">
                            <Field id="degree" name="degree">
                                {(fieldProps: FieldProps) => (
                                    <Select
                                        label="Degree"
                                        options={options}
                                        setFieldValue={setFieldValue}
                                        {...fieldProps}
                                    />
                                )}
                            </Field>
                            <Button isLoading={isSubmitting} type="submit" variant="primary">
                                Submit
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

export const MultipleValues = (): ReactNode => {
    const validationSchema = object().shape({
        degrees: array().of(string())
    });

    type FormValues = {
        degrees: Array<string>;
    };

    const initialValues: FormValues = {
        degrees: ['']
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {(props) => {
                    const { setFieldValue, isSubmitting } = props;
                    return (
                        <Form className="space-y-6">
                            <Field id="degrees" name="degrees">
                                {(fieldProps: FieldProps) => (
                                    <Select
                                        isMulti
                                        label="Degrees"
                                        options={options}
                                        setFieldValue={setFieldValue}
                                        {...fieldProps}
                                    />
                                )}
                            </Field>
                            <Button isLoading={isSubmitting} type="submit" variant="primary">
                                Submit
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

export const Optional = (): ReactNode => {
    const validationSchema = object().shape({
        degree: string()
    });

    type FormValues = {
        degree: string;
    };

    const initialValues: FormValues = {
        degree: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {(props) => {
                    const { setFieldValue, isSubmitting } = props;
                    return (
                        <Form className="space-y-6">
                            <Field id="degree" name="degree">
                                {(fieldProps: FieldProps) => (
                                    <Select
                                        optional
                                        label="Degree"
                                        options={options}
                                        setFieldValue={setFieldValue}
                                        {...fieldProps}
                                    />
                                )}
                            </Field>
                            <Button isLoading={isSubmitting} type="submit" variant="primary">
                                Submit
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

export const Disabled = (): ReactNode => {
    const validationSchema = object().shape({
        degree: string()
    });

    type FormValues = {
        degree: string;
    };

    const initialValues: FormValues = {
        degree: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {(props) => {
                    const { setFieldValue, isSubmitting } = props;
                    return (
                        <Form className="space-y-6">
                            <Field id="degree" name="degree">
                                {(fieldProps: FieldProps) => (
                                    <Select
                                        disabled
                                        label="Degree"
                                        options={options}
                                        setFieldValue={setFieldValue}
                                        {...fieldProps}
                                    />
                                )}
                            </Field>
                            <Button isLoading={isSubmitting} type="submit" variant="primary">
                                Submit
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

export const onError = (): ReactNode => {
    const validationSchema = object().shape({
        degree: string()
    });

    type FormValues = {
        degree: string;
    };

    const initialValues: FormValues = {
        degree: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {(props) => {
                    const { setFieldValue, isSubmitting } = props;
                    return (
                        <Form className="space-y-6">
                            <Field id="degree" name="degree">
                                {(fieldProps: FieldProps) => (
                                    <Select
                                        disabled
                                        label="Degree"
                                        options={options}
                                        setFieldValue={setFieldValue}
                                        {...fieldProps}
                                        meta={{
                                            error: 'This field is required',
                                            initialTouched: false,
                                            touched: true,
                                            value: ''
                                        }}
                                    />
                                )}
                            </Field>
                            <Button isLoading={isSubmitting} type="submit" variant="primary">
                                Submit
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};
