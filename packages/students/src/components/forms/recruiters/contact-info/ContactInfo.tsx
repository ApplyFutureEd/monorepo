import { Button, Input, PhoneInput, Select } from '@applyfuture/ui';
import { countries, scrollToErrors } from '@applyfuture/utils';
import { FormValues } from '@components/forms/recruiters/RecruitersForm';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, FormikErrors } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    errors: FormikErrors<FormValues>;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
    values: FormValues;
};

const ContactInfo: FC<Props> = (props) => {
    const { errors, handleNextStep, handlePreviousStep, values } = props;
    const { t } = useTranslation();

    const validate = (formValues: FormValues) => {
        return (
            !formValues.mainSourceOfStudents ||
            !formValues.firstName ||
            !formValues.lastName ||
            !formValues.phone ||
            !formValues.streetAddress ||
            !formValues.city
        );
    };

    const handleClick = () => {
        scrollToErrors(errors);
        handleNextStep();
    };

    const countriesOptions = countries.map((country) => ({
        label: t(`common:${country.label}`),
        value: country.value
    }));

    return (
        <div className="space-y-6">
            <Field id="mainSourceOfStudents" name="mainSourceOfStudents">
                {(fieldProps: FieldProps) => (
                    <Select
                        label={t('recruiters:main-source-of-students')}
                        options={countriesOptions}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="firstName" name="firstName">
                {(fieldProps: FieldProps) => (
                    <Input label={t('landing:contact-form-first-name')} {...fieldProps} />
                )}
            </Field>

            <Field id="lastName" name="lastName">
                {(fieldProps: FieldProps) => (
                    <Input label={t('landing:contact-form-last-name')} {...fieldProps} />
                )}
            </Field>

            <Field id="phone" name="phone">
                {(fieldProps: FieldProps) => (
                    <PhoneInput label={t('recruiters:phone')} {...fieldProps} />
                )}
            </Field>

            <Field id="streetAddress" name="streetAddress">
                {(fieldProps: FieldProps) => (
                    <Input label={t('recruiters:street-address')} {...fieldProps} />
                )}
            </Field>

            <Field id="city" name="city">
                {(fieldProps: FieldProps) => <Input label={t('recruiters:city')} {...fieldProps} />}
            </Field>

            <Field id="stateOrProvince" name="stateOrProvince">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiters:state-province')} {...fieldProps} />
                )}
            </Field>

            <Field id="country" name="country">
                {(fieldProps: FieldProps) => (
                    <Select
                        label={t('recruiters:country')}
                        options={countriesOptions}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="postalCode" name="postalCode">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiters:postal-code')} {...fieldProps} />
                )}
            </Field>

            <Field id="skypeId" name="skypeId">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiters:skype-id')} {...fieldProps} />
                )}
            </Field>

            <Field id="whatsAppId" name="whatsAppId">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiters:whats-app-id')} {...fieldProps} />
                )}
            </Field>

            <Field id="ref" name="ref">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiters:referred-question')} {...fieldProps} />
                )}
            </Field>

            <div className="flex justify-end space-x-4">
                <Button
                    startIcon={faArrowLeft}
                    type="button"
                    variant="secondary"
                    onClick={handlePreviousStep}>
                    {t('common:previous-step')}
                </Button>
                <Button
                    disabled={validate(values)}
                    endIcon={faArrowRight}
                    type="button"
                    onClick={handleClick}>
                    {t('common:next-step')}
                </Button>
            </div>
        </div>
    );
};

export default ContactInfo;
