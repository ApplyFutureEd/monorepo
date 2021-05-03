import {
    GetDocumentByStudentQuery,
    GetStudentByEmailQuery,
    updateStudent,
    UpdateStudentMutation,
    UpdateStudentMutationVariables
} from '@applyfuture/graphql';
import { Button, DateInput, Input, Section, Select } from '@applyfuture/ui';
import AutocompleteInput from '@applyfuture/ui/src/autocomplete-input/AutocompleteInput';
import {
    checkCompletion,
    countries,
    educationLevels,
    graphql,
    isChina,
    languages,
    scrollToErrors,
    toast
} from '@applyfuture/utils';
import Navigation from '@components/profile/navigation/Navigation';
import { faPlusCircle, faSave, faTrash } from '@fortawesome/pro-light-svg-icons';
import {
    Field,
    FieldArray,
    FieldArrayRenderProps,
    FieldProps,
    Form,
    Formik,
    FormikHelpers
} from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import ReactGoogleMapLoader from 'react-google-maps-loader';
import { array, mixed, number, object, string } from 'yup';

type Props = {
    documentsData: GetDocumentByStudentQuery;
    isLoading: boolean;
    refetch: () => void;
    studentData: GetStudentByEmailQuery;
};

const EducationHistoryForm: FC<Props> = (props) => {
    const { documentsData, isLoading, refetch, studentData } = props;
    const student = studentData?.getStudentByEmail?.items?.[0];
    const documents = documentsData?.getDocumentByStudent?.items;
    const { t } = useTranslation();

    const validationSchema = object().shape({
        educationCountry: mixed().required(t('common:error-field-required')),
        gradePointAverage: number()
            .min(0, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(4, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .required(t('common:error-field-required')),
        highestEducationLevel: mixed().required(t('common:error-field-required')),
        schoolsAttended: array().of(
            object().shape({
                address: string()
                    .test({
                        message: t('common:error-latin-characters'),
                        name: 'latinCharacters',
                        test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
                    })
                    .required(t('common:error-field-required')),
                attendedInstitutionFrom: string()
                    .nullable()
                    .test({
                        message: t('common:error-field-required'),
                        name: 'nullDate',
                        test: (value) => value
                    })
                    .required(t('common:error-field-required')),
                attendedInstitutionTo: string()
                    .nullable()
                    .test({
                        message: t('common:error-field-required'),
                        name: 'nullDate',
                        test: (value) => value
                    })
                    .required(t('common:error-field-required')),
                educationLevel: number().moreThan(0, t('common:error-field-required')),
                name: string()
                    .test({
                        message: t('common:error-latin-characters'),
                        name: 'latinCharacters',
                        test: (value) => !/^[\u4E00-\u9FA5]+$/.test(value)
                    })
                    .required(t('common:error-field-required')),

                primaryLanguageInstruction: string().required(t('common:error-field-required'))
            })
        )
    });

    type FormValues = {
        educationCountry: string | null;
        gradePointAverage: number | null;
        highestEducationLevel: number | null;
        schoolsAttended: Array<{
            address: string | null;
            attendedInstitutionFrom: string | null;
            attendedInstitutionTo: string | null;
            city: string | null;
            country: string | null;
            degreeAwarded: number | null;
            degreeAwardedOn: string | null;
            educationLevel: number | null;
            name: string | null;
            primaryLanguageInstruction: string | null;
        } | null> | null;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
        educationCountry: '',
        gradePointAverage: 0,
        highestEducationLevel: -1,
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
        ]
    });

    useEffect(() => {
        if (student) {
            setInitialValues({
                educationCountry: student.educationCountry,
                gradePointAverage: student.gradePointAverage,
                highestEducationLevel: student.highestEducationLevel,
                schoolsAttended: student.schoolsAttended
            });
        }
    }, [student]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            if (!student) {
                throw Error();
            }

            await graphql<UpdateStudentMutation, UpdateStudentMutationVariables>(updateStudent, {
                input: { ...values, id: student?.id, lastUpdate: new Date().valueOf() }
            });

            toast({
                description: t('profile:toast-information-updated-description', {
                    section: t('profile:education-history-page-title')
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

    const educationLevelsOptions = educationLevels.map((educationLevel) => ({
        label: t(`programs:${educationLevel.label}`),
        value: educationLevel.value
    }));

    const languagesOptions = languages.map((language) => ({
        label: t(`common:${language.label}`),
        value: language.value
    }));

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { errors, isSubmitting, values } = props;

                return (
                    <Form className="space-y-6">
                        <Section
                            headerComponent={
                                <Navigation
                                    completion={checkCompletion(student, documents)}
                                    isLoading={isLoading}
                                />
                            }
                            isLoading={isLoading}
                            title={t('profile:education-summary-title')}>
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
                                                                {isChina() ? (
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
                                                                ) : (
                                                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                                                        <ReactGoogleMapLoader
                                                                            params={{
                                                                                key:
                                                                                    process.env
                                                                                        .NEXT_PUBLIC_GOOGLE_MAP_KEY,
                                                                                libraries: 'places'
                                                                            }}
                                                                            render={(
                                                                                googleMaps: any
                                                                            ) =>
                                                                                googleMaps && (
                                                                                    <Field
                                                                                        name={`schoolsAttended.${index}.address`}>
                                                                                        {(
                                                                                            fieldProps: FieldProps
                                                                                        ) => (
                                                                                            <AutocompleteInput
                                                                                                isLoading={
                                                                                                    isLoading
                                                                                                }
                                                                                                label={t(
                                                                                                    'profile:address'
                                                                                                )}
                                                                                                {...fieldProps}
                                                                                            />
                                                                                        )}
                                                                                    </Field>
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>

                                                            {isChina() && (
                                                                <div className="flex flex-col items-center w-full sm:flex-row sm:space-x-4">
                                                                    <div className="w-full sm:w-1/2">
                                                                        <Field
                                                                            name={`schoolsAttended.${index}.city`}>
                                                                            {(
                                                                                fieldProps: FieldProps
                                                                            ) => (
                                                                                <Input
                                                                                    isLoading={
                                                                                        isLoading
                                                                                    }
                                                                                    label={t(
                                                                                        'profile:city'
                                                                                    )}
                                                                                    type="text"
                                                                                    {...fieldProps}
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    </div>
                                                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                                                        <Field
                                                                            name={`schoolsAttended.${index}.country`}>
                                                                            {(
                                                                                fieldProps: FieldProps
                                                                            ) => (
                                                                                <Select
                                                                                    isLoading={
                                                                                        isLoading
                                                                                    }
                                                                                    label={t(
                                                                                        'profile:country'
                                                                                    )}
                                                                                    options={
                                                                                        countriesOptions
                                                                                    }
                                                                                    {...fieldProps}
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    </div>
                                                                </div>
                                                            )}
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

export default EducationHistoryForm;
