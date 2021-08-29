import PreviewDocumentModal from '@components/applications/documents/preview-document-modal/PreviewDocumentModal';
import { render, screen } from '@testing-library/react';

const handleClose = jest.fn();
const handlePreviewError = jest.fn();

describe.skip('PreviewDocumentModal', () => {
    it('can render without crashing', () => {
        render(
            <PreviewDocumentModal
                handleClose={handleClose}
                handlePreviewError={handlePreviewError}
                open={true}
                previewImageLoadError={false}
                previewUrl=""
            />
        );

        const image = screen.getByRole('img');

        expect(image).toBeInTheDocument;
    });

    it('can render iframe without crashing', () => {
        render(
            <PreviewDocumentModal
                handleClose={handleClose}
                handlePreviewError={handlePreviewError}
                open={true}
                previewImageLoadError={true}
                previewUrl=""
            />
        );

        const iframe = screen.getByTitle('preview');

        expect(iframe).toBeInTheDocument;
    });
});
