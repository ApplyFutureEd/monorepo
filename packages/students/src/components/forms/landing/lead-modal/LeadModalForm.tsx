import { Button, Input, Loader } from '@applyfuture/ui';
import { faCheck } from '@fortawesome/pro-light-svg-icons';
import { API } from 'aws-amplify';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { object, string } from 'yup';

type Props = {
    setOpen: (value: boolean) => void;
};

const LeadModalForm: FC<Props> = (props) => {
    const { setOpen } = props;
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const validationSchema = object().shape({
        email: string().required(t('common:error-required')),
        firstName: string().required(t('common:error-required'))
    });

    type FormValues = {
        email: string;
        firstName: string;
    };

    const initialValues: FormValues = {
        email: '',
        firstName: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            await API.post('rest', '/contact-form', {
                body: {
                    ...values,
                    lastName: '',
                    message: 'New lead from modal'
                }
            });
            actions.setSubmitting(false);
            setSubmitted(true);
            setTimeout(() => {
                setOpen(false);
            }, 1000);
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
                    <Form className="grid gap-y-6 grid-cols-1 w-full text-left">
                        <Field id="firstName" name="firstName">
                            {(fieldProps: FieldProps) => (
                                <Input
                                    label={t('landing:contact-form-first-name')}
                                    type="text"
                                    {...fieldProps}
                                />
                            )}
                        </Field>

                        <Field id="email" name="email">
                            {(fieldProps: FieldProps) => (
                                <Input
                                    label={t('landing:contact-form-email')}
                                    type="text"
                                    {...fieldProps}
                                />
                            )}
                        </Field>

                        <div className="flex items-center justify-end">
                            {submitted ? (
                                <Button startIcon={faCheck} type="button" variant="success">
                                    {t('landing:contact-form-email-sent')}
                                </Button>
                            ) : (
                                <Button disabled={isSubmitting} type="submit" variant="primary">
                                    {isSubmitting ? (
                                        <Loader size="lg" />
                                    ) : (
                                        t('landing:contact-form-submit-button')
                                    )}
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

export default LeadModalForm;
