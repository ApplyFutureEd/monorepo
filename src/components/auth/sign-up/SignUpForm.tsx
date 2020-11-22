import Button from '@components/core/button/Button';
import Input from '@components/core/input/Input';
import { Auth } from 'aws-amplify';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { object, string } from 'yup';

const SignUpForm: FC = () => {
    const router = useRouter();
    const { t } = useTranslation();
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
        const { email, password } = values;
        try {
            await Auth.signUp({
                password,
                username: email.toLowerCase()
            });
            return router.push(`/confirm-account?email=${email}`);
        } catch (error) {
            let message = t('auth:error-generic-exception');
            if (error.code === 'UsernameExistsException') {
                message = t('auth:error-username-exists-exception');
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

                        <div className="flex items-center justify-between">
                            <div className="text-sm leading-5">
                                <Link href="/recruiters">
                                    <div className="hover:text-indigo-500 text-indigo-600 focus:underline font-medium focus:outline-none cursor-pointer transition duration-150 ease-in-out">
                                        {t('auth:im-a-recruiter')}
                                    </div>
                                </Link>
                            </div>

                            <Button isLoading={isSubmitting} type="submit" variant="primary">
                                {t('auth:sign-up')}
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

export default SignUpForm;
