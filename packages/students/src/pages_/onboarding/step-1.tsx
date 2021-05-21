import { Button, Select } from '@applyfuture/ui';
import { countries } from '@applyfuture/utils';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import { object, string } from 'yup';
import Image from 'next/image';


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
            <div className="flex flex-row lg:justify-center lg:mt-15">
                <div>
                    <Chatbot
                        avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5Z8V7HDhG6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8"
                        name="Charly">
                        <p className="mt-1">Bonjour ! Je suis Charly.</p>
                        <p className="mt-1">
                            Apparemment vous souhaitez étudier dans une école en Europe,<br /> faisons un tour de
                            votre projet ensemble.
                        </p>
                        <p className="mt-6">Où avez-vous fait vos études ?</p>
                    </Chatbot>
                    <div className="px-6 sm:ml-16 sm:pl-12 md:w-1/2">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}>
                            {(props) => {
                                const { isSubmitting, values } = props;
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
                                            <Button disabled={!values.country} isSubmitting={isSubmitting} type="submit">
                                                Etape suivante
                                            </Button>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>      
                    </div>
                </div>
                <div className="hidden md:block">
                    <Image src="/assets/images/onboarding/world.svg"
                        alt="world"
                        width="320"
                        height="320"
                        className="float-left"
                    />                  
                </div>
            </div>
        </LandingLayout>
    );
};

export default Onboarding;
