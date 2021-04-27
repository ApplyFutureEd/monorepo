import { GetApplicationQuery, GetStudentQuery } from '@applyfuture/graphql';
import ApplicationDocumentsForm from '@components/forms/application-documents/ApplicationDocumentForm';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    isLoading: boolean;
    application: GetApplicationQuery['getApplication'];
    student: GetStudentQuery['getStudent'];
};

const Documents: FC<Props> = (props) => {
    const { application, student, isLoading } = props;
    const { t } = useTranslation();

    return (
        <div className="inside w-full bg-white rounded-lg shadow overflow-hidden md:w-2/3">
            <div className="hidden px-4 py-5 border-b border-gray-200 sm:px-6 md:block">
                <h3 className="text-gray-900 text-lg font-medium leading-6">
                    {t('application:documents-requested')}
                </h3>
                <p className="mt-1 max-w-2xl text-gray-500 text-sm leading-5">
                    {t('application:documents-requested-details')}
                </p>
            </div>

            <div className="inside-scroll px-4 py-5 overflow-y-scroll sm:p-0">
                <dl>
                    <ApplicationDocumentsForm
                        application={application}
                        isLoading={isLoading}
                        student={student}
                    />
                </dl>
            </div>
        </div>
    );
};

export default Documents;
