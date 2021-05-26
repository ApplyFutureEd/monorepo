import { Button, Select } from '@applyfuture/ui';
import { educationLevels } from '@applyfuture/utils';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import Stepper from '@components/onboarding/stepper/Stepper';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import Image from 'next/image';
import { useTranslation } from 'next-translate';
import React, { FC } from 'react';
import { object, string } from 'yup';

const Onboarding: FC = () => {
    const { t } = useTranslation();

    const validationSchema = object().shape({
        educationLevels: string().required(t('common:error-field-required')).nullable()
    });

    type FormValues = {
        educationLevels: string;
    };

    const initialValues: FormValues = { educationLevels: '' };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { educationLevels } = values;
        try {
            console.log(educationLevels);
        } catch (error) {
            console.log(error);
        }
        actions.setSubmitting(false);
    };

    const educationLevelOptions = educationLevels.map((educationLevels) => ({
        label: t(`programs:${educationLevels.label}`),
        value: educationLevels.value
    }));

    const steps = [
        { name: 'Step 1', status: 'current' },
        { name: 'Step 2', status: 'current' },
        { name: 'Step 3', status: 'current' },
        { name: 'Step 4', status: 'current' }
    ];

    return (
        <OnboardingLayout title="Onboarding">
            <div className="lg:mt-15 flex flex-row lg:justify-center">
                <div>
                    <Chatbot
                        avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5Z8V7HDhG6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8"
                        name="Charly">
                        <p className="mt-1">Génial!</p>
                        <p className="mt-1 pr-24">À quel niveau de vos études êtes vous?</p>
                    </Chatbot>
                    <div className="px-6 sm:ml-16 sm:pl-12 md:w-3/4">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}>
                            {(props) => {
                                const { isSubmitting, values } = props;
                                return (
                                    <Form className="space-y-6">
                                        <Field id="educationLevels" name="educationLevels">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    options={educationLevelOptions}
                                                    placeholder="Selectionner un pays"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                        <div>
                                            <Button
                                                disabled={!values.educationLevels}
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
                </div>
                <div className="hidden md:block">
                    <Image
                        alt="world"
                        className="float-left"
                        height="320"
                        src="/assets/images/onboarding/world.svg"
                        width="320"
                    />
                </div>
            </div>
            <div className="mt-16 md:mt-24">
                <Stepper steps={steps} />
            </div>
        </OnboardingLayout>
    );
};

export default Onboarding;
