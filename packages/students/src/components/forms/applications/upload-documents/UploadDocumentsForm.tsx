import {
    createDocument,
    GetApplicationQuery,
    getDocumentByStorageKey,
    GetDocumentByStorageKeyQuery,
    GetDocumentByStorageKeyQueryVariables,
    GetDocumentByStudentQuery,
    GetStudentByEmailQuery,
    updateDocument
} from '@applyfuture/graphql';
import { Button } from '@applyfuture/ui';
import {
    conditionFilter,
    findDocument,
    graphql,
    languagesBypassFilter,
    toast
} from '@applyfuture/utils';
import Row from '@components/applications/row/Row';
import SkeletonRow from '@components/applications/row/SkeletonRow';
import { faArrowLeft, faArrowRight, faTrash } from '@fortawesome/pro-light-svg-icons';
import { Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

type Props = {
    applicationData: GetApplicationQuery;
    documentsData: GetDocumentByStudentQuery;
    isLoading: boolean;
    studentData: GetStudentByEmailQuery;
};

const UploadDocumentsForm: FC<Props> = (props) => {
    const { applicationData, documentsData, isLoading, studentData } = props;
    const application = applicationData.getApplication;
    const documents = documentsData?.getDocumentByStudent?.items;
    const student = studentData?.getStudentByEmail?.items?.[0];
    const { t } = useTranslation();

    type FormValues = {
        cae: string;
        'celi-cils-it-plida': string;
        'dalf-delf': string;
        dele: string;
        fce: string;
        gmat: string;
        goethe: string;
        gre: string;
        ielts: string;
        'last-3-transcript-1': string;
        'last-3-transcript-2': string;
        'last-3-transcript-3': string;
        passport: string;
        'passport-photo': string;
        resume: string;
        'tage-mage': string;
        'tef-tcf': string;
        toefl: string;
        toeic: string;
        [documentId: string]: string;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
        cae: '',
        'celi-cils-it-plida': '',
        'dalf-delf': '',
        dele: '',
        fce: '',
        gmat: '',
        goethe: '',
        gre: '',
        ielts: '',
        'last-3-transcript-1': '',
        'last-3-transcript-2': '',
        'last-3-transcript-3': '',
        passport: '',
        'passport-photo': '',
        resume: '',
        'tage-mage': '',
        'tef-tcf': '',
        toefl: '',
        toeic: ''
    });

    useEffect(() => {
        if (student && documents) {
            setInitialValues({
                cae: findDocument(documents, 'cae') || '',
                'celi-cils-it-plida': findDocument(documents, 'celi-cils-it-plida') || '',
                'dalf-delf': findDocument(documents, 'dalf-delf') || '',
                dele: findDocument(documents, 'dele') || '',
                fce: findDocument(documents, 'fce') || '',
                gmat: findDocument(documents, 'gmat') || '',
                goethe: findDocument(documents, 'goethe') || '',
                gre: findDocument(documents, 'gre') || '',
                ielts: findDocument(documents, 'ielts') || '',
                'last-3-transcript-1': findDocument(documents, 'last-3-transcript-1') || '',
                'last-3-transcript-2': findDocument(documents, 'last-3-transcript-2') || '',
                'last-3-transcript-3': findDocument(documents, 'last-3-transcript-3') || '',
                passport: findDocument(documents, 'passport') || '',
                'passport-photo': findDocument(documents, 'passport-photo') || '',
                resume: findDocument(documents, 'resume') || '',
                'tage-mage': findDocument(documents, 'tage-mage') || '',
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
                'celi-cils-it-plida',
                'dalf-delf',
                'dele',
                'fce',
                'gmat',
                'goethe',
                'gre',
                'ielts',
                'last-3-transcript-1',
                'last-3-transcript-2',
                'last-3-transcript-3',
                'passport',
                'passport-photo',
                'resume',
                'tage-mage',
                'tef-tcf',
                'toefl',
                'toeic'
            ];

            const documents = documentIds
                .map((id) => ({
                    name: id,
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
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
        actions.setSubmitting(false);
    };

    const skeletons = Array.from({ length: 12 }, (_v, k) => k + 1);

    if (isLoading) {
        return (
            <>
                {skeletons.map((_document: any, index: number) => (
                    <SkeletonRow key={index} index={index} />
                ))}
            </>
        );
    }

    return (
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;

                return (
                    <Form>
                        {application?.program?.requestedDocuments
                            ?.filter((document) => conditionFilter(document, student))
                            .filter((document) => languagesBypassFilter(document, student))
                            .map((document: any, index: number) => (
                                <Row
                                    key={document.name}
                                    application={application}
                                    document={document}
                                    index={index}
                                    student={student}
                                />
                            ))}

                        <div className="flex justify-between px-4 py-5 sm:px-6">
                            <div className="hidden md:block">
                                <Button
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faTrash}
                                    type="button"
                                    variant="secondary"
                                    onClick={() => console.log('trash')}>
                                    {t('application:cancel-my-application')}
                                </Button>
                            </div>
                            <div className="flex flex-grow justify-between space-x-4 md:flex-grow-0 md:justify-start">
                                <Link href="/applications">
                                    <Button
                                        disabled={false}
                                        isLoading={isLoading}
                                        isSubmitting={isSubmitting}
                                        startIcon={faArrowLeft}
                                        type="button"
                                        variant="secondary">
                                        {t('application:back-to-applications')}
                                    </Button>
                                </Link>
                                <Button
                                    disabled={false}
                                    endIcon={faArrowRight}
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    type="submit"
                                    variant="primary">
                                    {t('application:next-step')}
                                </Button>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default UploadDocumentsForm;
