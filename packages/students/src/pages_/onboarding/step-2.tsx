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
            <div className="grid grid-cols-1 mb-auto md:container md:grid-cols-2 md:pt-5">
                <div className="md:ml-15 md:pt-15">
                    <Chatbot
                        avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5Z8V7HDhG6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8"
                        name="Charly">
                        <p className="mt-1">Génial!</p>
                        <p className="mt-1">À quel niveau d études êtes vous ?</p>
                    </Chatbot>
                </div>
                <div className="place-item-center hidden md:grid md:-ml-32">
                    <Image
                        alt="world"
                        className=""
                        height="320"
                        src="/assets/images/onboarding/world.svg"
                        width="320"
                    />
                </div>
                <div className="container md:block md:-mt-10 md:mb-auto md:w-2/3">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {(props) => {
                            const { isSubmitting, values } = props;
                            return (
                                <Form className="space-y-6">
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
                <div className="hidden md:grid" />
            </div>
            <Stepper steps={steps} />
        </OnboardingLayout>
    );
};

export default Onboarding;
