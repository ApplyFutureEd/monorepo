import { createStudent, CreateStudentMutation } from '@applyfuture/graphql';
import { Button, Input } from '@applyfuture/ui';
import { graphql, useAuthenticatedUser } from '@applyfuture/utils';
import { Auth } from 'aws-amplify';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { object, string } from 'yup';

const ConfirmAccountForm: FC = () => {
    const { handleAuth } = useAuthenticatedUser();
    const router = useRouter();
    const { t } = useTranslation();
    const [errorMessage, setErrorMessage] = useState('');

    const validationSchema = object().shape({
        email: string()
            .required(t('common:error-email-required'))
            .email(t('common:error-email-format')),
        password: string().required(t('common:error-required')),
        verificationCode: string().required(t('common:error-required'))
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
            const user = await Auth.signIn({ password, username: email });
            handleAuth(user);
            await graphql<CreateStudentMutation>(createStudent, {
                input: {
                    address: '',
                    birthday: null,
                    city: '',
                    country: '',
                    educationCountry: '',
                    email: email,
                    fatherFirstName: '',
                    fatherLastName: '',
                    firstLanguage: '',
                    firstName: '',
                    gender: '',
                    gradePointAverage: 0,
                    guardianFirstName: '',
                    guardianLastName: '',
                    highestEducationLevel: -1,
                    lastName: '',
                    maritalStatus: '',
                    middleName: '',
                    motherFirstName: '',
                    motherMaidenName: '',
                    nationality: '',
                    parentsAddress: '',
                    parentsCity: '',
                    parentsCountry: '',
                    parentsEmail: '',
                    parentsPhoneNumber: '',
                    passportNumber: '',
                    phoneNumber: '',
                    refusedVisa: null,
                    refusedVisaReason: '',
                    schoolsAttended: [
                        {
                            address: '',
                            attendedInstitutionFrom: null,
                            attendedInstitutionTo: null,
                            city: '',
                            country: '',
                            degreeAwarded: -1,
                            degreeAwardedOn: null,
                            educationLevel: -1,
                            name: '',
                            primaryLanguageInstruction: ''
                        }
                    ],
                    validVisa: null,
                    workExperiences: [
                        {
                            address: '',
                            compagnyName: '',
                            title: '',
                            workedFrom: null,
                            workedTo: null
                        }
                    ]
                }
            });
            return router.push('/programs');
        } catch (error) {
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

export default ConfirmAccountForm;
