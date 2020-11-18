import Button from '@components/core/button/Button';
import Input from '@components/core/input/Input';
import { Auth } from 'aws-amplify';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';

const ConfirmAccountForm: FC = () => {
    const router = useRouter();
    const { t } = useTranslation(['common', 'auth']);
    const [errorMessage, setErrorMessage] = useState('');

    const validationSchema = object().shape({
        email: string()
            .required(t('common:error-email-required'))
            .email(t('common:error-email-format'))
    });

    type FormValues = {
        email: string;
    };

    const initialValues: FormValues = {
        email: (router.query.email as string) || ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { email } = values;
        try {
            await Auth.forgotPassword(email.toLowerCase());
            return router.push(`/confirm-forgot-password?email=${email}`);
        } catch (error) {
            let message = t('auth:error-generic-exception');
            if (error.code === 'CodeDeliveryDetails') {
                message = t('auth:error-generic-exception');
            }
            setErrorMessage(message);
        }
        actions.setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <Form className="space-y-6">
                    <Field id="email" name="email">
                        {(props: FormikHelpers<FormValues>) => (
                            <Input
                                autoCapitalize="none"
                                label={t('auth:email')}
                                type="text"
                                {...props}
                            />
                        )}
                    </Field>
                    <div className="flex items-center justify-between">
                        <div className="text-sm leading-5">
                            <a
                                className="hover:text-indigo-500 text-indigo-600 focus:underline font-medium focus:outline-none transition duration-150 ease-in-out"
                                href="/sign-in">
                                {t('auth:cancel')}
                            </a>
                        </div>
                        <Button isLoading={isSubmitting} type="submit" variant="primary">
                            {t('auth:reset-password')}
                        </Button>
                    </div>
                    {errorMessage && <p className="mt-2 text-red-600 text-sm">{errorMessage}</p>}
                </Form>
            )}
        </Formik>
    );
};

export default ConfirmAccountForm;
