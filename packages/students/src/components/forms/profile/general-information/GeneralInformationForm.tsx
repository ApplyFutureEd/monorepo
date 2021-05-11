import {
    GetDocumentByStudentQuery,
    GetStudentByEmailQuery,
    updateStudent,
    UpdateStudentMutation,
    UpdateStudentMutationVariables
} from '@applyfuture/graphql';
import {
    AutocompleteInput,
    Button,
    DateInput,
    Input,
    PhoneInput,
    Section,
    Select
} from '@applyfuture/ui';
import {
    checkCompletion,
    countries,
    genders,
    graphql,
    isChina,
    languages,
    maritalStatus,
    scrollToErrors,
    toast,
    toShortId
} from '@applyfuture/utils';
import Navigation from '@components/profile/navigation/Navigation';
import { faSave } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { toUpper } from 'lodash';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import ReactGoogleMapLoader from 'react-google-maps-loader';
import { object, string } from 'yup';

type Props = {
    documentsData: GetDocumentByStudentQuery;
    isLoading: boolean;
    refetch: () => void;
    studentData: GetStudentByEmailQuery;
};
const GeneralInformationForm: FC<Props> = (props) => {
    const { documentsData, isLoading, refetch, studentData } = props;
    const student = studentData?.getStudentByEmail?.items?.[0];
    const documents = documentsData?.getDocumentByStudent?.items;
    const { t } = useTranslation();

    const validationSchema = object().shape({
        address: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
            })
            .required(t('common:error-field-required')),
        birthday: string()
            .nullable()
            .test({
                message: t('common:error-field-required'),
                name: 'nullDate',
                test: (value) => value
            })
            .required(t('common:error-field-required')),
        email: string()
            .email(t('common:error-email-format'))
            .required(t('common:error-field-required')),
        fatherFirstName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
            })
            .required(t('common:error-field-required')),
        fatherLastName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
            })
            .required(t('common:error-field-required')),
        firstLanguage: string().required(t('common:error-field-required')),
        firstName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
            })
            .required(t('common:error-field-required')),
        gender: string().required(t('common:error-field-required')),
        lastName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
            })
            .required(t('common:error-field-required')),
        maritalStatus: string().required(t('common:error-field-required')),
        motherFirstName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
            })
            .required(t('common:error-field-required')),
        motherMaidenName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
            })
            .required(t('common:error-field-required')),
        nationality: string().required(t('common:error-field-required')),
        parentsAddress: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
            })
            .required(t('common:error-field-required')),
        parentsEmail: string()
            .email(t('common:error-email-format'))
            .required(t('common:error-field-required')),
        parentsPhoneNumber: string()
            /* .phone(undefined, false, t('common:error-phone-format')) */
            .required(t('common:error-field-required')),
        passportNumber: string().required(t('common:error-field-required')),
        phoneNumber: string()
            /*  .phone(undefined, false, t('common:error-phone-format')) */
            .required(t('common:error-field-required'))
    });

    type FormValues = {
        address: string | null | undefined;
        birthday: string | null | undefined;
        city: string | null | undefined;
        country: string | null | undefined;
        email: string | null | undefined;
        fatherFirstName: string | null | undefined;
        fatherLastName: string | null | undefined;
        firstLanguage: string | null | undefined;
        firstName: string | null | undefined;
        gender: string | null | undefined;
        guardianFirstName: string | null | undefined;
        guardianLastName: string | null | undefined;
        lastName: string | null | undefined;
        maritalStatus: string | null | undefined;
        middleName: string | null | undefined;
        motherFirstName: string | null | undefined;
        motherMaidenName: string | null | undefined;
        nationality: string | null | undefined;
        parentsAddress: string | null | undefined;
        parentsCity: string | null | undefined;
        parentsCountry: string | null | undefined;
        parentsEmail: string | null | undefined;
        parentsPhoneNumber: string | null | undefined;
        passportNumber: string | null | undefined;
        phoneNumber: string | null | undefined;
        studentId?: string | null | undefined;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
        address: '',
        birthday: null,
        city: '',
        country: '',
        email: '',
        fatherFirstName: '',
        fatherLastName: '',
        firstLanguage: '',
        firstName: '',
        gender: '',
        guardianFirstName: '',
        guardianLastName: '',
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
        studentId: ''
    });

    useEffect(() => {
        if (student) {
            setInitialValues({
                address: student.address,
                birthday: student.birthday,
                city: student.city,
                country: student.country,
                email: student.email,
                fatherFirstName: student.fatherFirstName,
                fatherLastName: student.fatherLastName,
                firstLanguage: student.firstLanguage,
                firstName: student.firstName,
                gender: student.gender,
                guardianFirstName: student.guardianFirstName,
                guardianLastName: student.guardianLastName,
                lastName: student.lastName,
                maritalStatus: student.maritalStatus,
                middleName: student.middleName,
                motherFirstName: student.motherFirstName,
                motherMaidenName: student.motherMaidenName,
                nationality: student.nationality,
                parentsAddress: student.parentsAddress,
                parentsCity: student.parentsCity,
                parentsCountry: student.parentsCountry,
                parentsEmail: student.parentsEmail,
                parentsPhoneNumber: student.parentsPhoneNumber,
                passportNumber: student.passportNumber,
                phoneNumber: student.phoneNumber,
                studentId: toShortId(student?.id)
            });
        }
    }, [student]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            if (!student) {
                throw Error();
            }

            values.lastName = toUpper(values.lastName || '');
            values.fatherLastName = toUpper(values.fatherLastName || '');
            values.motherMaidenName = toUpper(values.motherMaidenName || '');
            values.guardianLastName = toUpper(values.guardianLastName || '');

            const newStudent = { ...values };
            delete newStudent.studentId;

            await graphql<UpdateStudentMutation, UpdateStudentMutationVariables>(updateStudent, {
                input: { ...newStudent, id: student?.id, lastUpdate: new Date().valueOf() }
            });

            toast({
                description: t('profile:toast-information-updated-description', {
                    section: t('profile:general-information-page-title')
                }),
                title: t('profile:toast-information-updated'),
                variant: 'success'
            });

            refetch();
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
        actions.setSubmitting(false);
    };

    const countriesOptions = countries.map((country) => ({
        label: t(`common:${country.label}`),
        value: country.value
    }));

    const languagesOptions = languages.map((language) => ({
        label: t(`common:${language.label}`),
        value: language.value
    }));

    const gendersOptions = genders.map((gender) => ({
        label: t(`profile:${gender.label}`),
        value: gender.value
    }));

    const maritalStatusOptions = maritalStatus.map((gender) => ({
        label: t(`profile:${gender.label}`),
        value: gender.value
    }));

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { errors, isSubmitting } = props;

                return (
                    <Form className="space-y-6">
                        <Section
                            description={t('profile:personal-information-description')}
                            headerComponent={
                                <Navigation
                                    completion={checkCompletion(student, documents)}
                                    isLoading={isLoading}
                                />
                            }
                            isLoading={isLoading}
                            title={t('profile:personal-information-title')}>
                            <div className="mb-8 space-y-8">
                                <div className="flex flex-col sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-2/12">
                                        <Field id="studentId" name="studentId">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    disabled
                                                    isLoading={isLoading}
                                                    label={t('profile:id')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-5/12">
                                        <Field id="email" name="email">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    disabled
                                                    isLoading={isLoading}
                                                    label={t('profile:email')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-5/12">
                                        <Field id="phoneNumber" name="phoneNumber">
                                            {(fieldProps: FieldProps) => (
                                                <PhoneInput
                                                    isLoading={isLoading}
                                                    label={t('profile:phone-number')}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                {isChina() ? (
                                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                                        <div className="w-full sm:w-6/12">
                                            <Field id="address" name="address">
                                                {(fieldProps: FieldProps) => (
                                                    <Input
                                                        isLoading={isLoading}
                                                        label={t('profile:address')}
                                                        type="text"
                                                        {...fieldProps}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                        <div className="w-full sm:w-3/12">
                                            <Field id="city" name="city">
                                                {(fieldProps: FieldProps) => (
                                                    <Input
                                                        isLoading={isLoading}
                                                        label={t('profile:city')}
                                                        type="text"
                                                        {...fieldProps}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                        <div className="w-full sm:w-3/12">
                                            <Field id="country" name="country">
                                                {(fieldProps: FieldProps) => (
                                                    <Select
                                                        isLoading={isLoading}
                                                        label={t('profile:country')}
                                                        options={countriesOptions}
                                                        {...fieldProps}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                    </div>
                                ) : (
                                    <ReactGoogleMapLoader
                                        params={{
                                            key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
                                            libraries: 'places'
                                        }}
                                        render={(googleMaps: any) =>
                                            googleMaps && (
                                                <Field id="address" name="address">
                                                    {(fieldProps: FieldProps) => (
                                                        <AutocompleteInput
                                                            isLoading={isLoading}
                                                            label={t('profile:address')}
                                                            {...fieldProps}
                                                        />
                                                    )}
                                                </Field>
                                            )
                                        }
                                    />
                                )}

                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/3">
                                        <Field id="firstName" name="firstName">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={t('profile:first-name')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/3">
                                        <Field id="middleName" name="middleName">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    optional
                                                    isLoading={isLoading}
                                                    label={t('profile:middle-name')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/3">
                                        <Field id="lastName" name="lastName">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={t('profile:last-name')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/3">
                                        <Field id="birthday" name="birthday">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    isLoading={isLoading}
                                                    label={t('profile:birthday')}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/3">
                                        <Field id="firstLanguage" name="firstLanguage">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label={t('profile:first-language')}
                                                    options={languagesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/3">
                                        <Field id="nationality" name="nationality">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label={t('profile:nationality')}
                                                    options={countriesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/3">
                                        <Field id="passportNumber" name="passportNumber">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={t('profile:passport-number')}
                                                    placeholder="N12345678"
                                                    tooltip={t('profile:passport-number-tooltip')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/3">
                                        <Field id="gender" name="gender">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label={t('profile:gender')}
                                                    options={gendersOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/3">
                                        <Field id="maritalStatus" name="maritalStatus">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label={t('profile:marital-status')}
                                                    options={maritalStatusOptions}
                                                    tooltip={t('profile:marital-status-tooltip')}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section
                            description={t('profile:parents-information-description')}
                            isLoading={isLoading}
                            title={t('profile:parents-information-title')}>
                            <div className="mb-8 space-y-8">
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/2">
                                        <Field id="fatherFirstName" name="fatherFirstName">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={t('profile:fathers-first-name')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                        <Field id="fatherLastName" name="fatherLastName">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={t('profile:fathers-last-name')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/2">
                                        <Field id="motherFirstName" name="motherFirstName">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={t('profile:mothers-first-name')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                        <Field id="motherMaidenName" name="motherMaidenName">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={t('profile:mothers-maiden-name')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/2">
                                        <Field id="guardianFirstName" name="guardianFirstName">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    optional
                                                    isLoading={isLoading}
                                                    label={t('profile:guardians-first-name')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                        <Field id="guardianLastName" name="guardianLastName">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    optional
                                                    isLoading={isLoading}
                                                    label={t('profile:guardians-last-name')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                {isChina() ? (
                                    <div className="flex w-full space-x-4">
                                        <div className="w-6/12">
                                            <Field id="parentsAddress" name="parentsAddress">
                                                {(fieldProps: FieldProps) => (
                                                    <Input
                                                        isLoading={isLoading}
                                                        label={t('profile:address')}
                                                        type="text"
                                                        {...fieldProps}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                        <div className="w-3/12">
                                            <Field id="parentsCity" name="parentsCity">
                                                {(fieldProps: FieldProps) => (
                                                    <Input
                                                        isLoading={isLoading}
                                                        label={t('profile:city')}
                                                        type="text"
                                                        {...fieldProps}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                        <div className="w-3/12">
                                            <Field id="parentsCountry" name="parentsCountry">
                                                {(fieldProps: FieldProps) => (
                                                    <Select
                                                        isLoading={isLoading}
                                                        label={t('profile:country')}
                                                        options={countriesOptions}
                                                        {...fieldProps}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                    </div>
                                ) : (
                                    <ReactGoogleMapLoader
                                        params={{
                                            key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
                                            libraries: 'places'
                                        }}
                                        render={(googleMaps: any) =>
                                            googleMaps && (
                                                <Field id="parentsAddress" name="parentsAddress">
                                                    {(fieldProps: FieldProps) => (
                                                        <AutocompleteInput
                                                            isLoading={isLoading}
                                                            label={t('profile:address')}
                                                            {...fieldProps}
                                                        />
                                                    )}
                                                </Field>
                                            )
                                        }
                                    />
                                )}
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/2">
                                        <Field id="parentsPhoneNumber" name="parentsPhoneNumber">
                                            {(fieldProps: FieldProps) => (
                                                <PhoneInput
                                                    isLoading={isLoading}
                                                    label={t('profile:parents-phone-number')}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                        <Field id="parentsEmail" name="parentsEmail">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={t('profile:parents-email')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <Button
                                    disabled={isSubmitting}
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faSave}
                                    type="submit"
                                    variant="primary"
                                    onClick={() => scrollToErrors(errors)}>
                                    {t('profile:save')}
                                </Button>
                            </div>
                        </Section>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default GeneralInformationForm;
