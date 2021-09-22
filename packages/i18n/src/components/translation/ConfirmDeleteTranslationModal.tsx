import { Button, Modal } from '@applyfuture/ui';
import { faExclamationTriangle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { FormValues } from './TranslationForm';
type Props = {
    open: boolean;
    handleClose(): void;
    handleDelete(values: FormValues): void;
    values: FormValues;
};

const ConfirmDeleteTranslationModal: FC<Props> = (props) => {
    const { open, handleClose, handleDelete, values } = props;

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="sm:flex sm:items-start">
                <div className="flex flex-shrink-0 items-center justify-center mx-auto w-12 h-12 text-red-500 bg-red-100 rounded-full sm:mx-0 sm:w-10 sm:h-10">
                    <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-gray-900 text-lg font-medium leading-6" id="modal-headline">
                        Delete translation
                    </h3>
                    <div className="mt-2">
                        <p className="text-gray-500 text-sm leading-5">
                            Are you sure you want to delete this translation?
                            <br />
                            It will be permanently removed from our servers. This action cannot be
                            undone.
                        </p>
                        <div className="mt-4 sm:flex sm:flex-row-reverse">
                            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                <Button
                                    type="button"
                                    variant="danger"
                                    onClick={() => handleDelete(values)}>
                                    Delete
                                </Button>
                            </span>
                            <span className="flex mt-3 w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                <Button type="button" variant="secondary" onClick={handleClose}>
                                    Cancel
                                </Button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
export default ConfirmDeleteTranslationModal;
