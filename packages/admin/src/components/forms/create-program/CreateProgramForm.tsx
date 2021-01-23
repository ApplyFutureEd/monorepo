import { ListSchoolsQuery } from '@applyfuture/graphql';
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
import { Button, DateInput, Editor, Input, Section, Select } from '@applyfuture/ui';
import {
    cambridgeAdvancedResults,
    cambridgeFirstResults,
    countries,
    currencies,
    degrees,
    disciplines,
    durationUnits,
    educationLevels,
    languageLevels,
    languages,
    schedules
} from '@applyfuture/utils';
import { faPlus, faTrash } from '@fortawesome/pro-light-svg-icons';
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
import React, { FC } from 'react';
import { object } from 'yup';

type Props = {
    data: ListSchoolsQuery;
    isLoading: boolean;
};

const CreateProgramForm: FC<Props> = (props) => {
    const { data, isLoading } = props;
    const { t } = useTranslation();
    const validationSchema = object().shape({});

    type FormValues = {
        applicationFee: number;
        applicationFeeCurrency: Currency;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: Currency;
        country: Country;
        degree: Degree;
        description: string;
        discipline: Discipline;
        duration: number;
        durationUnit: DurationUnit;
        fee: number;
        feeCurrency: Currency;
        feesAndFinancing: string;
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

    const initialValues: FormValues = {
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
        requestedDocuments: [],
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
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        actions.setSubmitting(false);
    };

    const schoolsOptions =
        data.listSchools?.items?.map((school) => ({
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

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
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
                                                        (intake: any, index: number) => (
                                                            <div
                                                                key={index}
                                                                className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                                                <div className="flex w-full space-x-4 sm:w-1/2">
                                                                    <div className="flex-grow">
                                                                        <Field
                                                                            name={`intakes.${index}`}>
                                                                            {(props: any) => (
                                                                                <DateInput
                                                                                    {...props}
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
                                                    label={`${t('profile:gpa')} (0-4)`}
                                                    max={4}
                                                    min={0}
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
                                    <div className="w-1/4">
                                        <Field id="testIelts" name="testIelts">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    label={`${t('profile:ielts')} (0 - 9)`}
                                                    max={9}
                                                    min={0}
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
                                                    label={`${t('profile:toeic')} (0 - 990)`}
                                                    max={990}
                                                    min={0}
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
                                                    label={`${t('profile:gre')} (260 - 344)`}
                                                    max={344}
                                                    min={260}
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
                                                    label={`${t('profile:gmat')} (200 - 800)`}
                                                    max={800}
                                                    min={200}
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
                                                    label={`${t('profile:tage-mage')} (0 - 600)`}
                                                    max={600}
                                                    min={0}
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
                        </Section>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default CreateProgramForm;
