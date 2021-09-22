import { Button, Modal } from '@applyfuture/ui';
import { faExclamationTriangle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { FormValues } from './TranslationForm';

type Props = {
    handleClose(): void;
    handleDelete(values: FormValues): void;
    open: boolean;
    values: FormValues;
};

const ConfirmDeleteTranslationModal: FC<Props> = (props) => {
    const { handleClose, handleDelete, open, values } = props;

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="inline-block align-bottom pb-4 pt-5 px-4 text-left bg-white rounded-lg overflow-hidden transform transition-all sm:align-middle sm:w-full">
                <div className="sm:flex sm:items-start">
                    <div className="flex flex-shrink-0 items-center justify-center mx-auto w-12 h-12 text-red-500 bg-red-100 rounded-full sm:mx-0 sm:w-10 sm:h-10">
                        <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                            className="text-gray-900 text-lg font-medium leading-6"
                            id="modal-headline">
                            Delete translation
                        </h3>
                        <div className="mt-2">
                            <p className="text-gray-500 text-sm">
                                Are you sure you want to delete this translation?
                                <br />
                                It will be permanently removed from our servers. This action cannot
                                be undone.
                            </p>
                            <div className="mt-5 sm:flex sm:flex-row-reverse sm:mt-4">
                                <button
                                    className="inline-flex justify-center px-4 py-2 w-full text-white text-base font-medium bg-red-600 hover:bg-red-700 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                    type="button"
                                    onClick={() => handleDelete(values)}>
                                    Delete
                                </button>
                                <button
                                    className="inline-flex justify-center mt-3 px-4 py-2 w-full hover:text-gray-500 text-gray-700 text-base font-medium bg-white border border-gray-300 rounded-md focus:outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                                    type="button"
                                    onClick={handleClose}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
export default ConfirmDeleteTranslationModal;
