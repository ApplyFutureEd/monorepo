import { Modal } from '@applyfuture/ui';
import { FC } from 'react';

type Props = {
    handleClose: () => void;
    handlePreviewError: () => void;
    open: boolean;
    previewImageLoadError: boolean;
    previewUrl: string;
};

const PreviewDocumentModal: FC<Props> = (props) => {
    const { handleClose, handlePreviewError, open, previewImageLoadError, previewUrl } = props;

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="align-items flex justify-center">
                {previewImageLoadError ? (
                    <iframe
                        className="h-screen-90 sm:h-screen-40 w-full"
                        id="preview"
                        src={previewUrl}
                        title="preview"
                    />
                ) : (
                    <img alt="" src={previewUrl} onError={handlePreviewError} />
                )}
            </div>
        </Modal>
    );
};

export default PreviewDocumentModal;
