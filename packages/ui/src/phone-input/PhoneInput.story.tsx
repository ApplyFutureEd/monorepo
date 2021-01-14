import 'yup-phone';

import { PhoneInput } from './PhoneInput';
import { Button } from './../button/Button';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { ReactNode } from 'react';
import { object, string } from 'yup';

export default {
    component: PhoneInput,
    title: 'PhoneInput'
};

export const Default = (): ReactNode => {
    const { t } = useTranslation();

    const validationSchema = object().shape({
        phoneNumber: string()
            .phone(undefined, false, t('common:error-phone-format'))
            .required(t('common:error-email-required'))
    });

    type FormValues = {
        phoneNumber: string;
    };

    const initialValues: FormValues = {
        phoneNumber: ''
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
                        <Field id="phoneNumber" name="phoneNumber">
                            {(fieldProps: FieldProps) => (
                                <PhoneInput label="Phone Number" {...fieldProps} />
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
    const { t } = useTranslation();

    const validationSchema = object().shape({
        phoneNumber: string()
            .phone(undefined, false, t('common:error-phone-format'))
            .required(t('common:error-email-required'))
    });

    type FormValues = {
        phoneNumber: string;
    };

    const initialValues: FormValues = {
        phoneNumber: ''
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
                        <Field id="phoneNumber" name="phoneNumber">
                            {(fieldProps: FieldProps) => (
                                <PhoneInput
                                    label="Phone Number"
                                    tooltip="Enter your phone number with the country indicator"
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
    );
};

export const Optional = (): ReactNode => {
    const { t } = useTranslation();

    const validationSchema = object().shape({
        phoneNumber: string()
            .phone(undefined, false, t('common:error-phone-format'))
            .required(t('common:error-email-required'))
    });

    type FormValues = {
        phoneNumber: string;
    };

    const initialValues: FormValues = {
        phoneNumber: ''
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
                        <Field id="phoneNumber" name="phoneNumber">
                            {(fieldProps: FieldProps) => (
                                <PhoneInput optional label="Phone Number" {...fieldProps} />
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
    const { t } = useTranslation();

    const validationSchema = object().shape({
        phoneNumber: string()
            .phone(undefined, false, t('common:error-phone-format'))
            .required(t('common:error-email-required'))
    });

    type FormValues = {
        phoneNumber: string;
    };

    const initialValues: FormValues = {
        phoneNumber: '+33621122955'
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
                        <Field id="phoneNumber" name="phoneNumber">
                            {(fieldProps: FieldProps) => (
                                <PhoneInput disabled label="Phone Number" {...fieldProps} />
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
    const { t } = useTranslation();

    const validationSchema = object().shape({
        phoneNumber: string()
            .phone(undefined, false, t('common:error-phone-format'))
            .required(t('common:error-email-required'))
    });

    type FormValues = {
        phoneNumber: string;
    };

    const initialValues: FormValues = {
        phoneNumber: ''
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
                        <Field id="phoneNumber" name="phoneNumber">
                            {(fieldProps: FieldProps) => (
                                <PhoneInput
                                    label="Phone Number"
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
                        <Button disabled isLoading={isSubmitting} type="submit" variant="primary">
                            Submit
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export const Loading = (): ReactNode => {
    const { t } = useTranslation();

    const validationSchema = object().shape({
        phoneNumber: string()
            .phone(undefined, false, t('common:error-phone-format'))
            .required(t('common:error-email-required'))
    });

    type FormValues = {
        phoneNumber: string;
    };

    const initialValues: FormValues = {
        phoneNumber: ''
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
                        <Field id="phoneNumber" name="phoneNumber">
                            {(fieldProps: FieldProps) => (
                                <PhoneInput isLoading label="Phone Number" {...fieldProps} />
                            )}
                        </Field>
                    </Form>
                );
            }}
        </Formik>
    );
};
