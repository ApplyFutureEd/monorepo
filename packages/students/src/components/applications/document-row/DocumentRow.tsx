import { GetApplicationQuery, GetStudentByEmailQuery } from '@applyfuture/graphql';
import { Button, FileUploader } from '@applyfuture/ui';
import {
    englishTestDocumentsIds,
    frenchTestDocumentsIds,
    logicAndReasoningTestDocumentsIds,
    toast
} from '@applyfuture/utils';
import { faDownload } from '@fortawesome/pro-light-svg-icons';
import { Storage } from 'aws-amplify';
import cx from 'classnames';
import { Field, FieldProps } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    application: GetApplicationQuery['getApplication'];
    document: NonNullable<
        NonNullable<GetApplicationQuery['getApplication']>['program']
    >['requestedDocuments'][0];
    index: number;
    student?:
        | NonNullable<NonNullable<GetStudentByEmailQuery['getStudentByEmail']>['items']>[0]
        | null;
};

const DocumentRow: FC<Props> = (props) => {
    const { application, document, index, student } = props;
    const { t } = useTranslation();

    const baseClasses =
        'sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5';

    const classes = cx({
        [`${baseClasses}`]: true,
        ['bg-gray-50']: !(index % 2),
        ['bg-white']: index % 2,
        ['mt-2']: index === 0,
        ['mt-8']: index !== 0
    });

    const downloadTemplate = async (storageKey: string) => {
        try {
            const result: any = await Storage.get(storageKey, { level: 'public' });
            window.open(result);
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
    };

    return (
        <div className={classes}>
            <dt className="text-gray-600 text-sm font-medium leading-5">
                <div className="flex space-x-2">
                    <span>{t(`profile:${document?.name}`)}</span>
                    {!document?.isMandatory && (
                        <span className="py-0.5 max-h-chip inline-block flex-shrink-0 px-2 text-teal-800 text-xs font-medium leading-4 bg-teal-100 rounded-full">
                            {t('application:optional')}
                        </span>
                    )}
                </div>
                <div className="mt-2 text-gray-500 text-sm font-normal leading-5">
                    {englishTestDocumentsIds.includes(document?.name) &&
                        t('application:english-test-proof-details')}
                    {frenchTestDocumentsIds.includes(document?.name) &&
                        t('application:french-test-proof-details')}
                    {logicAndReasoningTestDocumentsIds.includes(document?.name) &&
                        t('application:logic-and-reasoning-test-proof-details')}
                    {document?.description}
                </div>
                {document?.storageKey && (
                    <div className="mt-2">
                        <Button
                            startIcon={faDownload}
                            type="button"
                            variant="secondary"
                            onClick={() =>
                                document?.storageKey && downloadTemplate(document?.storageKey)
                            }>
                            {t('application:download-template')}
                        </Button>
                    </div>
                )}
            </dt>
            <dd className="mt-1 text-gray-900 text-sm leading-5 sm:col-span-1 sm:mt-0">
                <div className="mb-2 space-y-8">
                    <Field key={document?.name} id={document?.name} name={document?.name}>
                        {(fieldProps: FieldProps) => (
                            <FileUploader
                                isSpecific={Boolean(document?.isSpecific)}
                                program={application?.program}
                                student={student}
                                {...fieldProps}
                            />
                        )}
                    </Field>
                </div>
            </dd>
        </div>
    );
};

export default DocumentRow;
