import { Button, Select } from '@applyfuture/ui';
import { supportedCountries, useLocalStorage } from '@applyfuture/utils';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import { object, string } from 'yup';

const CountryForm: FC = () => {
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
    );
};

export default CountryForm;
