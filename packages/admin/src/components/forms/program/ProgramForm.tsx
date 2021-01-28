import { GetProgramQuery, ListSchoolsQuery } from '@applyfuture/graphql';
import {
    Country,
    Currency,
    Degree,
    Discipline,
    DurationUnit,
    FeeUnit,
    Language,
    RequestedDocument,
    Schedule
} from '@applyfuture/models';
import {
    Button,
    DateInput,
    Editor,
    FileUploader,
    Input,
    Section,
    Select,
    Toggle
} from '@applyfuture/ui';
import {
    cambridgeAdvancedResults,
    cambridgeFirstResults,
    convertSecondsToUnit,
    countries,
    currencies,
    degrees,
    disciplines,
    durationUnits,
    educationLevels,
    languageLevels,
    languages,
    requestedDocuments,
    schedules
} from '@applyfuture/utils';
import { faPencil, faPlus, faSave, faTrash } from '@fortawesome/pro-light-svg-icons';
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
import { number, object, string } from 'yup';

type Props = {
    handleSubmit: (
        values: ProgramFormValues,
        actions: FormikHelpers<ProgramFormValues>
    ) => Promise<void>;
    isLoading: boolean;
    programData?: GetProgramQuery;
    schoolsData: ListSchoolsQuery;
};

export type ProgramFormValues = {
    applicationFee: number;
    applicationFeeCurrency: Currency;
    city: string;
    costOfLiving: number;
    costOfLivingCurrency: Currency;
    country: Country;
    degree: Degree;
    description: string | null;
    discipline: Discipline;
    duration: number;
    durationUnit: DurationUnit;
    fee: number;
    feeCurrency: Currency;
    feesAndFinancing: string | null;
    feeUnit: FeeUnit;
    gradePointAverage: number;
    highestEducationLevel: number;
    intakes: Array<Date>;
    intakeInformation: string;
    languages: Array<Language>;
    minimumAge: number;
    minimumWorkExperience: number;
    minimumWorkExperienceUnit: DurationUnit;
    name: string;
    otherRequirements: string;
    published: boolean;
    requestedDocuments: Array<RequestedDocument>;
    schedule: Schedule;
    schoolId: string;
    schoolName: string;
    slug: string;
    submissionDeadline: Date;
    testCambridgeAdvanced: number;
    testCambridgeFirst: number;
    testDelfdalf: number;
    testGmat: number;
    testGre: number;
    testIelts: number;
    testTagemage: number;
    testTcftef: number;
    testToefl: number;
    testToeic: number;
};

const ProgramForm: FC<Props> = (props) => {
    const { handleSubmit, isLoading, programData, schoolsData } = props;
    const { t } = useTranslation();
    const [toggle, setToggle] = useState(-1);

    const validationSchema = object().shape({
        gradePointAverage: number()
            .min(-1, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(4, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        name: string().required(t('common:required')),
        schoolId: string().required(t('common:required')),
        testGmat: number()
            .min(-1, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(800, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        testGre: number()
            .min(-1, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(344, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        testIelts: number()
            .min(-1, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(9, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        testTagemage: number()
            .min(-1, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(600, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        testToefl: number()
            .min(-1, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(667, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
        testToeic: number()
            .min(-1, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(990, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable()
    });

    const [initialValues, setInitialValues] = useState<ProgramFormValues>({
        applicationFee: 0,
        applicationFeeCurrency: 'EUR' as Currency,
        city: '',
        costOfLiving: 0,
        costOfLivingCurrency: 'EUR' as Currency,
        country: 'FR' as Country,
        degree: 'MASTER' as Degree,
        description: '',
        discipline: 'BUSINESS_MANAGEMENT_AND_ECONOMICS' as Discipline,
        duration: 1,
        durationUnit: 'YEAR' as DurationUnit,
        fee: 0,
        feeCurrency: 'EUR' as Currency,
        feeUnit: 'ANNUAL' as FeeUnit,
        feesAndFinancing: '',
        gradePointAverage: -1,
        highestEducationLevel: -1,
        intakeInformation: '',
        intakes: [new Date()],
        languages: ['FR' as Language],
        minimumAge: -1,
        minimumWorkExperience: -1,
        minimumWorkExperienceUnit: 'YEAR' as DurationUnit,
        name: '',
        otherRequirements: '',
        published: false,
        requestedDocuments: [
            {
                condition: '',
                description: '',
                isMandatory: true,
                isSpecific: false,
                name: 'passport',
                storageKey: ''
            },
            {
                condition: '',
                description: '',
                isMandatory: true,
                isSpecific: false,
                name: 'passport-photo',
                storageKey: ''
            },
            {
                condition: '',
                description: '',
                isMandatory: true,
                isSpecific: false,
                name: 'resume',
                storageKey: ''
            },
            {
                condition: '',
                description: '',
                isMandatory: true,
                isSpecific: false,
                name: 'last-3-transcript-1',
                storageKey: ''
            },
            {
                condition: '',
                description: '',
                isMandatory: true,
                isSpecific: false,
                name: 'last-3-transcript-2',
                storageKey: ''
            },
            {
                condition: '',
                description: '',
                isMandatory: true,
                isSpecific: false,
                name: 'last-3-transcript-3',
                storageKey: ''
            },
            {
                condition: '',
                description: '',
                isMandatory: true,
                isSpecific: false,
                name: 'toefl',
                storageKey: ''
            },
            {
                condition: '',
                description: '',
                isMandatory: true,
                isSpecific: false,
                name: 'ielts',
                storageKey: ''
            },
            {
                condition: '',
                description: '',
                isMandatory: true,
                isSpecific: false,
                name: 'toeic',
                storageKey: ''
            },
            {
                condition: '',
                description: '',
                isMandatory: true,
                isSpecific: false,
                name: 'fce',
                storageKey: ''
            },
            {
                condition: '',
                description: '',
                isMandatory: true,
                isSpecific: false,
                name: 'cae',
                storageKey: ''
            }
        ],
        schedule: 'FULL_TIME' as Schedule,
        schoolId: '',
        schoolName: '',
        slug: '',
        submissionDeadline: new Date(),
        testCambridgeAdvanced: -1,
        testCambridgeFirst: -1,
        testDelfdalf: -1,
        testGmat: -1,
        testGre: -1,
        testIelts: -1,
        testTagemage: -1,
        testTcftef: -1,
        testToefl: -1,
        testToeic: -1
    });

    useEffect(() => {
        if (programData?.getProgram) {
            const program: any = programData?.getProgram;

            program.duration = convertSecondsToUnit({
                unit: programData?.getProgram.durationUnit,
                value: programData?.getProgram.duration
            });
            program.intakes = programData?.getProgram.intakes
                .split(',')
                .map((intake) => new Date(intake));

            delete program.__typename;
            delete program.updatedAt;
            delete program.createdAt;
            delete program.school;

            setInitialValues(program);
        }
    }, [programData]);

    const schoolsOptions =
        schoolsData.listSchools?.items?.map((school) => ({
            label: school?.name || '',
            value: school?.id || ''
        })) || [];

    const countriesOptions = countries.map((country) => ({
        label: t(`common:${country.label}`),
        value: country.value
    }));

    const disciplinesOptions = disciplines.map((discipline) => ({
        label: t(`profile:${discipline.label}`),
        value: discipline.value
    }));

    const degreesOptions = degrees.map((degree) => ({
        label: t(`profile:${degree.label}`),
        value: degree.value
    }));

    const durationUnitsOptions = durationUnits.map((durationUnit) => ({
        label: durationUnit.label,
        value: durationUnit.value
    }));

    const schedulesOptions = schedules.map((schedule) => ({
        label: schedule.label,
        value: schedule.value
    }));

    const languagesOptions = languages.map((language) => ({
        label: t(`common:${language.label}`),
        value: language.value
    }));

    const currenciesOptions = currencies.map((currency) => ({
        label: currency.label,
        value: currency.value
    }));

    const educationLevelsOptions = educationLevels.map((educationLevel) => ({
        label: t(`programs:${educationLevel.label}`),
        value: educationLevel.value
    }));

    const cambridgeFirstResultsOptions = cambridgeFirstResults;

    const cambridgeAdvancedResultsOptions = cambridgeAdvancedResults;

    const languageLevelsOptions = languageLevels;

    const requestedDocumentsOptions = requestedDocuments.map((requestedDocument) => ({
        label: t(`profile:${requestedDocument.label}`),
        value: requestedDocument.value
    }));

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {(props) => {
                const { isSubmitting } = props;

                return (
                    <Form className="space-y-6">
                        <Section isLoading={isLoading} title="Program info">
                            <div className="space-y-3">
                                <div className="w-full">
                                    <Field id="schoolId" name="schoolId">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                isLoading={isLoading}
                                                label="School"
                                                options={schoolsOptions}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="w-full">
                                    <Field id="name" name="name">
                                        {(fieldProps: FieldProps) => (
                                            <Input
                                                isLoading={isLoading}
                                                label="Name"
                                                type="text"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/2">
                                        <Field id="city" name="city">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label="City"
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:mt-0 sm:w-1/2">
                                        <Field id="country" name="country">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label="Country"
                                                    options={countriesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/2">
                                        <Field id="degree" name="degree">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label="Degree"
                                                    options={degreesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:mt-0 sm:w-1/2">
                                        <Field id="discipline" name="discipline">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label="Discipline"
                                                    options={disciplinesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="duration" name="duration">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label="Duration"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:w-1/4">
                                        <Field id="durationUnit" name="durationUnit">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label="Unit"
                                                    options={durationUnitsOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:mt-0 sm:w-1/4">
                                        <Field id="schedule" name="schedule">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label="Schedule"
                                                    options={schedulesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:mt-0 sm:w-1/4">
                                        <Field id="languages" name="languages">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isMulti
                                                    isLoading={isLoading}
                                                    label="Languages"
                                                    options={languagesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <Field id="description" name="description">
                                        {(fieldProps: FieldProps) => (
                                            <Editor
                                                isLoading={isLoading}
                                                label="Description"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </Section>
                        <Section isLoading={isLoading} title="Intakes">
                            <div className="space-y-3">
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/2">
                                        <Field id="submissionDeadline" name="submissionDeadline">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    isLoading={isLoading}
                                                    label="Submission deadline"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/2" />
                                </div>
                                <FieldArray name="intakes">
                                    {(fieldArrayProps: FieldArrayRenderProps) => (
                                        <div>
                                            <div className="block text-gray-700 text-sm font-medium leading-5">
                                                Intakes
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                {fieldArrayProps.form.values.intakes?.length > 0 &&
                                                    fieldArrayProps.form.values.intakes.map(
                                                        (_intake: Date, index: number) => (
                                                            <div
                                                                key={index}
                                                                className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                                                <div className="flex w-full space-x-4 sm:w-1/2">
                                                                    <div className="flex-grow">
                                                                        <Field
                                                                            name={`intakes.${index}`}>
                                                                            {(
                                                                                fieldProps: FieldProps
                                                                            ) => (
                                                                                <DateInput
                                                                                    {...fieldProps}
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <Button
                                                                            startIcon={faTrash}
                                                                            type="button"
                                                                            variant="secondary"
                                                                            onClick={() =>
                                                                                fieldArrayProps.remove(
                                                                                    index
                                                                                )
                                                                            }>
                                                                            Delete
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                                <div className="w-1/2" />
                                                            </div>
                                                        )
                                                    )}
                                            </div>
                                            <div className="mt-3">
                                                <Button
                                                    startIcon={faPlus}
                                                    type="button"
                                                    variant="secondary"
                                                    onClick={() => fieldArrayProps.push('')}>
                                                    New intake
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </FieldArray>
                                <div className="w-full">
                                    <Field id="intakeInformation" name="intakeInformation">
                                        {(fieldProps: FieldProps) => (
                                            <Editor
                                                isLoading={isLoading}
                                                label="Intake information"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </Section>
                        <Section isLoading={isLoading} title="Finance">
                            <div className="space-y-3">
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="costOfLiving" name="costOfLiving">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label="Cost of living"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:w-1/4">
                                        <Field
                                            id="costOfLivingCurrency"
                                            name="costOfLivingCurrency">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label="Currency"
                                                    options={currenciesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:w-1/4">
                                        <Field id="applicationFee" name="applicationFee">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label="Application fee"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:w-1/4">
                                        <Field
                                            id="applicationFeeCurrency"
                                            name="applicationFeeCurrency">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label="Currency"
                                                    options={currenciesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <Field id="feesAndFinancing" name="feesAndFinancing">
                                        {(fieldProps: FieldProps) => (
                                            <Editor
                                                isLoading={isLoading}
                                                label="Fees and financing"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </Section>
                        <Section isLoading={isLoading} title="Requirements">
                            <div className="space-y-3">
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <Field
                                            id="highestEducationLevel"
                                            name="highestEducationLevel">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label={t('profile:highest-education-level')}
                                                    options={educationLevelsOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/2">
                                        <Field id="gradePointAverage" name="gradePointAverage">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={`${t('profile:gpa')} (0-4)`}
                                                    max={4}
                                                    min={-1}
                                                    step="any"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>

                                <div>
                                    <div className="my-6 w-full border-t border-gray-200" />
                                </div>

                                <div className="flex space-x-4">
                                    <div className="w-1/4">
                                        <Field id="testToefl" name="testToefl">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={`${t('profile:toefl')} (310 - 667)`}
                                                    max={667}
                                                    min={-1}
                                                    step="any"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/4">
                                        <Field id="testIelts" name="testIelts">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={`${t('profile:ielts')} (0 - 9)`}
                                                    max={9}
                                                    min={-1}
                                                    step="any"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/4">
                                        <Field id="testToeic" name="testToeic">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={`${t('profile:toeic')} (0 - 990)`}
                                                    max={990}
                                                    min={-1}
                                                    step="any"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/4" />
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/4">
                                        <Field id="testCambridgeFirst" name="testCambridgeFirst">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label={`${t('profile:fce')} (A - E)`}
                                                    options={cambridgeFirstResultsOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/4">
                                        <Field
                                            id="testCambridgeAdvanced"
                                            name="testCambridgeAdvanced">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label={`${t('profile:cae')} (A - C)`}
                                                    options={cambridgeAdvancedResultsOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/4" />
                                    <div className="w-1/4" />
                                </div>

                                <div>
                                    <div className="my-6 w-full border-t border-gray-200" />
                                </div>

                                <div className="flex space-x-4">
                                    <div className="w-1/4">
                                        <Field id="testTcftef" name="testTcftef">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label={`${t('profile:tcf-tef')} (C2 - A1)`}
                                                    options={languageLevelsOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/4">
                                        <Field id="testDelfdalf" name="testDelfdalf">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label={`${t('profile:delf-dalf')} (C2 - A1)`}
                                                    options={languageLevelsOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/4" />
                                    <div className="w-1/4" />
                                </div>

                                <div>
                                    <div className="my-6 w-full border-t border-gray-200" />
                                </div>

                                <div className="flex space-x-4">
                                    <div className="w-1/4">
                                        <Field id="testGre" name="testGre">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={`${t('profile:gre')} (260 - 344)`}
                                                    max={344}
                                                    min={-1}
                                                    step="any"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/4">
                                        <Field id="testGmat" name="testGmat">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={`${t('profile:gmat')} (200 - 800)`}
                                                    max={800}
                                                    min={-1}
                                                    step="any"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/4">
                                        <Field id="testTagemage" name="testTagemage">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label={`${t('profile:tage-mage')} (0 - 600)`}
                                                    max={600}
                                                    min={-1}
                                                    step="any"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-1/4" />
                                </div>

                                <div>
                                    <div className="my-6 w-full border-t border-gray-200" />
                                </div>

                                <div className="w-full">
                                    <Field id="otherRequirements" name="otherRequirements">
                                        {(fieldProps: FieldProps) => (
                                            <Editor
                                                isLoading={isLoading}
                                                label="Other requirements"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>

                            <div>
                                <div className="my-6 w-full border-t border-gray-200" />
                            </div>

                            <FieldArray name="requestedDocuments">
                                {(fieldArrayProps: FieldArrayRenderProps) => (
                                    <div>
                                        <div className="block text-gray-700 text-sm font-medium leading-5">
                                            Requested documents
                                        </div>
                                        <div className="space-y-2">
                                            {fieldArrayProps.form.values.requestedDocuments
                                                ?.length > 0 &&
                                                fieldArrayProps.form.values.requestedDocuments.map(
                                                    (
                                                        _requestedDocument: RequestedDocument,
                                                        index: number
                                                    ) => {
                                                        return (
                                                            <div key={index}>
                                                                <div className="flex space-x-2">
                                                                    <div className="flex-grow">
                                                                        <Field
                                                                            name={`requestedDocuments.${index}.name`}>
                                                                            {(
                                                                                fieldProps: FieldProps
                                                                            ) => (
                                                                                <Select
                                                                                    {...fieldProps}
                                                                                    options={
                                                                                        requestedDocumentsOptions
                                                                                    }
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <Button
                                                                            startIcon={faPencil}
                                                                            type="button"
                                                                            variant={
                                                                                toggle === index
                                                                                    ? 'primary'
                                                                                    : 'secondary'
                                                                            }
                                                                            onClick={() =>
                                                                                toggle === index
                                                                                    ? setToggle(-1)
                                                                                    : setToggle(
                                                                                          index
                                                                                      )
                                                                            }>
                                                                            Edit
                                                                        </Button>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <Button
                                                                            startIcon={faTrash}
                                                                            type="button"
                                                                            variant="secondary"
                                                                            onClick={() =>
                                                                                fieldArrayProps.remove(
                                                                                    index
                                                                                )
                                                                            }>
                                                                            Remove
                                                                        </Button>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    className={
                                                                        toggle === index
                                                                            ? 'mt-4 block bg-indigo-50 p-4 rounded-md border-gray-300 border'
                                                                            : 'hidden'
                                                                    }>
                                                                    <div className="flex mb-4 space-x-4">
                                                                        <div className="w-1/2">
                                                                            <Field
                                                                                name={`requestedDocuments.${index}.description`}>
                                                                                {(
                                                                                    fieldProps: FieldProps
                                                                                ) => (
                                                                                    <Input
                                                                                        isLoading={
                                                                                            isLoading
                                                                                        }
                                                                                        label="Description"
                                                                                        {...fieldProps}
                                                                                    />
                                                                                )}
                                                                            </Field>
                                                                        </div>
                                                                        <div className="w-1/2">
                                                                            <Field
                                                                                name={`requestedDocuments.${index}.condition`}>
                                                                                {(
                                                                                    fieldProps: FieldProps
                                                                                ) => (
                                                                                    <Input
                                                                                        isLoading={
                                                                                            isLoading
                                                                                        }
                                                                                        label="Condition"
                                                                                        {...fieldProps}
                                                                                    />
                                                                                )}
                                                                            </Field>
                                                                        </div>
                                                                    </div>

                                                                    <div className="align-items flex mb-4 space-x-4">
                                                                        <Field
                                                                            name={`requestedDocuments.${index}.isMandatory`}>
                                                                            {(
                                                                                fieldProps: FieldProps
                                                                            ) => (
                                                                                <Toggle
                                                                                    label="Mandatory"
                                                                                    {...fieldProps}
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                        <Field
                                                                            name={`requestedDocuments.${index}.isSpecific`}>
                                                                            {(
                                                                                fieldProps: FieldProps
                                                                            ) => (
                                                                                <Toggle
                                                                                    label="Specific"
                                                                                    {...fieldProps}
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    </div>

                                                                    <div className="mb-4">
                                                                        <Field
                                                                            name={`requestedDocuments.${index}.storageKey`}>
                                                                            {(
                                                                                fieldProps: FieldProps
                                                                            ) => (
                                                                                <FileUploader
                                                                                    bypassAcceptedFileFormat
                                                                                    isLoading={
                                                                                        isLoading
                                                                                    }
                                                                                    label="Template"
                                                                                    {...fieldProps}
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                        </div>
                                        <div className="mt-3">
                                            <Button
                                                startIcon={faPlus}
                                                variant="secondary"
                                                onClick={() =>
                                                    fieldArrayProps.push({
                                                        condition: '',
                                                        description: '',
                                                        isMandatory: true,
                                                        isSpecific: false,
                                                        name: '',
                                                        storageKey: ''
                                                    })
                                                }>
                                                New document
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </FieldArray>

                            <div className="align-items flex justify-end mt-6 space-x-4">
                                <Field id="published" name="published">
                                    {(fieldProps: FieldProps) => (
                                        <Toggle label="Published" {...fieldProps} />
                                    )}
                                </Field>
                                <Button isLoading={isSubmitting} startIcon={faSave} type="submit">
                                    Save
                                </Button>
                            </div>
                        </Section>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default ProgramForm;
