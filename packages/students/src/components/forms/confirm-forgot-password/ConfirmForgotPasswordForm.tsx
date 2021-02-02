import { Button, Input } from '@applyfuture/ui';
import { toast } from '@applyfuture/utils';
import { Auth } from 'aws-amplify';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { object, string } from 'yup';

const ConfirmForgotPasswordForm: FC = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const [errorMessage, setErrorMessage] = useState('');

    const validationSchema = object().shape({
        email: string()
            .required(t('common:error-email-required'))
            .email(t('common:error-email-format')),
        newPassword: string().required(t('common:error-email-required')),
        verificationCode: string().required(t('common:error-email-required'))
    });

    type FormValues = {
        email: string;
        newPassword: string;
        verificationCode: string;
    };

    const initialValues: FormValues = {
        email: (router.query.email as string) || '',
        newPassword: '',
        verificationCode: (router.query.code as string) || ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { email, newPassword, verificationCode } = values;
        try {
            await Auth.forgotPasswordSubmit(email.toLowerCase(), verificationCode, newPassword);
            toast({
                description: t('auth:new-password-description-toast'),
                title: t('auth:new-password-title-toast'),
                variant: 'success'
            });

            return router.push(`/sign-in?email=${email}`);
        } catch (error) {
            let message = t('auth:error-generic-exception');
            if (error.code === 'ExpiredCodeException') {
                message = t('auth:error-expired-code-exception');
            }
            if (error.code === 'CodeMismatchException') {
                message = t('auth:error-code-mismatch-exception');
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
                        <Field id="verificationCode" name="verificationCode">
                            {(fieldProps: FieldProps) => (
                                <Input
                                    label={t('auth:verification-code')}
                                    type="text"
                                    {...fieldProps}
                                />
                            )}
                        </Field>
                        <Field id="newPassword" name="newPassword">
                            {(fieldProps: FieldProps) => (
                                <Input
                                    autoCapitalize="none"
                                    label={t('auth:new-password')}
                                    type="password"
                                    {...fieldProps}
                                />
                            )}
                        </Field>
                        <div className="flex items-center justify-between">
                            <div className="text-sm leading-5">
                                <Link href="/sign-in">
                                    <div className="hover:text-indigo-500 text-indigo-600 focus:underline font-medium focus:outline-none cursor-pointer transition duration-150 ease-in-out">
                                        {t('auth:cancel')}
                                    </div>
                                </Link>
                            </div>
                            <Button
                                disabled={isSubmitting}
                                isSubmitting={isSubmitting}
                                type="submit"
                                variant="primary">
                                {t('auth:confirm')}
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

export default ConfirmForgotPasswordForm;
