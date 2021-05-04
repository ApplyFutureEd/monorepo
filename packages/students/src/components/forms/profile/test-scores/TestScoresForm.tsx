import {
    GetDocumentByStudentQuery,
    GetStudentByEmailQuery,
    updateStudent,
    UpdateStudentMutation,
    UpdateStudentMutationVariables
} from '@applyfuture/graphql';
import { Button, Checkbox, DateInput, Input, Section, Select } from '@applyfuture/ui';
import {
    cambridgeAdvancedResults,
    cambridgeFirstResults,
    checkCompletion,
    graphql,
    languageLevels,
    scrollToErrors,
    toast
} from '@applyfuture/utils';
import Navigation from '@components/profile/navigation/Navigation';
import { ToeflTooltip } from '@components/profile/toefl-tooltip/ToeflTooltip';
import { faSave } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import { number, object } from 'yup';

type Props = {
    documentsData: GetDocumentByStudentQuery;
    isLoading: boolean;
    refetch: () => void;
    studentData: GetStudentByEmailQuery;
};

const TestScoresForm: FC<Props> = (props) => {
    const { documentsData, isLoading, refetch, studentData } = props;
    const student = studentData?.getStudentByEmail?.items?.[0];
    const documents = documentsData?.getDocumentByStudent?.items;
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
        testCambridgeAdvanced: number | null;
        testCambridgeAdvancedDate: string | null;
        testCambridgeFirst: number | null;
        testCambridgeFirstDate: string | null;
        testCeliCilsItPlida: number | null;
        testCeliCilsItPlidaDate: string | null;
        testDele: number | null;
        testDeleDate: string | null;
        testDelfdalf: number | null;
        testDelfdalfDate: string | null;
        testEnglishPending: boolean | null;
        testGmat: number | null;
        testGmatDate: string | null;
        testGoethe: number | null;
        testGoetheDate: string | null;
        testGre: number | null;
        testGreDate: string | null;
        testIelts: number | null;
        testIeltsDate: string | null;
        testLogicAndReasoningPending: boolean | null;
        testOtherLanguagesPending: boolean | null;
        testTagemage: number | null;
        testTagemageDate: string | null;
        testTcftef: number | null;
        testTcftefDate: string | null;
        testToefl: number | null;
        testToeflDate: string | null;
        testToeic: number | null;
        testToeicDate: string | null;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
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
        testToeicDate: null
    });

    useEffect(() => {
        if (student) {
            setInitialValues({
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
                testToeicDate: student.testToeicDate
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
                    section: t('profile:test-scores-page-title')
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
                const { errors, isSubmitting, values } = props;

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
                            headerComponent={
                                <Navigation
                                    completion={checkCompletion(student, documents)}
                                    isLoading={isLoading}
                                />
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
                                                    tooltip={<ToeflTooltip />}
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

export default TestScoresForm;
