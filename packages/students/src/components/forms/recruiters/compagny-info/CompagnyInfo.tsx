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

    const handleClick = () => {
        scrollToErrors(errors);
        handleNextStep();
    };

    return (
        <div className="space-y-6">
            <Field id="compagnyName" name="compagnyName">
                {(fieldProps: FieldProps) => (
                    <Input label={t('recruiters:compagny-name')} {...fieldProps} />
                )}
            </Field>

            <Field id="email" name="email">
                {(fieldProps: FieldProps) => (
                    <Input label={t('landing:contact-form-email')} {...fieldProps} />
                )}
            </Field>

            <Field id="website" name="website">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiters:website')} {...fieldProps} />
                )}
            </Field>

            <Field id="facebook" name="facebook">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiters:facebook')} {...fieldProps} />
                )}
            </Field>

            <Field id="instagram" name="instagram">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiters:instagram')} {...fieldProps} />
                )}
            </Field>

            <Field id="twitter" name="twitter">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiters:twitter')} {...fieldProps} />
                )}
            </Field>

            <Field id="linkedIn" name="linkedIn">
                {(fieldProps: FieldProps) => (
                    <Input optional label={t('recruiters:linked-in')} {...fieldProps} />
                )}
            </Field>

            <div className="flex justify-end">
                <Button disabled={validate(values)} endIcon={faArrowRight} onClick={handleClick}>
                    {t('common:next-step')}
                </Button>
            </div>
        </div>
    );
};

export default CompagnyInfo;
