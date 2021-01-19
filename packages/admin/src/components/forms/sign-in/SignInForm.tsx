import { Button, Input } from '@applyfuture/ui';
import { Auth } from 'aws-amplify';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { object, string } from 'yup';

const SignInForm: FC = () => {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState('');

    const validationSchema = object().shape({
        email: string()
            .required('Please enter your email')
            .email('Something is wrong with this email'),
        password: string().required('Please enter your password')
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
            return router.push('/');
        } catch (error) {
            let message = 'Sorry, an error occurred';
            if (error.code === 'NotAuthorizedException') {
                message = 'Email or password is incorrect';
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
                                    label="Email"
                                    type="text"
                                    {...fieldProps}
                                />
                            )}
                        </Field>
                        <Field id="password" name="password">
                            {(fieldProps: FieldProps) => (
                                <Input
                                    autoCapitalize="none"
                                    label="Password"
                                    type="password"
                                    {...fieldProps}
                                />
                            )}
                        </Field>

                        <div className="flex items-center justify-between">
                            <div className="text-sm leading-5">
                                <a href="mailto:it@applyfuture.com">
                                    <div className="hover:text-indigo-500 text-indigo-600 focus:underline font-medium focus:outline-none cursor-pointer transition duration-150 ease-in-out">
                                        Forgot password
                                    </div>
                                </a>
                            </div>

                            <Button
                                disabled={isSubmitting}
                                isLoading={isSubmitting}
                                type="submit"
                                variant="primary">
                                Sign In
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
