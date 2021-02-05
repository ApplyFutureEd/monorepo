import {
    getStudentByEmail,
    GetStudentByEmailQuery,
    GetStudentByEmailQueryVariables,
    updateStudent,
    UpdateStudentMutation,
    UpdateStudentMutationVariables
} from '@applyfuture/graphql';
import { Button, Checkbox, DateInput, Input, Section, Select } from '@applyfuture/ui';
import {
    cambridgeAdvancedResults,
    cambridgeFirstResults,
    graphql,
    languageLevels,
    toast
} from '@applyfuture/utils';
import Navigation from '@components/profile/navigation/Navigation';
import { faSave } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import { number, object } from 'yup';

type Props = {
    data: GetStudentByEmailQuery;
    isLoading: boolean;
};

const TestScoreForm: FC<Props> = (props) => {
    const { data, isLoading } = props;
    const { t } = useTranslation();

    const validationSchema = object().shape({
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
        testCambridgeAdvanced: string;
        testCambridgeAdvancedDate: Date | null;
        testCambridgeFirst: string;
        testCambridgeFirstDate: Date | null;
        testDelfdalf: string;
        testDelfdalfDate: Date | null;
        testEnglishPending: boolean;
        testFrenchPending: boolean;
        testGmat: string;
        testGmatDate: Date | null;
        testGre: string;
        testGreDate: Date | null;
        testIelts: string;
        testIeltsDate: Date | null;
        testLogicAndReasoningPending: boolean;
        testTagemage: string;
        testTagemageDate: Date | null;
        testTcftef: string;
        testTcftefDate: Date | null;
        testToefl: string;
        testToeflDate: Date | null;
        testToeic: string;
        testToeicDate: Date | null;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
        testCambridgeAdvanced: '',
        testCambridgeAdvancedDate: null,
        testCambridgeFirst: '',
        testCambridgeFirstDate: null,
        testDelfdalf: '',
        testDelfdalfDate: null,
        testEnglishPending: false,
        testFrenchPending: false,
        testGmat: '',
        testGmatDate: null,
        testGre: '',
        testGreDate: null,
        testIelts: '',
        testIeltsDate: null,
        testLogicAndReasoningPending: false,
        testTagemage: '',
        testTagemageDate: null,
        testTcftef: '',
        testTcftefDate: null,
        testToefl: '',
        testToeflDate: null,
        testToeic: '',
        testToeicDate: null
    });

    useEffect(() => {
        if (data?.getStudentByEmail) {
            const student: any = data?.getStudentByEmail?.items?.[0];
            setInitialValues(student);
        }
    }, [data]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            const student: any = { ...values };
            delete student.__typename;
            delete student.updatedAt;
            delete student.createdAt;
            delete student.owner;
            delete student.documents;
            delete student.applications;
            delete student.studentId;

            await graphql<UpdateStudentMutation, UpdateStudentMutationVariables>(updateStudent, {
                input: student
            });

            toast({
                description: `General information successfully updated`,
                title: t('profile:toast-information-updated'),
                variant: 'success'
            });
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: 'An error occured',
                variant: 'error'
            });
        }
        actions.setSubmitting(false);
    };

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
                const { isSubmitting, values } = props;

                return (
                    <Form className="space-y-6">
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
                                                        testCambridgeAdvanced: '',
                                                        testCambridgeAdvancedDate: null,
                                                        testCambridgeFirst: '',
                                                        testCambridgeFirstDate: null,
                                                        testEnglishPending: !values.testEnglishPending,
                                                        testIelts: '',
                                                        testIeltsDate: null,
                                                        testToefl: '',
                                                        testToeflDate: null,
                                                        testToeic: '',
                                                        testToeicDate: null
                                                    });
                                                }
                                            }}
                                        />
                                    )}
                                </Field>
                            }
                            headerComponent={<Navigation completion={{}} isLoading={isLoading} />}
                            isLoading={isLoading}
                            title={t('profile:english-tests')}>
                            <div className="mb-8 space-y-8">
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="testToefl" name="testToefl">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    disabled={values.testEnglishPending}
                                                    isLoading={isLoading}
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
                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testToeflDate" name="testToeflDate">
                                            {(fieldProps: FieldProps) => (
                                                <DateInput
                                                    disabled={values.testEnglishPending}
                                                    isLoading={isLoading}
                                                    label={t('profile:test-exam-date', {
                                                        test: 'TOEFL'
                                                    })}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="mt-8 w-full sm:mt-0 sm:w-1/4">
                                        <Field id="testIelts" name="testIelts">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    disabled={values.testEnglishPending}
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
                                                    disabled={values.testEnglishPending}
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
                                                    disabled={values.testEnglishPending}
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
                                                    disabled={values.testEnglishPending}
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
                                                    disabled={values.testEnglishPending}
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
                                                    disabled={values.testEnglishPending}
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
                                                    disabled={values.testEnglishPending}
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
                                                    disabled={values.testEnglishPending}
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
                                <Field id="testFrenchPending" name="testFrenchPending">
                                    {(fieldProps: FieldProps) => (
                                        <Checkbox
                                            label={t('profile:no-french-tests')}
                                            {...fieldProps}
                                            field={{
                                                ...fieldProps.field,
                                                onChange: () => {
                                                    setInitialValues({
                                                        ...values,
                                                        testDelfdalf: '',
                                                        testDelfdalfDate: null,
                                                        testFrenchPending: !values.testFrenchPending,
                                                        testTcftef: '',
                                                        testTcftefDate: null
                                                    });
                                                }
                                            }}
                                        />
                                    )}
                                </Field>
                            }
                            isLoading={isLoading}
                            title={t('profile:french-tests')}>
                            <div className="mb-8 space-y-8">
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="testTcftef" name="testTcftef">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    disabled={values.testFrenchPending}
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
                                                    disabled={values.testFrenchPending}
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
                                                    disabled={values.testFrenchPending}
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
                                                    disabled={values.testFrenchPending}
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
                                                        testGmat: '',
                                                        testGmatDate: null,
                                                        testGre: '',
                                                        testGreDate: null,
                                                        testLogicAndReasoningPending: !values.testLogicAndReasoningPending,
                                                        testTagemage: '',
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
                                                    disabled={values.testLogicAndReasoningPending}
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
                                                    disabled={values.testLogicAndReasoningPending}
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
                                                    disabled={values.testLogicAndReasoningPending}
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
                                                    disabled={values.testLogicAndReasoningPending}
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
                                                    disabled={values.testLogicAndReasoningPending}
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
                                                    disabled={values.testLogicAndReasoningPending}
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
                    </Form>
                );
            }}
        </Formik>
    );
};

export default TestScoreForm;
