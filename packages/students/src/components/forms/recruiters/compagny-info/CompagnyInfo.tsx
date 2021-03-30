import { Button, Input } from '@applyfuture/ui';
import { scrollToErrors } from '@applyfuture/utils';
import { FormValues } from '@components/forms/recruiters/RecruitersForm';
import { faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, FormikErrors } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    errors: FormikErrors<FormValues>;
    handleNextStep: () => void;
    values: FormValues;
};

const CompagnyInfo: FC<Props> = (props) => {
    const { errors, handleNextStep, values } = props;
    const { t } = useTranslation();

    const validate = (formValues: FormValues) => {
        return !formValues.compagnyName || !formValues.email;
    };

    return (
        <div className="space-y-6">
            <Field id="compagnyName" name="compagnyName">
                {(fieldProps: FieldProps) => (
                    <Input label={t('recruiter-form:compagny-name')} {...fieldProps} />
                )}
            </Field>

            <Field id="email" name="email">
                {(fieldProps: FieldProps) => (
                    <Input label={t('landing:contact-form-email')} {...fieldProps} />
                )}
            </Field>

            <Field id="website" name="website">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:website')} {...fieldProps} />
                )}
            </Field>

            <Field id="facebook" name="facebook">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:facebook')} {...fieldProps} />
                )}
            </Field>

            <Field id="instagram" name="instagram">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:instagram')} {...fieldProps} />
                )}
            </Field>

            <Field id="twitter" name="twitter">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:twitter')} {...fieldProps} />
                )}
            </Field>

            <Field id="linkedIn" name="linkedIn">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiter-form:linked-in')} {...fieldProps} />
                )}
            </Field>

            <div className="flex justify-end">
                <Button
                    disabled={validate(values)}
                    endIcon={faArrowRight}
                    type="button"
                    onClick={() => {
                        scrollToErrors(errors);
                        handleNextStep();
                    }}>
                    {t('common:next-step')}
                </Button>
            </div>
        </div>
    );
};

export default CompagnyInfo;
