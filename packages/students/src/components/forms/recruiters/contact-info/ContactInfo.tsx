import { Button, Input, PhoneInput, Select } from '@applyfuture/ui';
import { countries } from '@applyfuture/utils';
import { FormValues } from '@components/forms/recruiters/RecruitersForm';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    handleNextStep: () => void;
    handlePreviousStep: () => void;
    values: FormValues;
};

const ContactInfo: FC<Props> = (props) => {
    const { handleNextStep, handlePreviousStep, values } = props;
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

    const countriesOptions = countries.map((country) => ({
        label: t(`common:${country.label}`),
        value: country.value
    }));

    return (
        <div className="space-y-6">
            <Field id="mainSourceOfStudents" name="mainSourceOfStudents">
                {(fieldProps: FieldProps) => (
                    <Select
                        label={t('recruiter-form:main-source-of-students')}
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
                    <PhoneInput label={t('recruiter-form:phone')} {...fieldProps} />
                )}
            </Field>

            <Field id="streetAddress" name="streetAddress">
                {(fieldProps: FieldProps) => (
                    <Input label={t('recruiter-form:street-address')} {...fieldProps} />
                )}
            </Field>

            <Field id="city" name="city">
                {(fieldProps: FieldProps) => (
                    <Input label={t('recruiter-form:city')} {...fieldProps} />
                )}
            </Field>

            <Field id="stateOrProvince" name="stateOrProvince">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:state-province')} {...fieldProps} />
                )}
            </Field>

            <Field id="country" name="country">
                {(fieldProps: FieldProps) => (
                    <Select
                        label={t('recruiter-form:country')}
                        options={countriesOptions}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="postalCode" name="postalCode">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:postal-code')} {...fieldProps} />
                )}
            </Field>

            <Field id="skypeId" name="skypeId">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:skype-id')} {...fieldProps} />
                )}
            </Field>

            <Field id="whatsAppId" name="whatsAppId">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:whats-app-id')} {...fieldProps} />
                )}
            </Field>

            <Field id="ref" name="ref">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:referred-question')} {...fieldProps} />
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
                    onClick={handleNextStep}>
                    {t('common:next-step')}
                </Button>
            </div>
        </div>
    );
};

export default ContactInfo;
