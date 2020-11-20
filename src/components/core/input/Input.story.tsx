import Input from '@components/core/input/Input';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import React, { ReactNode } from 'react';
import { object, string } from 'yup';

import Button from '../button/Button';
export default {
    component: Input,
    title: 'Input'
};

export const Default = (): ReactNode => {
    const validationSchema = object().shape({
        firstName: string()
    });

    type FormValues = {
        firstName: string;
    };

    const initialValues: FormValues = {
        firstName: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;
                return (
                    <Form className="space-y-6">
                        <Field id="firstName" name="firstName">
                            {(props: FieldProps) => <Input label="First Name" {...props} />}
                        </Field>
                        <Button isLoading={isSubmitting} type="submit" variant="primary">
                            Submit
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export const TextArea = (): ReactNode => {
    const validationSchema = object().shape({
        message: string()
    });

    type FormValues = {
        message: string;
    };

    const initialValues: FormValues = {
        message: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;
                return (
                    <Form className="space-y-6">
                        <Field id="message" name="message">
                            {(props: FieldProps) => <Input label="Message" rows={5} {...props} />}
                        </Field>
                        <Button isLoading={isSubmitting} type="submit" variant="primary">
                            Submit
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export const WithPlaceholder = (): ReactNode => {
    const validationSchema = object().shape({
        email: string()
    });

    type FormValues = {
        email: string;
    };

    const initialValues: FormValues = {
        email: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;
                return (
                    <Form className="space-y-6">
                        <Field id="email" name="email">
                            {(props: FieldProps) => (
                                <Input
                                    label="Email"
                                    placeholder="Enter your email address"
                                    {...props}
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
    );
};

export const WithTooltip = (): ReactNode => {
    const validationSchema = object().shape({
        passportNumber: string()
    });

    type FormValues = {
        passportNumber: string;
    };

    const initialValues: FormValues = {
        passportNumber: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;
                return (
                    <Form className="space-y-6">
                        <Field id="passportNumber" name="passportNumber">
                            {(props: FieldProps) => (
                                <Input
                                    label="Passport Number"
                                    tooltip="We collect your passport information for identity verification proposes, your school or program of interest may require this information to process your application. If applicable, it may also be used for processing your visa."
                                    {...props}
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
    );
};

export const Optional = (): ReactNode => {
    const validationSchema = object().shape({
        middleName: string()
    });

    type FormValues = {
        middleName: string;
    };

    const initialValues: FormValues = {
        middleName: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;
                return (
                    <Form className="space-y-6">
                        <Field id="middleName" name="middleName">
                            {(props: FieldProps) => (
                                <Input optional label="Middle Name" {...props} />
                            )}
                        </Field>
                        <Button isLoading={isSubmitting} type="submit" variant="primary">
                            Submit
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export const Disabled = (): ReactNode => {
    const validationSchema = object().shape({
        studentId: string()
    });

    type FormValues = {
        studentId: string;
    };

    const initialValues: FormValues = {
        studentId: 'WD7PM'
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;
                return (
                    <Form className="space-y-6">
                        <Field id="studentId" name="studentId">
                            {(props: FieldProps) => (
                                <Input disabled label="Student ID" {...props} />
                            )}
                        </Field>
                        <Button isLoading={isSubmitting} type="submit" variant="primary">
                            Submit
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export const onError = (): ReactNode => {
    const validationSchema = object().shape({
        firstName: string()
    });

    type FormValues = {
        firstName: string;
    };

    const initialValues: FormValues = {
        firstName: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;
                return (
                    <Form className="space-y-6">
                        <Field id="firstName" name="firstName">
                            {(props: FieldProps) => (
                                <Input
                                    label="First Name"
                                    {...props}
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
    );
};

export const Loading = (): ReactNode => {
    const validationSchema = object().shape({
        firstName: string()
    });

    type FormValues = {
        firstName: string;
    };

    const initialValues: FormValues = {
        firstName: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {() => {
                return (
                    <Form className="space-y-6">
                        <Field id="firstName" name="firstName">
                            {(props: FieldProps) => (
                                <Input isLoading label="First Name" {...props} />
                            )}
                        </Field>
                    </Form>
                );
            }}
        </Formik>
    );
};
