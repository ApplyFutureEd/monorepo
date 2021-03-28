import {
    createStudent,
    CreateStudentMutation,
    CreateStudentMutationVariables,
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import { Button, Input } from '@applyfuture/ui';
import { graphql, useAuthenticatedUser } from '@applyfuture/utils';
import { Auth } from 'aws-amplify';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
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
            const data = await graphql<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(
                getStudentByEmail,
                { email: email.toLowerCase() }
            );
            if (data.getStudentByEmail?.items?.length === 0) {
                await graphql<CreateStudentMutation, CreateStudentMutationVariables>(
                    createStudent,
                    {
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
                            lastUpdate: new Date().valueOf(),
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
                    }
                );
            }
            return router.push((router.query.from as string) || '/programs');
        } catch (error) {
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
                const { isSubmitting, values } = props;

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
                                <Link href={`/forgot-password?email=${values.email}`}>
                                    <div className="hover:text-indigo-500 text-indigo-600 focus:underline font-medium focus:outline-none cursor-pointer transition duration-150 ease-in-out">
                                        {t('auth:forgot-password')}
                                    </div>
                                </Link>
                            </div>

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
