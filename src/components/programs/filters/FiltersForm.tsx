import Button from '@components/core/button/Button';
import Input from '@components/core/input/Input';
import Select from '@components/core/select/Select';
import { faCheck, faUndo } from '@fortawesome/pro-light-svg-icons';
import { SearchableProgramFilterInput } from '@graphql/API';
import { cambridgeAdvancedResults } from '@utils/forms/cambridgeAdvancedResults';
import { cambridgeFirstResults } from '@utils/forms/cambridgeFirstResults';
import { cities } from '@utils/forms/cities';
import { countries, supportedCountries } from '@utils/forms/countries';
import { degrees } from '@utils/forms/degrees';
import { disciplines } from '@utils/forms/disciplines';
import { educationLevels } from '@utils/forms/educationLevels';
import { languageLevels } from '@utils/forms/languagesLevels';
import { createFilter } from '@utils/helpers/filters';
import cx from 'classnames';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { isEmpty } from 'lodash';
import sortBy from 'lodash/sortBy';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { number, object } from 'yup';

type Props = {
    currentTab: number;
    handleFilter: (filter: SearchableProgramFilterInput) => void;
};

const FiltersForm: FC<Props> = (props) => {
    const { currentTab, handleFilter } = props;
    const { t } = useTranslation();

    const validationSchema = object().shape({
        testGmat: number()
            .min(200, (props) => t('common:must-be-superior-validator', { value: props.min }))
            .max(800, (props) =>
                t('common:must-be-inferior-or-equal-validator', { value: props.max })
            )
            .nullable(),
        testGre: number()
            .min(260, (props) => t('common:must-be-superior-validator', { value: props.min }))
            .max(344, (props) =>
                t('common:must-be-inferior-or-equal-validator', { value: props.max })
            )
            .nullable(),
        testIelts: number()
            .min(0, (props) => t('common:must-be-superior-validator', { value: props.min }))
            .max(9, (props) =>
                t('common:must-be-inferior-or-equal-validator', { value: props.max })
            )
            .nullable(),
        testTagemage: number()
            .min(0, (props) => t('common:must-be-superior-validator', { value: props.min }))
            .max(600, (props) =>
                t('common:must-be-inferior-or-equal-validator', { value: props.max })
            )
            .nullable(),
        testToefl: number()
            .min(310, (props) => t('common:must-be-superior-validator', { value: props.min }))
            .max(667, (props) =>
                t('common:must-be-inferior-or-equal-validator', { value: props.max })
            )
            .nullable(),
        testToeic: number()
            .min(0, (props) => t('common:must-be-superior-validator', { value: props.min }))
            .max(990, (props) =>
                t('common:must-be-inferior-or-equal-validator', { value: props.max })
            )
            .nullable()
    });

    type FormValues = {
        cities: Array<string>;
        countries: Array<string>;
        degrees: Array<string>;
        disciplines: Array<string>;
        educationCountry: string;
        gradePointAverage: number | undefined;
        highestEducationLevel: number | undefined;
        intake: string;
        maxApplicationFee: number | undefined;
        maxTuitionFee: number | undefined;
        minApplicationFee: number | undefined;
        minTuitionFee: number | undefined;
        nationality: string;
        testCambridgeAdvanced: number | undefined;
        testCambridgeFirst: number | undefined;
        testDelfdalf: number | undefined;
        testGmat: number | undefined;
        testGre: number | undefined;
        testIelts: number | undefined;
        testTagemage: number | undefined;
        testTcftef: number | undefined;
        testToefl: number | undefined;
        testToeic: number | undefined;
    };

    const initialValues: FormValues = {
        cities: [],
        countries: [],
        degrees: [],
        disciplines: [],
        educationCountry: '',
        gradePointAverage: undefined,
        highestEducationLevel: undefined,
        intake: '',
        maxApplicationFee: undefined,
        maxTuitionFee: undefined,
        minApplicationFee: undefined,
        minTuitionFee: undefined,
        nationality: '',
        testCambridgeAdvanced: undefined,
        testCambridgeFirst: undefined,
        testDelfdalf: undefined,
        testGmat: undefined,
        testGre: undefined,
        testIelts: undefined,
        testTagemage: undefined,
        testTcftef: undefined,
        testToefl: undefined,
        testToeic: undefined
    };

    const handleClear = (values: FormValues, setValues: FormikHelpers<FormValues>['setValues']) => {
        if (currentTab === 0) {
            setValues({
                ...values,
                cities: [],
                countries: [],
                degrees: [],
                disciplines: [],
                maxApplicationFee: undefined,
                maxTuitionFee: undefined,
                minApplicationFee: undefined,
                minTuitionFee: undefined
            });
        }
        if (currentTab === 1) {
            setValues({
                ...values,
                educationCountry: '',
                gradePointAverage: undefined,
                highestEducationLevel: undefined,
                nationality: '',
                testCambridgeAdvanced: undefined,
                testCambridgeFirst: undefined,
                testDelfdalf: undefined,
                testGmat: undefined,
                testGre: undefined,
                testIelts: undefined,
                testTagemage: undefined,
                testTcftef: undefined,
                testToefl: undefined,
                testToeic: undefined
            });
        }
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const filter = createFilter(values);
        handleFilter(filter);
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
                                                {...fieldProps}></Select>
                                        )}
                                    </Field>
                                </div>
                                <div className="w-1/2">
                                    <Field id="educationCountry" name="educationCountry">
                                        {(fieldProps: FieldProps) => (
                                            <Select
                                                label={t('profile:education-country')}
                                                options={countriesOptions}
                                                {...fieldProps}></Select>
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
                                                tooltip={<div />}
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

export default FiltersForm;
