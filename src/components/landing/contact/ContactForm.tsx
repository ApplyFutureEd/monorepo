import Button from '@components/core/button/Button';
import Input from '@components/core/input/Input';
import { faCheck } from '@fortawesome/pro-light-svg-icons';
import { API } from 'aws-amplify';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';

const ContactForm: FC = () => {
    const { t } = useTranslation(['common', 'landing']);
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
            setErrorMessage(t('common:contact-form-generic-error'));
            actions.setSubmitting(false);
            setSubmitted(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <Form className="grid gap-y-6 grid-cols-1">
                    <Field id="email" name="email">
                        {(props: FormikHelpers<FormValues>) => (
                            <Input label={t('landing:contact-form-email')} {...props} />
                        )}
                    </Field>
                    <div className="flex space-x-4">
                        <div className="flex-grow">
                            <Field id="firstName" name="firstName">
                                {(props: FormikHelpers<FormValues>) => (
                                    <Input
                                        label={t('landing:contact-form-first-name')}
                                        {...props}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className="flex-grow">
                            <Field id="lastName" name="lastName">
                                {(props: FormikHelpers<FormValues>) => (
                                    <Input label={t('landing:contact-form-last-name')} {...props} />
                                )}
                            </Field>
                        </div>
                    </div>
                    <Field id="message" name="message">
                        {(props: FormikHelpers<FormValues>) => (
                            <Input label={t('landing:contact-form-message')} rows={5} {...props} />
                        )}
                    </Field>
                    <div className="flex items-center justify-end">
                        {submitted ? (
                            <Button startIcon={faCheck} variant="success">
                                {t('landing:contact-form-email-sent')}
                            </Button>
                        ) : (
                            <Button isLoading={isSubmitting} type="submit" variant="primary">
                                {t('landing:contact-form-submit-button')}
                            </Button>
                        )}
                    </div>
                    {errorMessage && <p className="mt-2 text-red-600 text-sm">{errorMessage}</p>}
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
