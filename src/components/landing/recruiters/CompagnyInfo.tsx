import Button from '@components/core/button/Button';
import Input from '@components/core/input/Input';
import { FormValues } from '@components/landing/recruiters/RecruitersForm';
import { faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

type Props = {
    handleNextStep: () => void;
    values: FormValues;
};

const CompagnyInfo: FC<Props> = (props) => {
    const { handleNextStep, values } = props;
    const { t } = useTranslation();

    const validate = (values: FormValues) => {
        return !values.compagnyName || !values.email;
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
                    onClick={handleNextStep}>
                    {t('common:next-step')}
                </Button>
            </div>
        </div>
    );
};

export default CompagnyInfo;