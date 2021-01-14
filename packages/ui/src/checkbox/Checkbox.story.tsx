import { Button } from './../button/Button';
import { Checkbox } from './Checkbox';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import React, { ReactNode } from 'react';
import { boolean, object } from 'yup';

export default {
    component: Checkbox,
    title: 'Checkbox'
};

export const Default = (): ReactNode => {
    const validationSchema = object().shape({
        consent: boolean()
    });

    type FormValues = {
        consent: boolean;
    };

    const initialValues: FormValues = {
        consent: false
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
                        <Field id="consent" name="consent">
                            {(fieldProps: FieldProps) => (
                                <Checkbox
                                    details="All information provided can be used for business and marketing purpose"
                                    label="I declare that the information contained in this application and all supporting documentation is true and correct"
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
