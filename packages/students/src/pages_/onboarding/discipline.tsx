import { Button } from '@applyfuture/ui';
import { disciplines, useLocalStorage } from '@applyfuture/utils';
import Chatbot from '@components/onboarding/chatbot/Chatbot';
import DisciplineButton from '@components/onboarding/discipline-button/DisciplineButton';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import Stepper from '@components/onboarding/stepper/Stepper';
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons';
import { Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

const OnboardingDisciplinePage: FC = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const [onboarding, setOnboarding] = useLocalStorage('onboarding', {
        country: '',
        degree: '',
        discipline: '',
        highestEducationLevel: ''
    });

    type FormValues = {
        discipline: string;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({ discipline: '' });

    useEffect(() => {
        if (onboarding) {
            setInitialValues({
                discipline: onboarding.discipline
            });
        }
    }, [onboarding]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { discipline } = values;
        try {
            setOnboarding({
                ...onboarding,
                discipline: discipline
            });
            router.push('/onboarding/degree');
        } catch (error) {
            console.log(error);
        }
        actions.setSubmitting(false);
    };

    const steps = [
        { name: 'country', status: 'DONE' },
        { name: 'highest-education-level', status: 'DONE' },
        { name: 'discipline', status: 'CURRENT' },
        { name: 'degree', status: 'UPCOMING' }
    ];

    const disciplinesButtons = disciplines.map((discipline) => ({
        icon: discipline.icon,
        label: t(`profile:${discipline.label}`),
        value: discipline.value
    }));

    return (
        <OnboardingLayout title={t('profile:onboarding-page-title')}>
            <div className="container flex-col mt-4 md:mt-8 md:space-y-6">
                <div className="flex justify-center md:ml-6 md:w-1/2">
                    <Chatbot name={t('profile:onboarding-chatbot-name')}>
                        <p className="mt-1">
                            {t('profile:onboarding-step-discipline-chatbot-text-1')}
                        </p>
                        <p className="mt-1">
                            {t('profile:onboarding-step-discipline-chatbot-text-2')}
                        </p>
                    </Chatbot>
                    <div />
                </div>
                <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
                    {(props) => {
                        const { isSubmitting, setFieldValue, values } = props;
                        const handleClick = (value: string) => {
                            setFieldValue('discipline', value);
                        };

                        return (
                            <Form>
                                <div className="grid gap-1 grid-cols-1 justify-items-center py-8 md:gap-4 md:grid-cols-2 lg:container">
                                    {disciplinesButtons.map((discipline) => (
                                        <DisciplineButton
                                            key={discipline.value}
                                            handleClick={handleClick}
                                            icon={discipline.icon}
                                            label={discipline.label}
                                            toggle={discipline.value === values.discipline}
                                            value={discipline.value}
                                        />
                                    ))}
                                </div>
                                <div className="flex space-x-2 md:px-8">
                                    <Link href="/onboarding/highest-education-level">
                                        <Button
                                            isSubmitting={isSubmitting}
                                            startIcon={faArrowLeft}
                                            variant="secondary">
                                            {t('profile:onboarding-previous-step')}
                                        </Button>
                                    </Link>
                                    <Button
                                        disabled={!values.discipline}
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
            <Stepper steps={steps} />
        </OnboardingLayout>
    );
};

export default OnboardingDisciplinePage;
