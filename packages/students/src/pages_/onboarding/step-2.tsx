import { Button, Select } from '@applyfuture/ui';
import { educationLevels } from '@applyfuture/utils';
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
        educationLevels: string().required(t('common:error-field-required')).nullable()
    });

    type FormValues = {
        educationLevel: string;
    };

    const initialValues: FormValues = { educationLevel: '' };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { educationLevel } = values;
        try {
            console.log(educationLevel);
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
        { name: 'Step 1', status: 'current' },
        { name: 'Step 2', status: 'current' },
        { name: 'Step 3', status: 'upcoming' },
        { name: 'Step 4', status: 'upcoming' }
    ];

    return (
        <OnboardingLayout title="Onboarding">
            <div className="flex mt-4 space-x-3 md:mt-12 md:mx-auto">
                <div className="flex-col max-w-lg space-y-8">
                    <Chatbot
                        avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5Z8V7HDhG6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8"
                        name="Charly">
                        <p>Génial!</p>
                        <p className="mt-2">À quel niveau d études êtes vous ?</p>
                    </Chatbot>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {(props) => {
                            const { isSubmitting, values } = props;
                            return (
                                <Form className="space-y-4 md:ml-2 md:pl-20 md:space-y-6 lg:space-y-8">
                                    <Field id="educationLevel" name="educationLevel">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                options={educationLevelOptions}
                                                placeholder="Selectionner un niveau d'étude"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                    <div>
                                        <Button
                                            disabled={!values.educationLevel}
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
                <div className="hidden md:flex md:mx-auto">
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
