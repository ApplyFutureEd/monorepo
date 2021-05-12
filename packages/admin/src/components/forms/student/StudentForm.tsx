import { GetDocumentByStudentQuery, GetStudentQuery } from '@applyfuture/graphql';
import {
    Button,
    Checkbox,
    DateInput,
    FileUploader,
    Input,
    PhoneInput,
    Section,
    Select,
    Tooltip
} from '@applyfuture/ui';
import {
    cambridgeAdvancedResults,
    cambridgeFirstResults,
    countries,
    educationLevels,
    findDocument,
    genders,
    languageLevels,
    languages,
    maritalStatus,
    toShortId
} from '@applyfuture/utils';
import { faArrowLeft, faPlusCircle, faSave, faTrash } from '@fortawesome/pro-light-svg-icons';
import {
    Field,
    FieldArray,
    FieldArrayRenderProps,
    FieldProps,
    Form,
    Formik,
    FormikHelpers
} from 'formik';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { array, mixed, number, object, string } from 'yup';

type Props = {
    handleSubmit: (
        values: StudentFormValues,
        actions: FormikHelpers<StudentFormValues>
    ) => Promise<void>;
    isLoading: boolean;
    studentData: GetStudentQuery;
    documentsData: GetDocumentByStudentQuery;
};

export type StudentFormValues = {
    address: string | null | undefined;
    birthday: string | null | undefined;
    cae?: string;
    'celi-cils-it-plida'?: string;
    city: string | null | undefined;
    country: string | null | undefined;
    'dalf-delf'?: string;
    dele?: string;
    educationCountry: string | null | undefined;
    email: string | null | undefined;
    fatherFirstName: string | null | undefined;
    fatherLastName: string | null | undefined;
    fce?: string;
    firstLanguage: string | null | undefined;
    firstName: string | null | undefined;
    gender: string | null | undefined;
    gmat?: string;
    goethe?: string;
    gradePointAverage: number | null | undefined;
    gre?: string;
    guardianFirstName: string | null | undefined;
    guardianLastName: string | null | undefined;
    highestEducationLevel: number | null | undefined;
    ielts?: string;
    'last-3-transcript-1'?: string;
    'last-3-transcript-2'?: string;
    'last-3-transcript-3'?: string;
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
    passport?: string;
    passportNumber: string | null | undefined;
    passportPhoto?: string;
    phoneNumber: string | null | undefined;
    refusedVisa: boolean | null | undefined;
    refusedVisaReason: string | null | undefined;
    resume?: string;
    studentId?: string | null | undefined;
    schoolsAttended:
        | Array<{
              address?: string | null | undefined;
              attendedInstitutionFrom?: string | null | undefined;
              attendedInstitutionTo?: string | null | undefined;
              city?: string | null | undefined;
              country?: string | null | undefined;
              degreeAwarded?: number | null | undefined;
              degreeAwardedOn?: string | null | undefined;
              educationLevel?: number | null | undefined;
              name?: string | null | undefined;
              primaryLanguageInstruction?: string | null | undefined;
          } | null>
        | null
        | undefined;
    tageMage?: string;
    'tef-tcf'?: string;
    testCambridgeAdvanced: number | null | undefined;
    testCambridgeAdvancedDate: string | null | undefined;
    testCambridgeFirst: number | null | undefined;
    testCambridgeFirstDate: string | null | undefined;
    testCeliCilsItPlida: number | null | undefined;
    testCeliCilsItPlidaDate: string | null | undefined;
    testDele: number | null | undefined;
    testDeleDate: string | null | undefined;
    testDelfdalf: number | null | undefined;
    testDelfdalfDate: string | null | undefined;
    testEnglishPending: boolean | null | undefined;
    testGmat: number | null | undefined;
    testGmatDate: string | null | undefined;
    testGoethe: number | null | undefined;
    testGoetheDate: string | null | undefined;
    testGre: number | null | undefined;
    testGreDate: string | null | undefined;
    testIelts: number | null | undefined;
    testIeltsDate: string | null | undefined;
    testLogicAndReasoningPending: boolean | null | undefined;
    testOtherLanguagesPending: boolean | null | undefined;
    testTagemage: number | null | undefined;
    testTagemageDate: string | null | undefined;
    testTcftef: number | null | undefined;
    testTcftefDate: string | null | undefined;
    testToefl: number | null | undefined;
    testToeflDate: string | null | undefined;
    testToeic: number | null | undefined;
    testToeicDate: string | null | undefined;
    toefl?: string;
    toeic?: string;
    validVisa: boolean | null | undefined;
    workExperiences:
        | Array<{
              address?: string | null | undefined;
              compagnyName?: string | null | undefined;
              title?: string | null | undefined;
              workedFrom?: string | null | undefined;
              workedTo?: string | null | undefined;
          } | null>
        | null
        | undefined;
    [documentId: string]: any;
};

const StudentForm: FC<Props> = (props) => {
    const { handleSubmit, documentsData, isLoading, studentData } = props;
    const student = studentData?.getStudent;
    const documents = documentsData?.getDocumentByStudent?.items;
    const { t } = useTranslation();

    const validationSchema = object().shape({
        address: string().test({
            message: t('common:error-latin-characters'),
            name: 'latinCharacters',
            test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
        }),
        birthday: string().nullable(),
        educationCountry: mixed(),
        email: string().email(t('common:error-email-format')),
        fatherFirstName: string().test({
            message: t('common:error-latin-characters'),
            name: 'latinCharacters',
            test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
        }),
        fatherLastName: string().test({
            message: t('common:error-latin-characters'),
            name: 'latinCharacters',
            test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
        }),
        firstLanguage: string(),
        firstName: string().test({
            message: t('common:error-latin-characters'),
            name: 'latinCharacters',
            test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
        }),
        gender: string(),
        gradePointAverage: number()
            .min(0, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(4, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max })),
        highestEducationLevel: mixed(),
        lastName: string().test({
            message: t('common:error-latin-characters'),
            name: 'latinCharacters',
            test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
        }),
        maritalStatus: string(),
        motherFirstName: string().test({
            message: t('common:error-latin-characters'),
            name: 'latinCharacters',
            test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
        }),
        motherMaidenName: string().test({
            message: t('common:error-latin-characters'),
            name: 'latinCharacters',
            test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
        }),
        nationality: string(),
        parentsAddress: string().test({
            message: t('common:error-latin-characters'),
            name: 'latinCharacters',
            test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
        }),
        parentsEmail: string().email(t('common:error-email-format')),
        parentsPhoneNumber: string(),
        /* .phone(undefined, false, t('common:error-phone-format')) */
        passportNumber: string(),
        phoneNumber: string(),
        /*  .phone(undefined, false, t('common:error-phone-format')) */
        refusedVisa: mixed(),
        refusedVisaReason: string(),
        schoolsAttended: array().of(
            object().shape({
                address: string().test({
                    message: t('common:error-latin-characters'),
                    name: 'latinCharacters',
                    test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
                }),
                attendedInstitutionFrom: string().nullable(),
                attendedInstitutionTo: string().nullable(),
                educationLevel: number(),
                name: string().test({
                    message: t('common:error-latin-characters'),
                    name: 'latinCharacters',
                    test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
                }),
                primaryLanguageInstruction: string()
            })
        ),
        testGmat: number()
            .min(200, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(800, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        testGre: number()
            .min(260, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(344, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        testIelts: number()
            .min(0, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(9, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        testTagemage: number()
            .min(0, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(600, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        testToefl: number()
            .min(310, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(667, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        testToeic: number()
            .min(0, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(990, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        validVisa: mixed(),
        workExperiences: array().of(
            object().shape({
                compagnyName: string().test({
                    message: t('common:error-latin-characters'),
                    name: 'latinCharacters',
                    test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
                }),
                title: string().test({
                    message: t('common:error-latin-characters'),
                    name: 'latinCharacters',
                    test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
                })
            })
        )
    });

    const [initialValues, setInitialValues] = useState<StudentFormValues>({
        address: '',
        birthday: null,
        cae: '',
        'celi-cils-it-plida': '',
        city: '',
        country: '',
        'dalf-delf': '',
        dele: '',
        educationCountry: '',
        email: '',
        fatherFirstName: '',
        fatherLastName: '',
        fce: '',
        firstLanguage: '',
        firstName: '',
        gender: '',
        gmat: '',
        goethe: '',
        gradePointAverage: 0,
        guardianFirstName: '',
        guardianLastName: '',
        highestEducationLevel: -1,
        ielts: '',
        'last-3-transcript-1': '',
        'last-3-transcript-2': '',
        'last-3-transcript-3': '',
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
        passport: '',
        passportNumber: '',
        passportPhoto: '',
        phoneNumber: '',
        refusedVisa: false,
        refusedVisaReason: '',
        resume: '',
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
        studentId: '',
        tageMage: '',
        'tef-tcf': '',
        testCambridgeAdvanced: null,
        testCambridgeAdvancedDate: null,
        testCambridgeFirst: null,
        testCambridgeFirstDate: null,
        testCeliCilsItPlida: null,
        testCeliCilsItPlidaDate: null,
        testDele: null,
        testDeleDate: null,
        testDelfdalf: null,
        testDelfdalfDate: null,
        testEnglishPending: false,
        testGmat: null,
        testGmatDate: null,
        testGoethe: null,
        testGoetheDate: null,
        testGre: null,
        testGreDate: null,
        testIelts: null,
        testIeltsDate: null,
        testLogicAndReasoningPending: false,
        testOtherLanguagesPending: false,
        testTagemage: null,
        testTagemageDate: null,
        testTcftef: null,
        testTcftefDate: null,
        testToefl: null,
        testToeflDate: null,
        testToeic: null,
        testToeicDate: null,
        toefl: '',
        toeic: '',
        validVisa: false,
        workExperiences: [
            {
                address: '',
                compagnyName: '',
                title: '',
                workedFrom: null,
                workedTo: null
            }
        ]
    });

    useEffect(() => {
        if (student) {
            setInitialValues({
                address: student.address,
                birthday: student.birthday,
                cae: findDocument(documents, 'cae') || '',
                'celi-cils-it-plida': findDocument(documents, 'celi-cils-it-plida') || '',
                city: student.city,
                country: student.country,
                'dalf-delf': findDocument(documents, 'dalf-delf') || '',
                dele: findDocument(documents, 'dele') || '',
                educationCountry: student.educationCountry,
                email: student.email,
                fatherFirstName: student.fatherFirstName,
                fatherLastName: student.fatherLastName,
                fce: findDocument(documents, 'fce') || '',
                firstLanguage: student.firstLanguage,
                firstName: student.firstName,
                gender: student.gender,
                gmat: findDocument(documents, 'gmat') || '',
                goethe: findDocument(documents, 'goethe') || '',
                gradePointAverage: student.gradePointAverage,
                guardianFirstName: student.guardianFirstName,
                guardianLastName: student.guardianLastName,
                highestEducationLevel: student.highestEducationLevel,
                ielts: findDocument(documents, 'ielts') || '',
                'last-3-transcript-1': findDocument(documents, 'last-3-transcript-1') || '',
                'last-3-transcript-2': findDocument(documents, 'last-3-transcript-2') || '',
                'last-3-transcript-3': findDocument(documents, 'last-3-transcript-3') || '',
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
                passport: findDocument(documents, 'passport') || '',
                passportNumber: student.passportNumber,
                passportPhoto: findDocument(documents, 'passport-photo') || '',
                phoneNumber: student.phoneNumber,
                refusedVisa: student.refusedVisa,
                refusedVisaReason: student.refusedVisaReason,
                resume: findDocument(documents, 'resume') || '',
                schoolsAttended: student.schoolsAttended,
                studentId: toShortId(student?.id),
                tageMage: findDocument(documents, 'tage-mage') || '',
                'tef-tcf': findDocument(documents, 'tef-tcf') || '',
                testCambridgeAdvanced: student.testCambridgeAdvanced,
                testCambridgeAdvancedDate: student.testCambridgeAdvancedDate,
                testCambridgeFirst: student.testCambridgeFirst,
                testCambridgeFirstDate: student.testCambridgeFirstDate,
                testCeliCilsItPlida: student.testCeliCilsItPlida,
                testCeliCilsItPlidaDate: student.testCeliCilsItPlidaDate,
                testDele: student.testDele,
                testDeleDate: student.testDeleDate,
                testDelfdalf: student.testDelfdalf,
                testDelfdalfDate: student.testDelfdalfDate,
                testEnglishPending: student.testEnglishPending,
                testGmat: student.testGmat,
                testGmatDate: student.testGmatDate,
                testGoethe: student.testGoethe,
                testGoetheDate: student.testGoetheDate,
                testGre: student.testGre,
                testGreDate: student.testGreDate,
                testIelts: student.testIelts,
                testIeltsDate: student.testIeltsDate,
                testLogicAndReasoningPending: student.testLogicAndReasoningPending,
                testOtherLanguagesPending: student.testOtherLanguagesPending,
                testTagemage: student.testTagemage,
                testTagemageDate: student.testTagemageDate,
                testTcftef: student.testTcftef,
                testTcftefDate: student.testTcftefDate,
                testToefl: student.testToefl,
                testToeflDate: student.testToeflDate,
                testToeic: student.testToeic,
                testToeicDate: student.testToeicDate,
                toefl: findDocument(documents, 'toefl') || '',
                toeic: findDocument(documents, 'toeic') || '',
                validVisa: student.validVisa,
                workExperiences: student.workExperiences
            });
        }
    }, [student, documents]);

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

    const educationLevelsOptions = educationLevels.map((educationLevel) => ({
        label: t(`programs:${educationLevel.label}`),
        value: educationLevel.value
    }));

    const cambridgeFirstResultsOptions = cambridgeFirstResults;

    const cambridgeAdvancedResultsOptions = cambridgeAdvancedResults;

    const languageLevelsOptions = languageLevels;

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {(props) => {
                const { isSubmitting, setFieldValue, values } = props;

                return (
                    <Form className="space-y-6">
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
                                    variant="primary">
                                    {t('profile:save')}
                                </Button>
                            </div>
                        </Section>
                        <Section isLoading={isLoading} title={t('profile:education-summary-title')}>
                            <div className="sm:mb-8 sm:space-y-8">
                                <div className="flex flex-col items-center w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/2">
                                        <Field id="educationCountry" name="educationCountry">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label={t('profile:education-country')}
                                                    options={countriesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                        <Field
                                            id="highestEducationLevel"
                                            name="highestEducationLevel">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label={t('profile:highest-education-country')}
                                                    options={educationLevelsOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center w-full sm:flex-row sm:space-x-4">
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                        <Field id="gradePointAverage" name="gradePointAverage">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label="GPA (0-4)"
                                                    max={4}
                                                    min={0}
                                                    step="any"
                                                    tooltip={t('profile:gpa-tooltip')}
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>
                            </div>
                        </Section>
                        <Section
                            description={t('profile:schools-attended-description')}
                            isLoading={isLoading}
                            title={t('profile:schools-attended-title')}>
                            <div className="mb-8 space-y-8">
                                <FieldArray name="schoolsAttended">
                                    {(fieldArrayProps: FieldArrayRenderProps) => (
                                        <div>
                                            {fieldArrayProps.form.values.schoolsAttended?.length >
                                                0 &&
                                                fieldArrayProps.form.values.schoolsAttended.map(
                                                    (_schoolsAttended: any, index: number) => (
                                                        <div key={index} className="mb-4 space-y-4">
                                                            <div className="flex flex-col items-center w-full sm:flex-row sm:space-x-4">
                                                                <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                                                    <Field
                                                                        name={`schoolsAttended.${index}.name`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <Input
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:school-name'
                                                                                )}
                                                                                type="text"
                                                                                {...fieldProps}
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>

                                                                <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                                                    <Field
                                                                        name={`schoolsAttended.${index}.address`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <Input
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:address'
                                                                                )}
                                                                                type="text"
                                                                                {...fieldProps}
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-col items-center w-full sm:flex-row sm:space-x-4">
                                                                <div className="w-full sm:w-1/2">
                                                                    <Field
                                                                        name={`schoolsAttended.${index}.educationLevel`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <Select
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:education-level'
                                                                                )}
                                                                                options={
                                                                                    educationLevelsOptions
                                                                                }
                                                                                {...fieldProps}
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                                <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                                                    <Field
                                                                        name={`schoolsAttended.${index}.primaryLanguageInstruction`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <Select
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:primary-language-instruction'
                                                                                )}
                                                                                options={
                                                                                    languagesOptions
                                                                                }
                                                                                {...fieldProps}
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col items-center w-full sm:flex-row sm:space-x-4">
                                                                <div className="w-full sm:w-1/2">
                                                                    <Field
                                                                        name={`schoolsAttended.${index}.degreeAwarded`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <Select
                                                                                optional
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:degree-awarded'
                                                                                )}
                                                                                options={
                                                                                    educationLevelsOptions
                                                                                }
                                                                                {...fieldProps}></Select>
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                                <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                                                    <Field
                                                                        name={`schoolsAttended.${index}.degreeAwardedOn`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <DateInput
                                                                                optional
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:degree-awarded-on'
                                                                                )}
                                                                                maxDate={new Date()}
                                                                                {...fieldProps}
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col items-center w-full sm:flex-row sm:space-x-4">
                                                                <div className="w-full sm:w-1/2">
                                                                    <Field
                                                                        name={`schoolsAttended.${index}.attendedInstitutionFrom`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <DateInput
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:attended-institution-from'
                                                                                )}
                                                                                maxDate={new Date()}
                                                                                {...fieldProps}
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                                <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                                                    <Field
                                                                        name={`schoolsAttended.${index}.attendedInstitutionTo`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <DateInput
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:attended-institution-to'
                                                                                )}
                                                                                maxDate={new Date()}
                                                                                {...fieldProps}
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                            </div>

                                                            {values.schoolsAttended &&
                                                                values.schoolsAttended.length >
                                                                    1 && (
                                                                    <Button
                                                                        isLoading={isLoading}
                                                                        startIcon={faTrash}
                                                                        type="button"
                                                                        variant="secondary"
                                                                        onClick={() =>
                                                                            fieldArrayProps.remove(
                                                                                index
                                                                            )
                                                                        }>
                                                                        {t('profile:remove')}
                                                                    </Button>
                                                                )}
                                                        </div>
                                                    )
                                                )}

                                            <Button
                                                isLoading={isLoading}
                                                startIcon={faPlusCircle}
                                                type="button"
                                                variant="secondary"
                                                onClick={() =>
                                                    fieldArrayProps.push({
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
                                                    })
                                                }>
                                                {t('profile:add-a-school')}
                                            </Button>
                                        </div>
                                    )}
                                </FieldArray>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <Button
                                    disabled={isSubmitting}
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faSave}
                                    type="submit"
                                    variant="primary">
                                    {t('profile:save')}
                                </Button>
                            </div>
                        </Section>
                        <Section
                            description={
                                <Field id="testEnglishPending" name="testEnglishPending">
                                    {(fieldProps: FieldProps) => (
                                        <Checkbox
                                            label={t('profile:no-english-tests')}
                                            {...fieldProps}
                                            field={{
                                                ...fieldProps.field,
                                                onChange: () => {
                                                    setInitialValues({
                                                        ...values,
                                                        testCambridgeAdvanced: null,
                                                        testCambridgeAdvancedDate: null,
                                                        testCambridgeFirst: null,
                                                        testCambridgeFirstDate: null,
                                                        testEnglishPending: !values.testEnglishPending,
                                                        testIelts: null,
                                                        testIeltsDate: null,
                                                        testToefl: null,
                                                        testToeflDate: null,
                                                        testToeic: null,
                                                        testToeicDate: null
                                                    });
                                                }
                                            }}
                                        />
                                    )}
                                </Field>
                            }
                            isLoading={isLoading}
                            title={t('profile:english-tests')}>
                            <div className="mb-8 space-y-8">
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="testToefl" name="testToefl">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    disabled={Boolean(values.testEnglishPending)}
                                                    isLoading={isLoading}
                                                    label={`${t('profile:toefl')} (310 - 667)`}
                                                    max={667}
                                                    min={310}
                                                    step="any"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testToeflDate" name="testToeflDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(values.testEnglishPending)}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: 'TOEFL'
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-8 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testIelts" name="testIelts">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    disabled={Boolean(values.testEnglishPending)}
                                                    isLoading={isLoading}
                                                    label={`${t('profile:ielts')} (0 - 9)`}
                                                    max={9}
                                                    min={0}
                                                    step="any"
                                                    tooltip={t('profile:test-ielts-tooltip')}
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testIeltsDate" name="testIeltsDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(values.testEnglishPending)}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: 'IELTS'
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="testToeic" name="testToeic">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    disabled={Boolean(values.testEnglishPending)}
                                                    isLoading={isLoading}
                                                    label={`${t('profile:toeic')} (0 - 990)`}
                                                    max={990}
                                                    min={0}
                                                    step="any"
                                                    tooltip={t('profile:test-toeic-tooltip')}
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testToeicDate" name="testToeicDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(values.testEnglishPending)}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: 'TOEIC'
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:w-1/4" />
                                    <div className="w-full sm:w-1/4" />
                                </div>

                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="testCambridgeFirst" name="testCambridgeFirst">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    disabled={Boolean(values.testEnglishPending)}
                                                    isLoading={isLoading}
                                                    label={`${t('profile:fce')} (A - E)`}
                                                    options={cambridgeFirstResultsOptions}
                                                    tooltip={t(
                                                        'profile:test-cambridge-first-tooltip'
                                                    )}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field
                                            id="testCambridgeFirstDate"
                                            name="testCambridgeFirstDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(values.testEnglishPending)}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: 'FCE'
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-8 w-full sm:mt-0 sm:w-1/4">
                                        <Field
                                            id="testCambridgeAdvanced"
                                            name="testCambridgeAdvanced">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    disabled={Boolean(values.testEnglishPending)}
                                                    isLoading={isLoading}
                                                    label={`${t('profile:cae')} (A - C)`}
                                                    options={cambridgeAdvancedResultsOptions}
                                                    tooltip={t(
                                                        'profile:test-cambridge-advanced-tooltip'
                                                    )}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field
                                            id="testCambridgeAdvancedDate"
                                            name="testCambridgeAdvancedDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(values.testEnglishPending)}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: 'CAE'
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section
                            description={
                                <Field
                                    id="testOtherLanguagesPending"
                                    name="testOtherLanguagesPending">
                                    {(fieldProps: FieldProps) => (
                                        <Checkbox
                                            label={t('profile:no-other-languages-tests')}
                                            {...fieldProps}
                                            field={{
                                                ...fieldProps.field,
                                                onChange: () => {
                                                    setInitialValues({
                                                        ...values,
                                                        testCeliCilsItPlida: null,
                                                        testCeliCilsItPlidaDate: null,
                                                        testDele: null,
                                                        testDeleDate: null,
                                                        testDelfdalf: null,
                                                        testDelfdalfDate: null,
                                                        testGoethe: null,
                                                        testGoetheDate: null,
                                                        testOtherLanguagesPending: !values.testOtherLanguagesPending,
                                                        testTcftef: null,
                                                        testTcftefDate: null
                                                    });
                                                }
                                            }}
                                        />
                                    )}
                                </Field>
                            }
                            isLoading={isLoading}
                            title={t('profile:other-languages-tests')}>
                            <div className="mb-8 space-y-8">
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="testTcftef" name="testTcftef">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    disabled={Boolean(
                                                        values.testOtherLanguagesPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={`${t('profile:tcf-tef')} (C2 - A1)`}
                                                    options={languageLevelsOptions}
                                                    tooltip={t('profile:test-tcf-tef-tooltip')}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testTcftefDate" name="testTcftefDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(
                                                        values.testOtherLanguagesPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: 'TCF / TEF'
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testDelfdalf" name="testDelfdalf">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    disabled={Boolean(
                                                        values.testOtherLanguagesPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={`${t('profile:delf-dalf')} (C2 - A1)`}
                                                    options={languageLevelsOptions}
                                                    tooltip={t('profile:test-delf-dalf-tooltip')}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testDelfdalfDate" name="testDelfdalfDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(
                                                        values.testOtherLanguagesPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: 'DELF / DALF'
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="testGoethe" name="testGoethe">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    disabled={Boolean(
                                                        values.testOtherLanguagesPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={`${t('profile:goethe')} (C2 - A1)`}
                                                    options={languageLevelsOptions}
                                                    tooltip={t('profile:test-goethe-tooltip')}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testGoetheDate" name="testGoetheDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(
                                                        values.testOtherLanguagesPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: t('profile:goethe')
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testDele" name="testDele">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    disabled={Boolean(
                                                        values.testOtherLanguagesPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={`${t('profile:dele')} (C2 - A1)`}
                                                    options={languageLevelsOptions}
                                                    tooltip={t('profile:test-dele-tooltip')}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testDeleDate" name="testDeleDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(
                                                        values.testOtherLanguagesPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: t('profile:dele')
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="testCeliCilsItPlida" name="testCeliCilsItPlida">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    disabled={Boolean(
                                                        values.testOtherLanguagesPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={`${t(
                                                        'profile:celi-cils-it-plida'
                                                    )} (C2 - A1)`}
                                                    options={languageLevelsOptions}
                                                    tooltip={t(
                                                        'profile:test-celi-cils-it-plida-tooltip'
                                                    )}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field
                                            id="testCeliCilsItPlidaDate"
                                            name="testCeliCilsItPlidaDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(
                                                        values.testOtherLanguagesPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: t('profile:celi-cils-it-plida')
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section
                            description={
                                <Field
                                    id="testLogicAndReasoningPending"
                                    name="testLogicAndReasoningPending">
                                    {(fieldProps: FieldProps) => (
                                        <Checkbox
                                            label={t('profile:no-logic-and-reasoning-tests')}
                                            {...fieldProps}
                                            field={{
                                                ...fieldProps.field,
                                                onChange: () => {
                                                    setInitialValues({
                                                        ...values,
                                                        testGmat: null,
                                                        testGmatDate: null,
                                                        testGre: null,
                                                        testGreDate: null,
                                                        testLogicAndReasoningPending: !values.testLogicAndReasoningPending,
                                                        testTagemage: null,
                                                        testTagemageDate: null
                                                    });
                                                }
                                            }}
                                        />
                                    )}
                                </Field>
                            }
                            isLoading={isLoading}
                            title={t('profile:logic-and-reasoning-tests')}>
                            <div className="mb-8 space-y-8">
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="testGre" name="testGre">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    disabled={Boolean(
                                                        values.testLogicAndReasoningPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={`${t('profile:gre')} (260 - 344)`}
                                                    max={344}
                                                    min={260}
                                                    step="any"
                                                    tooltip={t('profile:test-gre-tooltip')}
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testGreDate" name="testGreDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(
                                                        values.testLogicAndReasoningPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: 'GRE'
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-8 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testGmat" name="testGmat">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    disabled={Boolean(
                                                        values.testLogicAndReasoningPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label="GMAT (200 - 800)"
                                                    max={800}
                                                    min={200}
                                                    step="any"
                                                    tooltip={t('profile:test-gmat-tooltip')}
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testGmatDate" name="testGmatDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(
                                                        values.testLogicAndReasoningPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: 'GMAT'
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="testTagemage" name="testTagemage">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    disabled={Boolean(
                                                        values.testLogicAndReasoningPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label="TAGE MAGE (0 - 600)"
                                                    max={600}
                                                    min={0}
                                                    step="any"
                                                    tooltip={t('profile:test-tage-mage-tooltip')}
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testTagemageDate" name="testTagemageDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={Boolean(
                                                        values.testLogicAndReasoningPending
                                                    )}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: 'TAGE MAGE'
                                                    })}
                                                    maxDate={new Date()}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:w-1/4" />
                                    <div className="w-full sm:w-1/4" />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <Button
                                    disabled={isSubmitting}
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faSave}
                                    type="submit"
                                    variant="primary">
                                    {t('profile:save')}
                                </Button>
                            </div>
                        </Section>
                        <Section
                            isLoading={isLoading}
                            title={t('profile:background-information-title')}>
                            <div className="mb-8 space-y-8">
                                <div>
                                    {isLoading ? (
                                        <Skeleton height="20px" width="320px" />
                                    ) : (
                                        <div className="block text-gray-700 text-sm font-medium leading-5">
                                            {t('profile:visa-question')}
                                        </div>
                                    )}
                                    <div className="flex mt-4 w-full space-x-2">
                                        <Button
                                            isLoading={isLoading}
                                            variant={values.validVisa ? 'primary' : 'secondary'}
                                            onClick={() => {
                                                setFieldValue('validVisa', true);
                                            }}>
                                            {t('profile:yes')}
                                        </Button>
                                        <Button
                                            isLoading={isLoading}
                                            variant={!values.validVisa ? 'primary' : 'secondary'}
                                            onClick={() => {
                                                setFieldValue('validVisa', false);
                                            }}>
                                            {t('profile:no')}
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    {isLoading ? (
                                        <Skeleton height="20px" width="320px" />
                                    ) : (
                                        <div className="block text-gray-700 text-sm font-medium leading-5">
                                            <Tooltip
                                                content={t(
                                                    'profile:refused-visa-question-tooltip'
                                                )}>
                                                <div>{t('profile:refused-visa-question')}</div>
                                            </Tooltip>
                                        </div>
                                    )}
                                    <div className="flex mt-4 w-full space-x-2">
                                        <Button
                                            isLoading={isLoading}
                                            variant={values.refusedVisa ? 'primary' : 'secondary'}
                                            onClick={() => {
                                                setFieldValue('refusedVisa', true);
                                            }}>
                                            {t('profile:yes')}
                                        </Button>
                                        <Button
                                            isLoading={isLoading}
                                            variant={!values.refusedVisa ? 'primary' : 'secondary'}
                                            onClick={() => {
                                                setFieldValue('refusedVisa', false);
                                            }}>
                                            {t('profile:no')}
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <Field id="refusedVisaReason" name="refusedVisaReason">
                                        {(fieldProps: FieldProps) => (
                                            <Input
                                                isLoading={isLoading}
                                                label={t('profile:refused-visa-details')}
                                                rows={5}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </Section>
                        <Section
                            optional
                            description={t('profile:work-experiences-description')}
                            isLoading={isLoading}
                            title={t('profile:work-experiences-title')}>
                            <div className="mb-8 space-y-8">
                                <FieldArray name="workExperiences">
                                    {(fieldArrayProps: FieldArrayRenderProps) => (
                                        <div>
                                            {fieldArrayProps.form.values.workExperiences?.length >
                                                0 &&
                                                fieldArrayProps.form.values.workExperiences.map(
                                                    (_workExperience: any, index: number) => (
                                                        <div key={index} className="mb-4 space-y-4">
                                                            <Field
                                                                name={`workExperiences.${index}.title`}>
                                                                {(fieldProps: FieldProps) => (
                                                                    <Input
                                                                        isLoading={isLoading}
                                                                        label={t(
                                                                            'profile:job-title'
                                                                        )}
                                                                        type="text"
                                                                        {...fieldProps}
                                                                    />
                                                                )}
                                                            </Field>
                                                            <div className="flex flex-col items-center w-full sm:flex-row sm:space-x-4">
                                                                <div className="w-full sm:w-1/2">
                                                                    <Field
                                                                        name={`workExperiences.${index}.compagnyName`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <Input
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:compagny-name'
                                                                                )}
                                                                                type="text"
                                                                                {...fieldProps}
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>

                                                                <div className="w-full sm:w-1/2">
                                                                    <Field
                                                                        name={`workExperiences.${index}.address`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <Input
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:address'
                                                                                )}
                                                                                type="text"
                                                                                {...fieldProps}
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col items-center w-full sm:flex-row sm:space-x-4">
                                                                <div className="w-full sm:w-1/2">
                                                                    <Field
                                                                        name={`workExperiences.${index}.workedFrom`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <DateInput
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:start-time'
                                                                                )}
                                                                                maxDate={new Date()}
                                                                                {...fieldProps}
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                                <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                                                    <Field
                                                                        name={`workExperiences.${index}.workedTo`}>
                                                                        {(
                                                                            fieldProps: FieldProps
                                                                        ) => (
                                                                            <DateInput
                                                                                isLoading={
                                                                                    isLoading
                                                                                }
                                                                                label={t(
                                                                                    'profile:end-time'
                                                                                )}
                                                                                maxDate={new Date()}
                                                                                {...fieldProps}
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                            </div>

                                                            {values.workExperiences &&
                                                                values.workExperiences.length >
                                                                    1 && (
                                                                    <Button
                                                                        isLoading={isLoading}
                                                                        startIcon={faTrash}
                                                                        variant="secondary"
                                                                        onClick={() =>
                                                                            fieldArrayProps.remove(
                                                                                index
                                                                            )
                                                                        }>
                                                                        {t('profile:remove')}
                                                                    </Button>
                                                                )}
                                                        </div>
                                                    )
                                                )}
                                            <Button
                                                isLoading={isLoading}
                                                startIcon={faPlusCircle}
                                                variant="secondary"
                                                onClick={() =>
                                                    fieldArrayProps.push({
                                                        address: '',
                                                        compagnyName: '',
                                                        title: '',
                                                        workedFrom: null,
                                                        workedTo: null
                                                    })
                                                }>
                                                {t('profile:add-an-experience')}
                                            </Button>
                                        </div>
                                    )}
                                </FieldArray>
                            </div>

                            <div className="flex justify-end space-x-4">
                                <Button
                                    disabled={isSubmitting}
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faSave}
                                    type="submit"
                                    variant="primary">
                                    {t('profile:save')}
                                </Button>
                            </div>
                        </Section>
                        <Section
                            description={t('profile:required-by-all-schools-description')}
                            isLoading={isLoading}
                            title={t('profile:required-by-all-schools-title')}>
                            <div className="mb-8 space-y-8">
                                <Field id="passport" name="passport">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:passport')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="passportPhoto" name="passportPhoto">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:passport-photo')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="resume" name="resume">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:resume')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <Button
                                    disabled={isSubmitting}
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faSave}
                                    type="submit"
                                    variant="primary">
                                    {t('profile:save')}
                                </Button>
                            </div>
                        </Section>
                        <Section
                            description={t('profile:certificates-description')}
                            isLoading={isLoading}
                            title={t('profile:certificates-title')}>
                            <div className="mb-8 space-y-8">
                                <Field id="toefl" name="toefl">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:toefl')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="ielts" name="ielts">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:ielts')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="toeic" name="toeic">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:toeic')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="fce" name="fce">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:fce')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="gmat" name="gmat">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:gmat')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="gre" name="gre">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:gre')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="tageMage" name="tageMage">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:tage-mage')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="tef-tcf" name="tef-tcf">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:tef-tcf')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="dalf-delf" name="dalf-delf">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:dalf-delf')}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="last-3-transcript-1" name="last-3-transcript-1">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:last-3-transcript', { number: 1 })}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="last-3-transcript-2" name="last-3-transcript-2">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:last-3-transcript', { number: 2 })}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="last-3-transcript-3" name="last-3-transcript-3">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:last-3-transcript', { number: 3 })}
                                            student={student}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className="flex justify-between">
                                <Link href="/students">
                                    <Button
                                        isLoading={isLoading}
                                        isSubmitting={isSubmitting}
                                        startIcon={faArrowLeft}
                                        variant="secondary">
                                        Back
                                    </Button>
                                </Link>
                                <Button
                                    disabled={isSubmitting}
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faSave}
                                    type="submit"
                                    variant="primary">
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

export default StudentForm;
