import {
    deleteApplication,
    GetApplicationQuery,
    GetDocumentByStudentQuery,
    GetStudentByEmailQuery,
    updateApplication
} from '@applyfuture/graphql';
import { Button, Checkbox } from '@applyfuture/ui';
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
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import { boolean, object } from 'yup';

type Props = {
    applicationData: GetApplicationQuery;
    documentsData: GetDocumentByStudentQuery;
    isLoading: boolean;
    studentData: GetStudentByEmailQuery;
};

const ReviewDocumentsForm: FC<Props> = (props) => {
    const router = useRouter();
    const { applicationData, documentsData, isLoading, studentData } = props;
    const application = applicationData.getApplication;
    const requestedDocumentsIds =
        application?.program?.requestedDocuments.map((document) => document.name) || [];
    const documents = documentsData?.getDocumentByStudent?.items;
    const student = studentData?.getStudentByEmail?.items?.[0];

    const { t } = useTranslation();

    type FormValues = {
        applicationDocument: boolean;
        declaration: boolean;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
        applicationDocument: false,
        declaration: false
    });

    const validationSchema = object().shape({
        applicationDocument: boolean().oneOf([true], t('required')),
        declaration: boolean().oneOf([true], t('required'))
    });

    useEffect(() => {
        if (student && documents) {
            const newValues = Object.assign(
                initialValues,
                ...requestedDocumentsIds.map((key) => ({
                    [key]: findDocument(documents, key) || ''
                }))
            );

            setInitialValues(newValues);
        }
    }, [student, documents]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            console.log('submit');
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

    const handlePreviousStep = async () => {
        try {
            const updatedSteps = (application?.steps && [...application?.steps]) || [];
            updatedSteps[0].status = 'PROGRESS';
            updatedSteps[1].status = 'IDLE';
            updatedSteps[1].date = '';

            await graphql(updateApplication, {
                input: { id: application?.id, steps: updatedSteps }
            });

            router.push(`/applications/${application?.id}/upload-documents`);
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
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting, values } = props;

                return (
                    <Form>
                        {application?.program?.requestedDocuments
                            ?.filter((document) => conditionFilter(document, student))
                            .filter((document) => languagesBypassFilter(document, student))
                            .map((document: any, index: number) => (
                                <Row
                                    key={document.name}
                                    immutable
                                    application={application}
                                    document={document}
                                    index={index}
                                    student={student}
                                />
                            ))}
                        <div className="justify-between pt-4 px-4 space-y-2 sm:px-6">
                            <Field id="applicationDocument" name="applicationDocument">
                                {(fieldProps: FieldProps) => (
                                    <Checkbox
                                        label={t(
                                            'application:label-review-your-profile-information'
                                        )}
                                        /*  onClick={(event: any) => {
                                            setFieldValue(
                                                'applicationResume',
                                                !values.applicationResume
                                            );
                                            event.stopPropagation();
                                            event.preventDefault();
                                            if (!values.applicationResume && applicationResume) {
                                                previewDocument(applicationResume);
                                            }
                                        }} */
                                        {...fieldProps}
                                    />
                                )}
                            </Field>
                            <Field id="declaration" name="declaration">
                                {(fieldProps: FieldProps) => (
                                    <Checkbox
                                        label={t('application:label-declaration')}
                                        {...fieldProps}
                                    />
                                )}
                            </Field>
                        </div>
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
                                <Button
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faArrowLeft}
                                    type="button"
                                    variant="secondary"
                                    onClick={handlePreviousStep}>
                                    {t('application:previous-step')}
                                </Button>
                                <Button
                                    disabled={!values.applicationDocument || !values.declaration}
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

export default ReviewDocumentsForm;
