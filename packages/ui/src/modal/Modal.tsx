import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal as BaseModal } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, ReactNode } from 'react';

type Props = {
    /**
     * Content of the modal.
     */
    children: ReactNode;
    /**
     * Callback fired when the component requests to be closed.
     */
    onClose: () => void;
    /**
     * If `true`, the modal is open.
     */
    open: boolean;
};

export const Modal: FC<Props> = (props) => {
    const { open, onClose, children } = props;
    const { t } = useTranslation();

    return (
        <BaseModal hideBackdrop open={open} onClose={onClose}>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen text-center sm:block sm:p-0 md:pb-20 md:pt-4 md:px-4">
                    <div className="fixed inset-0 transition-opacity">
                        <div
                            className="absolute inset-0 bg-gray-500 opacity-75"
                            role="button"
                            tabIndex={0}
                            onClick={onClose}
                            onKeyDown={onClose}
                        />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                    <div
                        aria-labelledby="modal-headline"
                        aria-modal="true"
                        className="inline-block align-bottom w-screen h-screen text-left bg-white shadow-xl overflow-hidden transform transition-all sm:align-middle sm:my-8 sm:p-6 sm:pb-4 sm:pt-5 sm:px-4 sm:max-w-3xl sm:rounded-lg md:w-full md:h-full"
                        role="dialog">
                        <div className="absolute right-0 top-0 mb-4 pr-4 pt-4">
                            <button
                                aria-label={t('common:close')}
                                className="text-gray-400 hover:text-gray-500 focus:text-gray-500 focus:outline-none transition duration-150 ease-in-out"
                                type="button"
                                onClick={onClose}>
                                <FontAwesomeIcon icon={faTimes} size="lg" />
                            </button>
                        </div>
                        <div className="pt-14 mx-auto text-center sm:px-6 lg:px-8 lg:py-6">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </BaseModal>
    );
};
