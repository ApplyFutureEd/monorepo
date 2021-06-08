import { Button, Select } from '@applyfuture/ui';
import { supportedCountries, useLocalStorage } from '@applyfuture/utils';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import Stepper from '@components/onboarding/stepper/Stepper';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import { object, string } from 'yup';

const OnboardingCountryPage: FC = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [onboarding, setOnboarding] = useLocalStorage('onboarding', {
        country: '',
        degree: '',
        discipline: '',
        highestEducationLevel: ''
    });

    const validationSchema = object().shape({
        country: string().required(t('common:error-field-required')).nullable()
    });

    type FormValues = {
        country: string;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({ country: '' });

    useEffect(() => {
        if (onboarding) {
            setInitialValues({
                country: onboarding.country
            });
        }
    }, [onboarding]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { country } = values;
        try {
            setOnboarding({
                ...onboarding,
                country: country
            });
            router.push('/onboarding/highest-education-level');
        } catch (error) {
            console.log(error);
        }
        actions.setSubmitting(false);
    };

    const countriesOptions = supportedCountries.map((country) => ({
        label: t(`common:${country.label}`),
        value: country.value
    }));

    const steps = [
        { name: 'country', status: 'CURRENT' },
        { name: 'highest-education-level', status: 'UPCOMING' },
        { name: 'discipline', status: 'UPCOMING' },
        { name: 'degree', status: 'UPCOMING' }
    ];

    return (
        <OnboardingLayout title={t('profile:onboarding-page-title')}>
            <div className="container flex justify-center mt-4 space-x-12 md:mt-8">
                <div className="flex-col space-y-8 md:w-1/2">
                    <Chatbot name={t('profile:onboarding-chatbot-name')}>
                        <p>{t('profile:onboarding-step-country-chatbot-text-1')}</p>
                        <p>{t('profile:onboarding-step-country-chatbot-text-2')}</p>
                        <p className="mt-2">
                            {t('profile:onboarding-step-country-chatbot-text-3')}
                        </p>
                    </Chatbot>
                    <Formik
                        enableReinitialize
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
                                                placeholder={t(
                                                    'profile:onboarding-step-country-select-placeholder'
                                                )}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                    <div>
                                        <Button
                                            disabled={!values.country}
                                            isSubmitting={isSubmitting}
                                            type="submit">
                                            {t('profile:onboarding-next-step')}
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
                        src="/assets/images/onboarding/country.svg"
                        width="300"
                    />
                </div>
            </div>
            <Stepper steps={steps} />
        </OnboardingLayout>
    );
};

export default OnboardingCountryPage;
