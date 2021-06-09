import { Button } from '@applyfuture/ui';
import { disciplines, useLocalStorage } from '@applyfuture/utils';
import DisciplineButton from '@components/onboarding/discipline-button/DisciplineButton';
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons';
import { Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

const DisciplineForm: FC = () => {
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

    const disciplinesButtons = disciplines.map((discipline) => ({
        icon: discipline.icon,
        label: t(`profile:${discipline.label}`),
        value: discipline.value
    }));

    return (
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
    );
};

export default DisciplineForm;
