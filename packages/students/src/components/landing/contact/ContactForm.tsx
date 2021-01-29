import { Button, Input } from '@applyfuture/ui';
import { faCheck, faPaperPlane } from '@fortawesome/pro-light-svg-icons';
import { API } from 'aws-amplify';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { object, string } from 'yup';

const ContactForm: FC = () => {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const validationSchema = object().shape({
        email: string()
            .required(t('common:error-email-required'))
            .email(t('common:error-email-format')),
        firstName: string().required(t('common:error-required')),
        lastName: string().required(t('common:error-required')),
        message: string().required(t('common:error-required'))
    });

    type FormValues = {
        email: string;
        firstName: string;
        lastName: string;
        message: string;
    };

    const initialValues: FormValues = {
        email: '',
        firstName: '',
        lastName: '',
        message: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            await API.post('REST', '/ses/contact-form', {
                body: values
            });
            actions.setSubmitting(false);
            setSubmitted(true);
        } catch (error) {
            setErrorMessage(t('landing:contact-form-error'));
            actions.setSubmitting(false);
            setSubmitted(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;

                return (
                    <Form className="grid gap-y-6 grid-cols-1">
                        <Field id="email" name="email">
                            {(fieldProps: FieldProps) => (
                                <Input label={t('landing:contact-form-email')} {...fieldProps} />
                            )}
                        </Field>
                        <div className="flex space-x-4">
                            <div className="flex-grow">
                                <Field id="firstName" name="firstName">
                                    {(fieldProps: FieldProps) => (
                                        <Input
                                            label={t('landing:contact-form-first-name')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className="flex-grow">
                                <Field id="lastName" name="lastName">
                                    {(fieldProps: FieldProps) => (
                                        <Input
                                            label={t('landing:contact-form-last-name')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>
                        <Field id="message" name="message">
                            {(fieldProps: FieldProps) => (
                                <Input
                                    label={t('landing:contact-form-message')}
                                    rows={5}
                                    {...fieldProps}
                                />
                            )}
                        </Field>
                        <div className="flex items-center justify-end">
                            {submitted ? (
                                <Button startIcon={faCheck} variant="success">
                                    {t('landing:contact-form-email-sent')}
                                </Button>
                            ) : (
                                <Button
                                    disabled={isSubmitting}
                                    isSubmitting={isSubmitting}
                                    startIcon={faPaperPlane}
                                    type="submit"
                                    variant="primary">
                                    {t('landing:contact-form-submit-button')}
                                </Button>
                            )}
                        </div>
                        {errorMessage && (
                            <p className="mt-2 text-red-600 text-sm">{errorMessage}</p>
                        )}
                    </Form>
                );
            }}
        </Formik>
    );
};

export default ContactForm;
