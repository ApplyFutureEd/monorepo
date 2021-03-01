import {
    GetDocumentByStudentQuery,
    GetStudentByEmailQuery,
    updateStudent
} from '@applyfuture/graphql';
import { Button, Modal } from '@applyfuture/ui';
import { checkCompletion, graphql } from '@applyfuture/utils';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

type Props = {
    studentData: GetStudentByEmailQuery;
    documentsData: GetDocumentByStudentQuery;
};

const CompletionModal: FC<Props> = (props) => {
    const { documentsData, studentData } = props;
    const student = studentData?.getStudentByEmail?.items?.[0];
    const documents = documentsData?.getDocumentByStudent?.items;
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const handleViewed = async () => {
        await graphql(updateStudent, {
            input: { id: student?.id, modalProfileCompletedViewed: true }
        });
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
        handleViewed();
    };

    useEffect(() => {
        if (!student) {
            return;
        }
        const completion = checkCompletion(student, documents);
        if (
            completion.backgroundInformation &&
            completion.educationHistory &&
            completion.generalInformation &&
            completion.testScores &&
            completion.uploadDocuments &&
            !student.modalProfileCompletedViewed
        ) {
            handleOpen();
        }
    }, [student, documents]);

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="p-6 sm:p-0">
                <div className="flex justify-center">
                    <img
                        alt={t('profile:congrats-modal-illustration-alt')}
                        className="h-48"
                        src="/assets/images/profile/congrats.svg"
                    />
                </div>
                <h2 className="mt-1 text-gray-900 text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10">
                    {t('profile:congrats-modal-title')}
                </h2>
                <p className="mt-1">{t('profile:congrats-modal-description')}</p>
                <div className="flex justify-center mt-4">
                    <Link href="/programs">
                        <Button type="button" variant="primary" onClick={handleViewed}>
                            {t('profile:congrats-modal-cta')}
                        </Button>
                    </Link>
                </div>
            </div>
        </Modal>
    );
};

export default CompletionModal;
