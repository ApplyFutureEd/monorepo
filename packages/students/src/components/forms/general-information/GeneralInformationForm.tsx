import {
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables
} from '@applyfuture/graphql';
import { DateInput, Input, PhoneInput, Section, Select } from '@applyfuture/ui';
import AutocompleteInput from '@applyfuture/ui/src/autocomplete-input/AutocompleteInput';
import {
    countries,
    genders,
    isChina,
    languages,
    maritalStatus,
    useAuthenticatedUser,
    useQuery
} from '@applyfuture/utils';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';
import ReactGoogleMapLoader from 'react-google-maps-loader';
import { object, string } from 'yup';

const GeneralInformationForm: FC = () => {
    const { user } = useAuthenticatedUser();
    const { isLoading } = useQuery<GetStudentByEmailQuery, GetStudentByEmailQueryVariables>(
        getStudentByEmail,
        { email: user?.attributes.email }
    );
    const { t } = useTranslation();

    const validationSchema = object().shape({
        address: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (string) => !/^[\u4E00-\u9FA5]+$/.test(string)
            })
            .required(t('common:error-field-required')),
        birthday: string()
            .nullable()
            .test({
                message: t('common:error-field-required'),
                name: 'nullDate',
                test: (string) => string
            })
            .required(t('common:error-field-required')),
        email: string()
            .email(t('common:error-email-format'))
            .required(t('common:error-field-required')),
        fatherFirstName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (string) => !/^[\u4E00-\u9FA5]+$/.test(string)
            })
            .required(t('common:error-field-required')),
        fatherLastName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (string) => !/^[\u4E00-\u9FA5]+$/.test(string)
            })
            .required(t('common:error-field-required')),
        firstLanguage: string().required(t('common:error-field-required')),
        firstName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (string) => !/^[\u4E00-\u9FA5]+$/.test(string)
            })
            .required(t('common:error-field-required')),
        gender: string().required(t('common:error-field-required')),
        lastName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (string) => !/^[\u4E00-\u9FA5]+$/.test(string)
            })
            .required(t('common:error-field-required')),
        maritalStatus: string().required(t('common:error-field-required')),
        motherFirstName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (string) => !/^[\u4E00-\u9FA5]+$/.test(string)
            })
            .required(t('common:error-field-required')),
        motherMaidenName: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (string) => !/^[\u4E00-\u9FA5]+$/.test(string)
            })
            .required(t('common:error-field-required')),
        nationality: string().required(t('common:error-field-required')),
        parentsAddress: string()
            .test({
                message: t('common:error-latin-characters'),
                name: 'latinCharacters',
                test: (string) => !/^[\u4E00-\u9FA5]+$/.test(string)
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
        studentId: string;
        email: string;
        phoneNumber: string;
        address: string;
        city: string;
        country: string;
        firstName: string;
        middleName: string;
        lastName: string;
        birthday: Date | null;
        firstLanguage: string;
        nationality: string;
        passportNumber: string;
        gender: string;
        maritalStatus: string;
        fatherLastName: string;
        fatherFirstName: string;
        motherMaidenName: string;
        motherFirstName: string;
        guardianLastName: string;
        guardianFirstName: string;
        parentsAddress: string;
        parentsCity: string;
        parentsCountry: string;
        parentsPhoneNumber: string;
        parentsEmail: string;
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

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {};

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
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                return (
                    <Form>
                        <Section
                            description={t('profile:personal-information-description')}
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
                                            key: 'AIzaSyCHoshDgCrSnZB20N-KqSvr0LtQGrnwmq4', // Define your api key here
                                            libraries: 'places' // To request multiple libraries, separate them with a comma
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
                    </Form>
                );
            }}
        </Formik>
    );
};

export default GeneralInformationForm;
