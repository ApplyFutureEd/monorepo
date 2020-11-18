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
    const { t } = useTranslation(['auth']);
    const [errorMessage, setErrorMessage] = useState('');

    const validationSchema = object().shape({
        email: string()
            .required(t('common:error-email-required'))
            .email(t('common:error-email-format')),
        password: string().required('common:error-required'),
        verificationCode: string().required('common:error-required')
    });

    type FormValues = {
        email: string;
        password: string;
        verificationCode: string;
    };

    const initialValues: FormValues = {
        email: (router.query.email as string) || '',
        password: '',
        verificationCode: (router.query.code as string) || ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { email, password, verificationCode } = values;
        try {
            await Auth.confirmSignUp(email.toLowerCase(), verificationCode);
            await Auth.signIn({ password, username: email });
            return router.push('/programs');
        } catch (error) {
            console.log(error.code);
            let message = t('auth:error-generic-exception');
            if (error.code === 'ExpiredCodeException') {
                message = t('auth:error-expired-code-exception');
            }
            if (error.code === 'CodeMismatchException') {
                message = t('auth:error-code-mismatch-exception');
            }
            if (error.code === 'NotAuthorizedException') {
                message = t('auth:error-not-authorized-exception');
            }
            setErrorMessage(message);
        }
        actions.setSubmitting(false);
    };

    return (
        <Formik
            enableReinitialize
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
                    <Field id="verificationCode" name="verificationCode">
                        {(props: FormikHelpers<FormValues>) => (
                            <Input label={t('auth:verification-code')} type="text" {...props} />
                        )}
                    </Field>
                    <Field id="password" name="password">
                        {(props: FormikHelpers<FormValues>) => (
                            <Input
                                autoCapitalize="none"
                                label={t('auth:password')}
                                type="password"
                                {...props}
                            />
                        )}
                    </Field>

                    <div className="flex items-center justify-end">
                        <Button isLoading={isSubmitting} type="submit" variant="primary">
                            {t('auth:confirm')}
                        </Button>
                    </div>
                    {errorMessage && <p className="mt-2 text-red-600 text-sm">{errorMessage}</p>}
                </Form>
            )}
        </Formik>
    );
};

export default ConfirmAccountForm;
