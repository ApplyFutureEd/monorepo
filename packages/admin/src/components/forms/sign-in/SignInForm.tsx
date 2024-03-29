import { Button, Input } from '@applyfuture/ui';
import { useAuthenticatedUser } from '@applyfuture/utils';
import { Auth } from 'aws-amplify';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { object, string } from 'yup';

const SignInForm: FC = () => {
    const { handleAuth } = useAuthenticatedUser();
    const router = useRouter();
    const { t } = useTranslation();
    const [errorMessage, setErrorMessage] = useState('');

    const validationSchema = object().shape({
        email: string()
            .required(t('common:error-email-required'))
            .email(t('common:error-email-format')),
        password: string().required(t('auth:error-password-required'))
    });

    type FormValues = {
        password: string;
        email: string;
    };

    const initialValues: FormValues = { email: (router.query.email as string) || '', password: '' };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { password, email } = values;
        try {
            const user = await Auth.signIn({
                password,
                username: email.toLowerCase()
            });
            handleAuth(user);
            return router.push((router.query.from as string) || '/programs');
        } catch (error) {
            console.log(error);
            let message = t('auth:error-generic-exception');
            if (error.code === 'NotAuthorizedException') {
                message = t('auth:error-not-authorized-exception');
            }
            if (error.code === 'UserNotConfirmedException') {
                return router.push(`/confirm-account?email=${email}`);
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
            {(props) => {
                const { isSubmitting } = props;

                return (
                    <Form className="space-y-6">
                        <Field id="email" name="email">
                            {(fieldProps: FieldProps) => (
                                <Input
                                    autoCapitalize="none"
                                    label={t('auth:email')}
                                    type="text"
                                    {...fieldProps}
                                />
                            )}
                        </Field>
                        <Field id="password" name="password">
                            {(fieldProps: FieldProps) => (
                                <Input
                                    autoCapitalize="none"
                                    label={t('auth:password')}
                                    type="password"
                                    {...fieldProps}
                                />
                            )}
                        </Field>

                        <div className="flex items-center justify-end">
                            <Button
                                disabled={isSubmitting}
                                isSubmitting={isSubmitting}
                                type="submit"
                                variant="primary">
                                {t('auth:sign-in')}
                            </Button>
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

export default SignInForm;
