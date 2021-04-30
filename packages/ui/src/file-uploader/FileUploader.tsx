import {
    deleteDocument,
    GetApplicationQuery,
    getDocumentByStorageKey,
    GetProgramQuery,
    GetStudentByEmailQuery
} from '@applyfuture/graphql';
import { graphql, toShortId } from '@applyfuture/utils';
import { faDownload, faEye, faTrash } from '@fortawesome/pro-light-svg-icons';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import kebabCase from 'lodash/kebabCase';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';
import Dropzone from 'react-dropzone';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../button/Button';
import { Loader } from '../loader/Loader';
import { Modal } from '../modal/Modal';

type Props = {
    /**
     * If `true`, the component will accept all file formats.
     */
    bypassAcceptedFileFormat?: boolean;
    /**
     * An object containing `onChange`, `onBlur`, `name`, and `value` of the field.
     *
     * https://formik.org/docs/api/useField#fieldinputpropsvalue
     */
    field: FieldInputProps<string>;
    /**
     * State, handlers, and helpers from the parent form.
     */
    form: FormikProps<any>;
    /**
     * If `true`, the component will display a loading skeleton.
     */
    isLoading?: boolean;
    /**
     * If `true`, the storageKey will be composed from the program shortened id. See `program` props.
     */
    isSpecific?: boolean;
    /**
     * The label displayed above the input.
     */
    label?: string;
    /**
     * The privacy level access of the file.
     */
    level?: string;
    /**
     * An object that contains relevant computed metadata.
     *
     * https://formik.org/docs/api/useField#fieldmetapropsvalue
     */
    meta: FieldMetaProps<string>;
    /**
     * If a program is provided, the storageKey will be composed from the program shortened id.
     */
    program?:
        | GetProgramQuery['getProgram']
        | NonNullable<GetApplicationQuery['getApplication']>['program']
        | null;
    /**
     * If `true`, the input will display an `(optional)` mention next to the label.
     */
    optional?: boolean;
    /**
     * If a student is provided, the storageKey will be composed from the student shortened id.
     */
    student?:
        | NonNullable<NonNullable<GetStudentByEmailQuery['getStudentByEmail']>['items']>[0]
        | null;
    /**
     * If a document's storageKey is provided, the input will display a "Download template" button.
     */
    template?: string;
};

export const FileUploader: FC<Props> = (props) => {
    const {
        field,
        meta,
        form,
        label,
        level = 'public',
        student,
        program,
        optional,
        template,
        isLoading,
        isSpecific,
        bypassAcceptedFileFormat,
        ...rest
    } = props;
    const { t } = useTranslation();
    const [state, setState] = useState('ready');
    const [previewUrl, setPreviewUrl] = useState('');
    const [previewImageLoadError, setPreviewImageLoadError] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const { name, value } = field;
    const { setFieldValue } = form;

    const getDocumentTemplate = async (storageKey: string) => {
        try {
            const result: any = await Storage.get(storageKey, { level: level });
            window.open(result);
        } catch (error) {
            toast.error(error.message, {
                position: 'top-right'
            });
        }
    };

    const previewDocument = async (storageKey: string) => {
        try {
            const result: any = await Storage.get(storageKey, {
                level: level
            });
            setPreviewUrl(result);
            setModalOpen(true);
        } catch (error) {
            toast.error(error.message, {
                position: 'top-right'
            });
        }
    };

    const removeDocument = async (storageKey: string) => {
        try {
            await Storage.remove(storageKey, { level: level });
        } catch (error) {
            toast.error(error.message, {
                position: 'top-right'
            });
        }
    };

    const handleDrop = async (acceptedFiles: File[]) => {
        const acceptedFileFormatRegex = new RegExp(
            /([a-zA-Z0-9\s_\\.\-():])+(.jpeg|.jpg|.png|.pdf)$/,
            'i'
        );
        const maxSize = 10_000_000; // 10 Mo
        if (!acceptedFileFormatRegex.test(acceptedFiles[0].name)) {
            if (!bypassAcceptedFileFormat) {
                toast.error(t('common:upload-file-input-error-file-wrong-format'));

                return;
            }
        }
        if (acceptedFiles[0].size > maxSize) {
            toast.error(t('common:upload-file-input-error-file-too-big'));
            return;
        }

        let storageKey = uuidv4();

        if (student) {
            const studentId = toShortId(student.id);
            const studentName = kebabCase(`${student.firstName}-${student.lastName}`);
            const fileName = kebabCase(name);
            storageKey = `${studentName}-${studentId}-${fileName}`;
        }

        if (student && program && isSpecific) {
            const programId = toShortId(program.id);
            const studentId = toShortId(student.id);
            const studentName = kebabCase(`${student.firstName}-${student.lastName}`);
            const fileName = kebabCase(name);

            storageKey = `${studentName}-${programId}-${studentId}-${fileName}`;
        }

        try {
            setState('loading');
            const result: any = await Storage.put(storageKey, acceptedFiles[0], {
                contentType: acceptedFiles[0].type,
                level: level
            });
            setFieldValue(name, result.key);
            setState('ready');
        } catch (error) {
            console.error(error);
        }
    };

    const onError = Boolean(!value && meta.error);

    if (isLoading) {
        return (
            <div>
                {label && (
                    <div className="block text-gray-700 text-sm font-medium leading-5">
                        <Skeleton height="16px" width="120px" />
                    </div>
                )}
                <div className="relative rounded-md shadow-sm">
                    <Skeleton height="40px" width="100%" />
                </div>
            </div>
        );
    }

    const onModalClose = () => {
        setModalOpen(false);
        setPreviewImageLoadError(false);
    };

    return (
        <>
            <Modal open={isModalOpen} onClose={onModalClose}>
                <div className="align-items flex justify-center">
                    {previewImageLoadError ? (
                        <iframe
                            className="h-preview w-full md:h-40"
                            id="frame"
                            src={previewUrl}
                            title="frame"
                        />
                    ) : (
                        <img
                            alt=""
                            src={previewUrl}
                            onError={() => setPreviewImageLoadError(true)}
                        />
                    )}
                </div>
            </Modal>
            <div className="flex flex-col justify-between sm:flex-row" {...rest}>
                <label
                    className="block text-gray-700 text-sm font-medium leading-5"
                    htmlFor={field.name}>
                    <div className="flex justify-between w-full">
                        <div>{label}</div>
                        {optional && (
                            <span className="text-gray-500 text-xs"> - {t('common:optional')}</span>
                        )}
                    </div>
                    {onError && (
                        <p className="mt-2 text-red-600 text-sm" id="email-error">
                            {meta.error}
                        </p>
                    )}
                    {template && (
                        <div className="mt-2">
                            <Button
                                startIcon={faDownload}
                                variant="secondary"
                                onClick={() => getDocumentTemplate(template)}>
                                {t('common:upload-file-input-download-template')}
                            </Button>
                        </div>
                    )}
                </label>
                {!value && (
                    <Dropzone onDrop={handleDrop}>
                        {({ getRootProps, getInputProps }) => (
                            <div
                                {...getRootProps()}
                                className="flex justify-center mt-2 px-2 py-1 border-2 border-dashed border-gray-300 rounded-md">
                                {state === 'loading' && (
                                    <div>
                                        <Loader />
                                    </div>
                                )}

                                {state === 'ready' && (
                                    <div className="flex items-center text-center space-x-4">
                                        <svg
                                            className="mx-auto w-12 h-12 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 48 48">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-gray-600 text-sm">
                                                <button
                                                    className="hover:text-indigo-500 text-indigo-600 focus:underline font-medium focus:outline-none transition duration-150 ease-in-out"
                                                    name={field.name}
                                                    type="button">
                                                    {t('common:upload-file-input-upload-a-file')}
                                                </button>{' '}
                                                {t('common:upload-file-input-or-drag-and-drop')}
                                            </p>
                                            <p className="mt-1 text-gray-500 text-xs">
                                                {bypassAcceptedFileFormat
                                                    ? 'Any file format (10 MB max)'
                                                    : t(
                                                          'common:upload-file-input-or-file-conditions'
                                                      )}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                <input {...getInputProps()} />
                            </div>
                        )}
                    </Dropzone>
                )}
                {value && (
                    <div className="flex mt-4 space-x-4">
                        <Button
                            startIcon={faEye}
                            type="button"
                            variant="secondary"
                            onClick={() => previewDocument(value)}>
                            {t('common:upload-file-input-preview')}
                        </Button>
                        <Button
                            startIcon={faTrash}
                            type="button"
                            variant="secondary"
                            onClick={async () => {
                                const existingDocument: any = await API.graphql(
                                    graphqlOperation(getDocumentByStorageKey, {
                                        storageKey: value
                                    })
                                );
                                if (existingDocument.data.getDocumentByStorageKey.items[0]) {
                                    graphql(deleteDocument, {
                                        input: {
                                            id:
                                                existingDocument.data.getDocumentByStorageKey
                                                    .items[0].id
                                        }
                                    });
                                }
                                removeDocument(value);
                                setFieldValue(name, '');
                            }}>
                            {t('common:upload-file-input-delete')}
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};
