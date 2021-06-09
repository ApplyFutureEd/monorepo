import { Button, Select } from '@applyfuture/ui';
import { degrees, useLocalStorage } from '@applyfuture/utils';
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import { object, string } from 'yup';

const DegreeForm: FC = () => {
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

    return (
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
                                disabled={!values.degree}
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

export default DegreeForm;
