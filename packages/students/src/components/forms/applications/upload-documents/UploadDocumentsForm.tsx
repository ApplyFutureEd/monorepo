import {
    createDocument,
    deleteApplication,
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
    hasBypass,
    languagesBypassFilter,
    scrollToErrors,
    toast
} from '@applyfuture/utils';
import Row from '@components/applications/row/Row';
import SkeletonRow from '@components/applications/row/SkeletonRow';
import { faArrowLeft, faArrowRight, faTrash } from '@fortawesome/pro-light-svg-icons';
import { Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

type Props = {
    applicationData: GetApplicationQuery;
    documentsData: GetDocumentByStudentQuery;
    isLoading: boolean;
    studentData: GetStudentByEmailQuery;
};

const UploadDocumentsForm: FC<Props> = (props) => {
    const router = useRouter();
    const { applicationData, documentsData, isLoading, studentData } = props;
    const application = applicationData.getApplication;
    const requestedDocumentsIds =
        application?.program?.requestedDocuments.map((document) => document.name) || [];
    const documents = documentsData?.getDocumentByStudent?.items;
    const student = studentData?.getStudentByEmail?.items?.[0];

    const { t } = useTranslation();

    type FormValues = {
        [documentId: string]: string;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({});

    const validate = (values: any) => {
        const errors: any = {};
        Object.keys(values).forEach((e) => {
            if (
                application?.program?.requestedDocuments
                    .filter((document: any) => !document.isMandatory)
                    .map((document: any) => document.name)
                    .includes(e)
            ) {
                return;
            }
            if (!values[e]) {
                errors[e] = t('required');
            }
        });

        const bypasses = hasBypass(student);

        if (
            values.toefl ||
            values.ielts ||
            values.toeic ||
            values.fce ||
            values.cae ||
            bypasses.english
        ) {
            delete errors.toefl;
            delete errors.ielts;
            delete errors.toeic;
            delete errors.fce;
            delete errors.cae;
        }

        if (values['tef-tcf'] || values['dalf-delf'] || bypasses.french) {
            delete errors['tef-tcf'];
            delete errors['dalf-delf'];
        }

        if (bypasses.spanish) {
            delete errors.dele;
        }

        if (bypasses.german) {
            delete errors.goethe;
        }

        if (bypasses.italian) {
            delete errors['celi-cils-it-plida'];
        }

        if (values.gmat || values.gre || values['tage-mage']) {
            delete errors.gmat;
            delete errors.gre;
            delete errors['tage-mage'];
        }

        scrollToErrors(errors);

        return errors;
    };

    useEffect(() => {
        if (student && documents) {
            const initialValues = Object.assign(
                {},
                ...requestedDocumentsIds.map((key) => ({
                    [key]: findDocument(documents, key) || ''
                }))
            );

            setInitialValues(initialValues);
        }
    }, [student, documents]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            const documents = requestedDocumentsIds
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

    const handleCancelApplication = async () => {
        try {
            await graphql(deleteApplication, {
                input: { id: application?.id }
            });
            router.push('/applications');
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
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
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}>
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
                                    onClick={handleCancelApplication}>
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
