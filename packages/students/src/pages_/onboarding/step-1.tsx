import { Button, Select } from '@applyfuture/ui';
import { countries } from '@applyfuture/utils';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import Stepper from '@components/onboarding/stepper/Stepper';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import Image from 'next/image';
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

    const steps = [
        { name: 'Step 1', status: 'current' },
        { name: 'Step 2', status: 'upcoming' },
        { name: 'Step 3', status: 'upcoming' },
        { name: 'Step 4', status: 'upcoming' }
    ];

    return (
        <OnboardingLayout title="Onboarding">
            <div className="flex justify-center mt-4 space-x-12 md:mt-8">
                <div className="flex-col space-y-8 md:w-1/2">
                    <Chatbot
                        avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5Z8V7HDhG6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8"
                        name="Charly">
                        <p>Bonjour ! Je suis Charly.</p>
                        <p>
                            Apparemment vous souhaitez étudier dans une école en Europe, faisons un
                            tour de votre projet ensemble.
                        </p>
                        <p className="mt-2">Où avez-vous fait vos études ?</p>
                    </Chatbot>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {(props) => {
                            const { isSubmitting, values } = props;
                            return (
                                <Form className="space-y-4 md:ml-2 md:mr-6 md:pl-20 md:space-y-6 lg:space-y-8">
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
                                        <Button
                                            disabled={!values.country}
                                            isSubmitting={isSubmitting}
                                            type="submit">
                                            Etape suivante
                                        </Button>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
                <div className="hidden md:grid md:place-items-center">
                    <Image
                        alt="world"
                        height="300"
                        src="/assets/images/onboarding/world.svg"
                        width="300"
                    />
                </div>
            </div>
            <Stepper steps={steps} />
        </OnboardingLayout>
    );
};

export default Onboarding;
