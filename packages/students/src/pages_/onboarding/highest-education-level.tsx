import { Button, Select } from '@applyfuture/ui';
import { educationLevels, useLocalStorage } from '@applyfuture/utils';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import Stepper from '@components/onboarding/stepper/Stepper';
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import { object, string } from 'yup';

const OnboardingHighestEducationLevelPage: FC = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [onboarding, setOnboarding] = useLocalStorage('onboarding', {
        country: '',
        degree: '',
        discipline: '',
        highestEducationLevel: ''
    });

    const validationSchema = object().shape({
        highestEducationLevel: string().required(t('common:error-field-required')).nullable()
    });

    type FormValues = {
        highestEducationLevel: string;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({ highestEducationLevel: '' });

    useEffect(() => {
        if (onboarding) {
            setInitialValues({
                highestEducationLevel: onboarding.highestEducationLevel
            });
        }
    }, [onboarding]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { highestEducationLevel } = values;
        try {
            setOnboarding({
                ...onboarding,
                highestEducationLevel: highestEducationLevel
            });
            router.push('/onboarding/discipline');
        } catch (error) {
            console.log(error);
        }
        actions.setSubmitting(false);
    };

    const educationLevelOptions = educationLevels.map((educationLevel) => ({
        label: t(`programs:${educationLevel.label}`),
        value: educationLevel.value
    }));

    const steps = [
        { name: 'country', status: 'DONE' },
        { name: 'highest-education-level', status: 'CURRENT' },
        { name: 'discipline', status: 'UPCOMING' },
        { name: 'degree', status: 'UPCOMING' }
    ];

    return (
        <OnboardingLayout title={t('profile:onboarding-page-title')}>
            <div className="container flex justify-center mt-4 space-x-12 md:mt-8">
                <div className="flex-col space-y-8 md:w-1/2">
                    <Chatbot name={t('profile:onboarding-chatbot-name')}>
                        <p>
                            {t('profile:onboarding-step-highest-education-level-chatbot-text-1', {
                                country: onboarding.country
                            })}
                        </p>
                        <p className="mt-2">
                            {t('profile:onboarding-step-highest-education-level-chatbot-text-2')}
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
                                    <Field id="highestEducationLevel" name="highestEducationLevel">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                options={educationLevelOptions}
                                                placeholder={t(
                                                    'profile:onboarding-step-highest-education-level-select-placeholder'
                                                )}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                    <div className="flex space-x-2">
                                        <Link href="/onboarding/country">
                                            <Button
                                                isSubmitting={isSubmitting}
                                                startIcon={faArrowLeft}
                                                variant="secondary">
                                                {t('profile:onboarding-previous-step')}
                                            </Button>
                                        </Link>
                                        <Button
                                            disabled={!values.highestEducationLevel}
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
                        src="/assets/images/onboarding/world.svg"
                        width="300"
                    />
                </div>
            </div>
            <Stepper steps={steps} />
        </OnboardingLayout>
    );
};

export default OnboardingHighestEducationLevelPage;
