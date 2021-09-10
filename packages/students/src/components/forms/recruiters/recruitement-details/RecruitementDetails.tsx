import { Button, Checkbox, Input, PhoneInput, Select } from '@applyfuture/ui';
import { countries, scrollToErrors } from '@applyfuture/utils';
import { FormValues } from '@components/forms/recruiters/RecruitersForm';
import { faArrowLeft, faCheck, faPaperPlane } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, FormikErrors } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    errorMessage: string;
    errors: FormikErrors<FormValues>;
    handlePreviousStep: () => void;
    isSubmitting: boolean;
    submitted: boolean;
    values: FormValues;
};

const RecruitementDetails: FC<Props> = (props) => {
    const { errorMessage, errors, handlePreviousStep, isSubmitting, submitted, values } = props;
    const { t } = useTranslation();

    const validate = (formValues: FormValues) => {
        return (
            isSubmitting ||
            !formValues.belongTo ||
            !formValues.marketingMethods ||
            !formValues.averageServiceFee ||
            !formValues.estimatedStudents ||
            !formValues.confirmation
        );
    };

    const handleClick = () => {
        scrollToErrors(errors);
    };

    const countriesOptions = countries.map((country) => ({
        label: t(`common:${country.label}`),
        value: country.value
    }));

    const studentsOptions = [
        {
            label: '1 - 5',
            value: '1 - 5'
        },
        {
            label: '6 - 20',
            value: '6 - 20'
        },
        {
            label: '21 - 50',
            value: '21 - 50'
        },
        {
            label: '51 - 250',
            value: '51 - 250'
        },
        {
            label: t('recruiter-form:more-than'),
            value: 'More than 251'
        }
    ];

    const marketingMethodsOptions = [
        {
            label: t('recruiter-form:type-of-marketing-answer-1'),
            value: 'Online Advertising'
        },
        {
            label: t('recruiter-form:type-of-marketing-answer-2'),
            value: 'Education Fairs'
        },
        {
            label: t('recruiter-form:type-of-marketing-answer-3'),
            value: 'Sub-Agent Network'
        },
        {
            label: t('recruiter-form:type-of-marketing-answer-4'),
            value: 'Newspaper and Magazine Advertising'
        }
    ];

    const averageServiceFeeOptions = [
        {
            label: '0 - 250€',
            value: '0 - 250€'
        },
        {
            label: '200 - 500€',
            value: '200 - 500€'
        },
        {
            label: '500 - 1000€',
            value: '500 - 1000€'
        },
        {
            label: '1000 - 2500€',
            value: '1000 - 2500€'
        },
        {
            label: `${t('recruiter-form:more-than')} 2500€`,
            value: 'More than 2500€'
        }
    ];

    return (
        <div className="space-y-6">
            <Field id="beginRecruitingDate" name="beginRecruitingDate">
                {(fieldProps: FieldProps) => (
                    <Input
                        optional
                        label={t('recruiter-form:when-begin-question')}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="servicesProvided" name="servicesProvided">
                {(fieldProps: FieldProps) => (
                    <Input
                        label={t('recruiter-form:service-provide-question')}
                        rows={5}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="institutionsRepresenting" name="institutionsRepresenting">
                {(fieldProps: FieldProps) => (
                    <Input
                        optional
                        label={t('recruiter-form:institutions-representing-question')}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="belongTo" name="belongTo">
                {(fieldProps: FieldProps) => (
                    <Input
                        label={t('recruiter-form:organization-belong-to-question')}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="recruitFrom" name="recruitFrom">
                {(fieldProps: FieldProps) => (
                    <Select
                        optional
                        label={t('recruiter-form:where-recruit-from-question')}
                        options={countriesOptions}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="howManyStudents" name="howManyStudents">
                {(fieldProps: FieldProps) => (
                    <Select
                        label={t('recruiter-form:how-many-students-question')}
                        options={studentsOptions}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="marketingMethods" name="marketingMethods">
                {(fieldProps: FieldProps) => (
                    <Select
                        label={t('recruiter-form:type-of-marketing-question')}
                        options={marketingMethodsOptions}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="averageServiceFee" name="averageServiceFee">
                {(fieldProps: FieldProps) => (
                    <Select
                        label={t('recruiter-form:average-fee-question')}
                        options={averageServiceFeeOptions}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="estimatedStudents" name="estimatedStudents">
                {(fieldProps: FieldProps) => (
                    <Select
                        label={t('recruiter-form:estimate-students-refer-question')}
                        options={studentsOptions}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="additionalComments" name="additionalComments">
                {(fieldProps: FieldProps) => (
                    <Input
                        optional
                        label={t('recruiter-form:additional-comments')}
                        rows={5}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="referenceName" name="referenceName">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:reference-name')} {...fieldProps} />
                )}
            </Field>

            <Field id="referenceInstitution" name="referenceInstitution">
                {(fieldProps: FieldProps) => (
                    <Input
                        optional
                        label={t('recruiter-form:reference-institution-name')}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="referenceBusinessEmail" name="referenceBusinessEmail">
                {(fieldProps: FieldProps) => (
                    <Input
                        optional
                        label={t('recruiter-form:reference-business-email')}
                        {...fieldProps}
                    />
                )}
            </Field>

            <Field id="referencePhone" name="referencePhone">
                {(fieldProps: FieldProps) => (
                    <PhoneInput label={t('recruiter-form:reference-phone')} {...fieldProps} />
                )}
            </Field>

            <Field id="referenceWebsite" name="referenceWebsite">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:reference-website')} {...fieldProps} />
                )}
            </Field>

            <Field id="confirmation" name="confirmation">
                {(fieldProps: FieldProps) => (
                    <Checkbox label={t('recruiter-form:i-declare')} {...fieldProps} />
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
                {submitted ? (
                    <Button startIcon={faCheck} variant="success">
                        {t('landing:contact-form-email-sent')}
                    </Button>
                ) : (
                    <Button
                        disabled={validate(values)}
                        isSubmitting={isSubmitting}
                        startIcon={faPaperPlane}
                        type="submit"
                        variant="primary"
                        onClick={handleClick}>
                        {t('landing:contact-form-submit-button')}
                    </Button>
                )}
            </div>
            {errorMessage && <p className="mt-2 text-red-600 text-sm">{errorMessage}</p>}
        </div>
    );
};

export default RecruitementDetails;
