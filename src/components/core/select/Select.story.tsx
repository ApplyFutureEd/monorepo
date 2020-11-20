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

export const WithTooltip = (): ReactNode => {
    const validationSchema = object().shape({
        ['degree-with-tooltip']: string()
    });

    type FormValues = {
        ['degree-with-tooltip']: string;
    };

    const initialValues: FormValues = {
        ['degree-with-tooltip']: ''
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
                            <Field id="degree-with-tooltip" name="degree-with-tooltip">
                                {(fieldProps: FieldProps) => (
                                    <Select
                                        label="Degree"
                                        options={options}
                                        setFieldValue={setFieldValue}
                                        tooltip="Select your degree"
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
        ['degree-optional']: string()
    });

    type FormValues = {
        ['degree-optional']: string;
    };

    const initialValues: FormValues = {
        ['degree-optional']: ''
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
                            <Field id="degree-optional" name="degree-optional">
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
        ['degree-disabled']: string()
    });

    type FormValues = {
        ['degree-disabled']: string;
    };

    const initialValues: FormValues = {
        ['degree-disabled']: ''
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
                            <Field id="degree-disabled" name="degree-disabled">
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
        ['degree-error']: string()
    });

    type FormValues = {
        ['degree-error']: string;
    };

    const initialValues: FormValues = {
        ['degree-error']: ''
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
                            <Field id="degree-error" name="degree-error">
                                {(fieldProps: FieldProps) => (
                                    <Select
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
                            <Button
                                disabled
                                isLoading={isSubmitting}
                                type="submit"
                                variant="primary">
                                Submit
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};

export const Loading = (): ReactNode => {
    const validationSchema = object().shape({
        ['degree-loading']: string()
    });

    type FormValues = {
        ['degree-loading']: string;
    };

    const initialValues: FormValues = {
        ['degree-loading']: ''
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
                    const { setFieldValue } = props;
                    return (
                        <Form className="space-y-6">
                            <Field id="degree-loading" name="degree-loading">
                                {(fieldProps: FieldProps) => (
                                    <Select
                                        isLoading
                                        label="Degree"
                                        options={options}
                                        setFieldValue={setFieldValue}
                                        {...fieldProps}
                                    />
                                )}
                            </Field>
                        </Form>
                    );
                }}
            </Formik>
        </Wrapper>
    );
};
