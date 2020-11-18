import Button from '@components/core/button/Button';
import Input from '@components/core/input/Input';
import { Auth } from 'aws-amplify';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';

const SignInForm: FC = () => {
    const router = useRouter();
    const { t } = useTranslation(['common', 'auth']);
    const [errorMessage, setErrorMessage] = useState('');

    const validationSchema = object().shape({
        email: string()
            .required(t('common:error-email-required'))
            .email(t('common:error-email-format')),
        password: string().required('common:error-required')
    });

    type FormValues = {
        password: string;
        email: string;
    };

    const initialValues: FormValues = { email: (router.query.email as string) || '', password: '' };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { password, email } = values;
        try {
            await Auth.signIn({
                password,
                username: email.toLowerCase()
            });
            return router.push('/programs');
        } catch (error) {
            let message = t('auth:error-generic-exception');
            if (error.code === 'UserNotConfirmedException') {
                return router.push('/confirm-account');
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
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ isSubmitting, values }) => (
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

                    <div className="flex items-center justify-between">
                        <div className="text-sm leading-5">
                            <a
                                className="hover:text-indigo-500 text-indigo-600 focus:underline font-medium focus:outline-none transition duration-150 ease-in-out"
                                href={`/forgot-password${
                                    values.email ? `?email=${values.email}` : ''
                                }`}>
                                {t('auth:forgot-password')}
                            </a>
                        </div>

                        <Button isLoading={isSubmitting} type="submit" variant="primary">
                            {t('auth:sign-in')}
                        </Button>
                    </div>
                    {errorMessage && <p className="mt-2 text-red-600 text-sm">{errorMessage}</p>}
                </Form>
            )}
        </Formik>
    );
};

export default SignInForm;
