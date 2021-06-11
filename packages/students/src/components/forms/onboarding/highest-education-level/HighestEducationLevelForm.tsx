import { Button, Select } from '@applyfuture/ui';
import { educationLevels, useLocalStorage } from '@applyfuture/utils';
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import { object, string } from 'yup';

const HighestEducationLevelForm: FC = () => {
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

    return (
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
    );
};

export default HighestEducationLevelForm;
