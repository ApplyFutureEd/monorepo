import {
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables,
    updateStudent,
    UpdateStudentMutation
} from '@applyfuture/graphql';
import { Button, Select } from '@applyfuture/ui';
import {
    degrees,
    getDisciplineLabel,
    graphql,
    useAuthenticatedUser,
    useLocalStorage,
    useQuery,
    withPrivateAccess
} from '@applyfuture/utils';
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

const OnboardingDegreePage: FC = () => {
    const { user } = useAuthenticatedUser();

    const { data: studentData, isLoading: studentIsLoading } = useQuery<
        GetStudentByEmailQuery,
        GetStudentByEmailQueryVariables
    >(getStudentByEmail, { email: user?.attributes.email });
    const student = studentData?.getStudentByEmail?.items?.[0];

    const { t } = useTranslation();
    const router = useRouter();
    const [onboarding, setOnboarding] = useLocalStorage('onboarding', {
        country: '',
        degree: '',
        discipline: '',
        highestEducationLevel: ''
    });

    const validationSchema = object().shape({
        degree: string().required(t('common:error-field-required')).nullable()
    });

    type FormValues = {
        degree: string;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({ degree: '' });

    useEffect(() => {
        if (onboarding) {
            setInitialValues({
                degree: onboarding.degree
            });
        }
    }, [onboarding]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { degree } = values;
        try {
            setOnboarding({
                ...onboarding,
                degree: degree
            });
            await graphql<UpdateStudentMutation>(updateStudent, {
                input: {
                    degrees: [degree],
                    disciplines: [onboarding.discipline],
                    highestEducationLevel: onboarding.highestEducationLevel,
                    id: student?.id
                }
            });
            router.push('/onboarding/suggestions');
        } catch (error) {
            console.log(error);
        }
        actions.setSubmitting(false);
    };

    const degreesOptions = degrees.map((degree) => ({
        label: t(`profile:${degree.label}`),
        value: degree.value
    }));

    const steps = [
        { name: 'country', status: 'DONE' },
        { name: 'highest-education-level', status: 'DONE' },
        { name: 'discipline', status: 'DONE' },
        { name: 'degree', status: 'CURRENT' }
    ];

    const disciplineLabel = getDisciplineLabel(onboarding.discipline);

    return (
        <OnboardingLayout title={t('profile:onboarding-page-title')}>
            <div className="container flex justify-center mt-4 space-x-12 md:mt-8">
                <div className="flex-col space-y-8 md:w-1/2">
                    <Chatbot name={t('profile:onboarding-chatbot-name')}>
                        <p className="mt-1">
                            {t('profile:onboarding-step-degree-chatbot-text-1', {
                                discipline: t(`profile:${disciplineLabel}`)
                            })}
                        </p>
                        <p className="mt-1">{t('profile:onboarding-step-degree-chatbot-text-2')}</p>
                    </Chatbot>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {(props) => {
                            const { isSubmitting, values } = props;
                            return (
                                <Form className="space-y-4 md:ml-2 md:mr-6 md:pl-20 md:space-y-6 lg:space-y-8">
                                    <Field id="degree" name="degree">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                options={degreesOptions}
                                                placeholder={t(
                                                    'profile:onboarding-step-degree-select-placeholder'
                                                )}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                    <div className="flex space-x-2">
                                        <Link href="/onboarding/discipline">
                                            <Button
                                                isSubmitting={isSubmitting}
                                                startIcon={faArrowLeft}
                                                variant="secondary">
                                                {t('profile:onboarding-previous-step')}
                                            </Button>
                                        </Link>
                                        <Button
                                            disabled={!values.degree || studentIsLoading}
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

export default withPrivateAccess(OnboardingDegreePage, {
    groups: ['student'],
    redirection: '/sign-in'
});
