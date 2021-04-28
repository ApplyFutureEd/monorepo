import {
    GetApplicationQuery,
    GetDocumentByStudentQuery,
    GetStudentByEmailQuery
} from '@applyfuture/graphql';
import { Button } from '@applyfuture/ui';
import { conditionFilter, findDocument, languagesBypassFilter, toast } from '@applyfuture/utils';
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
        passportPhoto: string;
        resume: string;
        tageMage: string;
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
            console.log(values);
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
        actions.setSubmitting(false);
    };

    const skeletons = Array.from({ length: 12 }, (v, k) => k + 1);

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
                /* const { errors, isSubmitting, setFieldValue, values } = props; */

                return (
                    <Form>
                        {application?.program?.requestedDocuments
                            ?.filter(conditionFilter)
                            .filter(languagesBypassFilter)
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
                                        startIcon={faArrowLeft}
                                        type="button"
                                        variant="secondary">
                                        {t('application:back-to-applications')}
                                    </Button>
                                </Link>
                                <Button
                                    disabled={false}
                                    endIcon={faArrowRight}
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
