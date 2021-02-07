import {
    GetDocumentByStudentQuery,
    GetStudentByEmailQuery,
    updateStudent,
    UpdateStudentMutation,
    UpdateStudentMutationVariables
} from '@applyfuture/graphql';
import { Button, DateInput, Input, Section, Tooltip } from '@applyfuture/ui';
import AutocompleteInput from '@applyfuture/ui/src/autocomplete-input/AutocompleteInput';
import { graphql, isChina, isCompleted, toast } from '@applyfuture/utils';
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
import Skeleton from 'react-loading-skeleton';
import { array, boolean, object, string } from 'yup';

type Props = {
    documentsData: GetDocumentByStudentQuery;
    isLoading: boolean;
    refetch: () => void;
    studentData: GetStudentByEmailQuery;
};

const BackgroundInformationForm: FC<Props> = (props) => {
    const { documentsData, isLoading, refetch, studentData } = props;
    const student = studentData?.getStudentByEmail?.items?.[0];
    const documents = documentsData?.getDocumentByStudent?.items;
    const { t } = useTranslation();

    const validationSchema = object().shape({
        refusedVisa: boolean().required(t('common:error-field-required')),
        refusedVisaReason: string(),
        validVisa: boolean().required(t('common:error-field-required')),
        workExperiences: array().of(
            object().shape({
                compagnyName: string().test({
                    message: t('common:error-latin-characters'),
                    name: 'latinCharacters',
                    test: (string) => !/^[\u4E00-\u9FA5]+$/.test(string)
                }),
                title: string().test({
                    message: t('common:error-latin-characters'),
                    name: 'latinCharacters',
                    test: (string) => !/^[\u4E00-\u9FA5]+$/.test(string)
                })
            })
        )
    });

    type FormValues = {
        refusedVisa: boolean | null;
        refusedVisaReason: string | null;
        validVisa: boolean | null;
        workExperiences: Array<{
            address: string | null;
            compagnyName: string | null;
            title: string | null;
            workedFrom: string | null;
            workedTo: string | null;
        } | null> | null;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
        refusedVisa: false,
        refusedVisaReason: '',
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
                refusedVisa: student.refusedVisa,
                refusedVisaReason: student.refusedVisaReason,
                validVisa: student.validVisa,
                workExperiences: student.workExperiences
            });
        }
    }, [student]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            if (!student) {
                throw Error();
            }

            await graphql<UpdateStudentMutation, UpdateStudentMutationVariables>(updateStudent, {
                input: { ...values, id: student?.id }
            });

            toast({
                description: t('profile:toast-information-updated-description', {
                    section: t('profile:background-information-page-title')
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

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting, setFieldValue, values } = props;

                return (
                    <Form className="space-y-6">
                        <Section
                            headerComponent={
                                <Navigation
                                    completion={isCompleted(student, documents)}
                                    isLoading={isLoading}
                                />
                            }
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
                                                                {isChina() ? (
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
                                                                ) : (
                                                                    <div className="mt-4 w-full sm:mt-0 sm:w-1/2">
                                                                        <Field
                                                                            name={`workExperiences.${index}.address`}>
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
                                                                    </div>
                                                                )}
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
                    </Form>
                );
            }}
        </Formik>
    );
};

export default BackgroundInformationForm;
