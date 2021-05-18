import { Button, Modal } from '@applyfuture/ui';
import { faInfoCircle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

type Props = {
    documentToDelete: {
        id: string;
        storageKey: string;
    };
    handleCancel: () => void;
    handleClose: () => void;
    handleDelete: (id: string, storageKey: string) => void;
    open: boolean;
};

const ConfirmDeleteDocumentModal: FC<Props> = (props) => {
    const { documentToDelete, handleCancel, handleClose, handleDelete, open } = props;

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="sm:flex sm:items-start">
                <div className="flex flex-shrink-0 items-center justify-center mx-auto w-12 h-12 text-indigo-600 bg-indigo-100 rounded-full sm:mx-0 sm:w-10 sm:h-10">
                    <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-gray-900 text-lg font-medium leading-6" id="modal-headline">
                        Delete document
                    </h3>
                    <div className="mt-2">
                        <p className="text-gray-500 text-sm leading-5">
                            Are you sure you want to delete this document? It will be permanently
                            removed from our servers forever. This action cannot be undone.
                        </p>
                        <div className="mt-4 sm:flex sm:flex-row-reverse">
                            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                <Button
                                    type="button"
                                    variant="danger"
                                    onClick={() =>
                                        handleDelete(
                                            documentToDelete.id,
                                            documentToDelete.storageKey
                                        )
                                    }>
                                    Delete
                                </Button>
                            </span>
                            <span className="flex mt-3 w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                <Button type="button" variant="secondary" onClick={handleCancel}>
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

export default ConfirmDeleteDocumentModal;
