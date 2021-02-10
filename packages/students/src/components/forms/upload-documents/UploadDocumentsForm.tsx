import {
    createDocument,
    getDocumentByStorageKey,
    GetDocumentByStorageKeyQuery,
    GetDocumentByStorageKeyQueryVariables,
    GetDocumentByStudentQuery,
    GetStudentByEmailQuery,
    updateDocument
} from '@applyfuture/graphql';
import { Button, FileUploader, Section } from '@applyfuture/ui';
import { findDocument, graphql, isCompleted, toast } from '@applyfuture/utils';
import Navigation from '@components/profile/navigation/Navigation';
import { faSave } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import kebabCase from 'lodash/kebabCase';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

type Props = {
    documentsData: GetDocumentByStudentQuery;
    isLoading: boolean;
    refetch: () => void;
    studentData: GetStudentByEmailQuery;
};

const UploadDocumentsForm: FC<Props> = (props) => {
    const { documentsData, isLoading, refetch, studentData } = props;
    const student = studentData?.getStudentByEmail?.items?.[0];
    const documents = documentsData?.getDocumentByStudent?.items;
    const { t } = useTranslation();

    type FormValues = {
        passport: string;
        passportPhoto: string;
        resume: string;
        toefl: string;
        ielts: string;
        toeic: string;
        fce: string;
        cae: string;
        gmat: string;
        gre: string;
        tageMage: string;
        'tef-tcf': string;
        'dalf-delf': string;
        'last-3-transcript-1': string;
        'last-3-transcript-2': string;
        'last-3-transcript-3': string;
        [documentId: string]: string;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
        cae: '',
        'dalf-delf': '',
        fce: '',
        gmat: '',
        gre: '',
        ielts: '',
        'last-3-transcript-1': '',
        'last-3-transcript-2': '',
        'last-3-transcript-3': '',
        passport: '',
        passportPhoto: '',
        resume: '',
        tageMage: '',
        'tef-tcf': '',
        toefl: '',
        toeic: ''
    });

    useEffect(() => {
        if (student && documents) {
            setInitialValues({
                cae: findDocument(documents, 'cae') || '',
                'dalf-delf': findDocument(documents, 'dalf-delf') || '',
                fce: findDocument(documents, 'fce') || '',
                gmat: findDocument(documents, 'gmat') || '',
                gre: findDocument(documents, 'gre') || '',
                ielts: findDocument(documents, 'ielts') || '',
                'last-3-transcript-1': findDocument(documents, 'last-3-transcript-1') || '',
                'last-3-transcript-2': findDocument(documents, 'last-3-transcript-2') || '',
                'last-3-transcript-3': findDocument(documents, 'last-3-transcript-3') || '',
                passport: findDocument(documents, 'passport') || '',
                passportPhoto: findDocument(documents, 'passport-photo') || '',
                resume: findDocument(documents, 'resume') || '',
                tageMage: findDocument(documents, 'tage-mage') || '',
                'tef-tcf': findDocument(documents, 'tef-tcf') || '',
                toefl: findDocument(documents, 'toefl') || '',
                toeic: findDocument(documents, 'toeic') || ''
            });
        }
    }, [student, documents]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            const documentIds = [
                'cae',
                'dalf-delf',
                'fce',
                'gmat',
                'gre',
                'ielts',
                'last-3-transcript-1',
                'last-3-transcript-2',
                'last-3-transcript-3',
                'passport',
                'passportPhoto',
                'resume',
                'tageMage',
                'tef-tcf',
                'toefl',
                'toeic'
            ];

            const documents = documentIds
                .map((id) => ({
                    name: kebabCase(id),
                    storageKey: values[id],
                    studentId: student?.id
                }))
                .filter((document) => document.storageKey);

            const promises = documents.map((document) => {
                const fetch = async () => {
                    try {
                        const existingDocument = await graphql<
                            GetDocumentByStorageKeyQuery,
                            GetDocumentByStorageKeyQueryVariables
                        >(getDocumentByStorageKey, {
                            storageKey: document.storageKey
                        });

                        if (existingDocument?.getDocumentByStorageKey?.items?.[0]) {
                            return await graphql(updateDocument, {
                                input: {
                                    ...document,
                                    id: existingDocument?.getDocumentByStorageKey?.items?.[0]?.id
                                }
                            });
                        }

                        return await graphql(createDocument, {
                            input: {
                                ...document
                            }
                        });
                    } catch (error) {
                        console.log(error);
                    }
                };
                return fetch();
            });

            await Promise.all(promises);

            toast({
                description: t('profile:toast-documents-saved'),
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
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;
                return (
                    <Form className="space-y-6">
                        <Section
                            description={t('profile:required-by-all-schools-description')}
                            headerComponent={
                                <Navigation
                                    completion={isCompleted(student, documents)}
                                    isLoading={isLoading}
                                />
                            }
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

export default UploadDocumentsForm;
