import { Button, Input } from '@applyfuture/ui';
import { toast } from '@applyfuture/utils';
import { Auth } from 'aws-amplify';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { object, string } from 'yup';

const NewPasswordForm: FC = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const [errorMessage, setErrorMessage] = useState('');

    const validationSchema = object().shape({
        email: string().required(t('auth:error-email-required')),
        newPassword: string().required(t('auth:error-password-required')),
        oldPassword: string().required(t('auth:error-password-required'))
    });

    type FormValues = {
        email: string;
        oldPassword: string;
        newPassword: string;
    };

    const initialValues: FormValues = {
        email: (router.query.email as string) || '',
        newPassword: '',
        oldPassword: (router.query['old-password'] as string) || ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { email, oldPassword, newPassword } = values;
        try {
            const user = await Auth.signIn({
                password: oldPassword,
                username: email.toLowerCase()
            });
            await Auth.completeNewPassword(user, newPassword);
            toast({
                description: t('auth:new-password-description-toast'),
                title: t('auth:new-password-title-toast'),
                variant: 'success'
            });
            return router.push('/programs');
        } catch (error) {
            const message = t('auth:error-generic-exception');
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
                                    {...fieldProps}
                                />
                            )}
                        </Field>
                        <Field id="oldPassword" name="oldPassword">
                            {(fieldProps: FieldProps) => (
                                <Input
                                    autoCapitalize="none"
                                    label={t('auth:old-password')}
                                    type="password"
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
                        <div className="flex justify-end">
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

export default NewPasswordForm;
