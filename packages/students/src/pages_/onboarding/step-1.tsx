import { Button, Select } from '@applyfuture/ui';
import { countries } from '@applyfuture/utils';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import { object, string } from 'yup';

const Onboarding: FC = () => {
    const { t } = useTranslation();

    const validationSchema = object().shape({
        country: string().required(t('common:error-field-required')).nullable()
    });

    type FormValues = {
        country: string;
    };

    const initialValues: FormValues = { country: '' };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { country } = values;
        try {
            console.log(country);
        } catch (error) {
            console.log(error);
        }
        actions.setSubmitting(false);
    };

    const countriesOptions = countries.map((country) => ({
        label: t(`common:${country.label}`),
        value: country.value
    }));

    return (
        <LandingLayout title="Onboarding">
            <Chatbot
                avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5Z8V7HDhG6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8"
                name="Charly">
                <p className="mt-1">Bonjour ! Je suis Charly.</p>
                <p className="mt-1">
                    Apparemment vous souhaitez étudier dans une école en Europe, faisons un tour de
                    votre projet ensemble.
                </p>
                <p className="mt-6">Où avez-vous fais vos études ?</p>
            </Chatbot>
            <div className="flex">
                <div className="w-1/3">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {(props) => {
                            const { isSubmitting } = props;

                            return (
                                <Form className="space-y-6">
                                    <Field id="country" name="country">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                options={countriesOptions}
                                                placeholder="Selectionner un pays"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                    <div>
                                        <Button isSubmitting={isSubmitting} type="submit">
                                            Etape suivante
                                        </Button>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </LandingLayout>
    );
};

export default Onboarding;
