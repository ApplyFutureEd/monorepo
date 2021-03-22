import { GetStudentByEmailQuery, SearchableProgramFilterInput } from '@applyfuture/graphql';
import { Button, Input, Select } from '@applyfuture/ui';
import {
    cambridgeAdvancedResults,
    cambridgeFirstResults,
    cities,
    countries,
    createFilter,
    degrees,
    disciplines,
    educationLevels,
    languageLevels,
    supportedCountries
} from '@applyfuture/utils';
import { ToeflTooltip } from '@components/profile/toefl-tooltip/ToeflTooltip';
import { faCheck, faUndo } from '@fortawesome/pro-light-svg-icons';
import cx from 'classnames';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { isEmpty } from 'lodash';
import sortBy from 'lodash/sortBy';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import { number, object } from 'yup';

type Props = {
    currentTab: number;
    handleClose: () => void;
    handleFilter: (filter: SearchableProgramFilterInput) => void;
    studentData: GetStudentByEmailQuery;
};

<<<<<<< HEAD:packages/students/src/components/forms/filters/FiltersForm.tsx
const FiltersForm: FC<Props> = (props) => {
    const { currentTab, handleClose, handleFilter, studentData } = props;
=======
const ProgramsFilterForm: FC<Props> = (props) => {
    const { currentTab, handleClose, handleFilter } = props;
>>>>>>> master:packages/students/src/components/forms/programs-filter/ProgramsFilterForm.tsx
    const { t } = useTranslation();
    const student = studentData?.getStudentByEmail?.items?.[0];

    const validationSchema = object().shape({
        gradePointAverage: number()
            .min(0, ({ min }) => t('common:must-be-superior-validator', { value: min }))
            .max(4, ({ max }) => t('common:must-be-inferior-or-equal-validator', { value: max }))
            .nullable(),
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
            .nullable()
    });

    type FormValues = {
        cities: Array<string>;
        countries: Array<string>;
        degrees: Array<string>;
        disciplines: Array<string>;
        educationCountry: string;
        gradePointAverage: number | string | null;
        highestEducationLevel: number | string | null;
        intake: string;
        maxApplicationFee: string;
        maxTuitionFee: string;
        minApplicationFee: string;
        minTuitionFee: string;
        nationality: string;
<<<<<<< HEAD:packages/students/src/components/forms/filters/FiltersForm.tsx
        testCambridgeAdvanced: number | string | null;
        testCambridgeFirst: number | string | null;
        testCeli: number | string | null;
        testCils: number | string | null;
        testDele: number | string | null;
        testDelfdalf: number | string | null;
        testGmat: number | string | null;
        testGoethe: number | string | null;
        testGre: number | string | null;
        testIelts: number | string | null;
        testIt: number | string | null;
        testPlida: number | string | null;
        testTagemage: number | string | null;
        testTcftef: number | string | null;
        testToefl: number | string | null;
        testToeic: number | string | null;
=======
        testCambridgeAdvanced: string;
        testCambridgeFirst: string;
        testCeliCilsItPlida: string;
        testDele: string;
        testDelfdalf: string;
        testGmat: string;
        testGoethe: string;
        testGre: string;
        testIelts: string;
        testTagemage: string;
        testTcftef: string;
        testToefl: string;
        testToeic: string;
>>>>>>> master:packages/students/src/components/forms/programs-filter/ProgramsFilterForm.tsx
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
        cities: [],
        countries: [],
        degrees: [],
        disciplines: [],
        educationCountry: '',
        gradePointAverage: null,
        highestEducationLevel: null,
        intake: '',
        maxApplicationFee: '',
        maxTuitionFee: '',
        minApplicationFee: '',
        minTuitionFee: '',
        nationality: '',
        testCambridgeAdvanced: '',
        testCambridgeFirst: '',
        testCeliCilsItPlida: '',
        testDele: '',
        testDelfdalf: '',
        testGmat: '',
        testGoethe: '',
        testGre: '',
        testIelts: '',
        testTagemage: '',
        testTcftef: '',
        testToefl: '',
        testToeic: ''
    });

    useEffect(() => {
        if (student) {
            setInitialValues({
                ...initialValues,
                educationCountry: student.educationCountry || '',
                gradePointAverage: student.gradePointAverage || '',
                highestEducationLevel: student.highestEducationLevel || '',
                nationality: student.nationality || '',
                testCambridgeAdvanced: student.testCambridgeAdvanced || '',
                testCambridgeFirst: student.testCambridgeFirst || '',
                testCeli: student.testCeli || '',
                testCils: student.testCils || '',
                testDele: student.testDele || '',
                testDelfdalf: student.testDelfdalf || '',
                testGmat: student.testGmat || '',
                testGoethe: student.testGoethe || '',
                testGre: student.testGre || '',
                testIelts: student.testIelts || '',
                testIt: student.testIt || '',
                testPlida: student.testPlida || '',
                testTagemage: student.testTagemage || '',
                testTcftef: student.testTcftef || '',
                testToefl: student.testToefl || '',
                testToeic: student.testToeic || ''
            });
        }
    }, [student]);

    const handleClear = (values: FormValues, setValues: FormikHelpers<FormValues>['setValues']) => {
        if (currentTab === 0) {
            setValues({
                ...values,
                cities: [],
                countries: [],
                degrees: [],
                disciplines: [],
                maxApplicationFee: '',
                maxTuitionFee: '',
                minApplicationFee: '',
                minTuitionFee: ''
            });
        }
        if (currentTab === 1) {
            setValues({
                ...values,
                educationCountry: '',
                gradePointAverage: '',
                highestEducationLevel: '',
                nationality: '',
                testCambridgeAdvanced: '',
                testCambridgeFirst: '',
                testCeliCilsItPlida: '',
                testDele: '',
                testDelfdalf: '',
                testGmat: '',
                testGoethe: '',
                testGre: '',
                testIelts: '',
                testTagemage: '',
                testTcftef: '',
                testToefl: '',
                testToeic: ''
            });
        }
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const filter = createFilter(values);
        handleFilter(filter);
        handleClose();
        actions.setSubmitting(false);
    };

    const baseClasses = 'space-y-4 hidden';
    const activeClasses = 'space-y-4 block';

    const countriesOptions = countries.map((country) => ({
        label: t(`common:${country.label}`),
        value: country.value
    }));

    const supportedCountriesOptions = supportedCountries.map((country) => ({
        label: t(`common:${country.label}`),
        value: country.value
    }));

    const citiesOptions = (values: FormValues) => {
        if (isEmpty(values.countries)) {
            return sortBy(
                cities.map((country) => ({
                    label: country.label,
                    value: country.label
                })),
                ['label']
            );
        }

        return sortBy(
            cities
                .filter((city) => values.countries.includes(city.country))
                .map((country) => ({
                    label: country.label,
                    value: country.label
                })),
            ['label']
        );
    };

    const disciplinesOptions = disciplines.map((discipline) => ({
        label: t(`profile:${discipline.label}`),
        value: discipline.value
    }));

    const degreesOptions = degrees.map((degree) => ({
        label: t(`profile:${degree.label}`),
        value: degree.value
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
            onSubmit={onSubmit}>
            {(props) => {
                const { setValues, values } = props;

                return (
                    <Form>
                        <div
                            className={cx({
                                [`${baseClasses}`]: currentTab !== 0,
                                [`${activeClasses}`]: currentTab === 0
                            })}>
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <Field id="countries" name="countries">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                isMulti
                                                label={t('programs:country')}
                                                options={supportedCountriesOptions}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="w-1/2">
                                    <Field id="cities" name="cities">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                isMulti
                                                label={t('programs:city')}
                                                options={citiesOptions(values)}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <Field id="disciplines" name="disciplines">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                isMulti
                                                label={t('programs:discipline')}
                                                options={disciplinesOptions}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>

                                <div className="w-1/2">
                                    <Field id="degrees" name="degrees">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                isMulti
                                                label={t('programs:degree')}
                                                options={degreesOptions}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <Field id="minTuitionFee" name="minTuitionFee">
                                        {(fieldProps: FieldProps) => (
                                            <Input
                                                label={t('programs:min-tuition-fee')}
                                                type="number"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="w-1/2">
                                    <Field id="maxTuitionFee" name="maxTuitionFee">
                                        {(fieldProps: FieldProps) => (
                                            <Input
                                                label={t('programs:max-tuition-fee')}
                                                type="number"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <Field id="minApplicationFee" name="minApplicationFee">
                                        {(fieldProps: FieldProps) => (
                                            <Input
                                                label={t('programs:min-application-fee')}
                                                type="number"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>

                                <div className="w-1/2">
                                    <Field id="maxApplicationFee" name="maxApplicationFee">
                                        {(fieldProps: FieldProps) => (
                                            <Input
                                                label={t('programs:max-application-fee')}
                                                type="number"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <div
                            className={cx({
                                [`${baseClasses}`]: currentTab !== 1,
                                [`${activeClasses}`]: currentTab === 1
                            })}>
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <Field id="nationality" name="nationality">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                label={t('profile:nationality')}
                                                options={countriesOptions}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="w-1/2">
                                    <Field id="educationCountry" name="educationCountry">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                label={t('profile:education-country')}
                                                options={countriesOptions}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <Field id="highestEducationLevel" name="highestEducationLevel">
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
                                                tooltip={t('profile:gpa-tooltip')}
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
                                                tooltip={<ToeflTooltip />}
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
                                                tooltip={t('profile:test-ielts-tooltip')}
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
                                                tooltip={t('profile:test-toeic-tooltip')}
                                                type="number"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/4">
                                    <Field id="testCambridgeFirst" name="testCambridgeFirst">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                label={`${t('profile:fce')} (A - E)`}
                                                options={cambridgeFirstResultsOptions}
                                                tooltip={t('profile:test-cambridge-first-tooltip')}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="w-1/4">
                                    <Field id="testCambridgeAdvanced" name="testCambridgeAdvanced">
                                        {(fieldProps: FieldProps) => (
                                            <Select
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
                                                tooltip={t('profile:test-tcf-tef-tooltip')}
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
                                                tooltip={t('profile:test-delf-dalf-tooltip')}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="w-1/4">
                                    <Field id="testGoethe" name="testGoethe">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                label={`${t('profile:goethe')} (C2 - A1)`}
                                                options={languageLevelsOptions}
                                                tooltip={t('profile:test-goethe-tooltip')}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <div className="w-1/4">
                                    <Field id="testDele" name="testDele">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                label={`${t('profile:dele')} (C2 - A1)`}
                                                options={languageLevelsOptions}
                                                tooltip={t('profile:test-dele-tooltip')}
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-1/4">
                                    <Field id="testCeliCilsItPlida" name="testCeliCilsItPlida">
                                        {(fieldProps: FieldProps) => (
                                            <Select
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
                                                tooltip={t('profile:test-gre-tooltip')}
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
                                                tooltip={t('profile:test-gmat-tooltip')}
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
                                                tooltip={t('profile:test-tage-mage-tooltip')}
                                                type="number"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end pt-4 w-full bg-white space-x-4">
                            <Button
                                startIcon={faUndo}
                                type="button"
                                variant="secondary"
                                onClick={() => handleClear(values, setValues)}>
                                {t('programs:side-over-clear-filters')}
                            </Button>
                            <Button startIcon={faCheck} type="submit">
                                {t('programs:side-over-apply-filters')}
                            </Button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default ProgramsFilterForm;
