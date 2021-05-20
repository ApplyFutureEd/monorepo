import ConfirmDeleteDocumentModal from '@components/applications/documents/confirm-delete-document-modal/ConfirmDeleteDocumentModal';
import { fireEvent, render, screen } from '@testing-library/react';

const handleCancel = jest.fn();
const handleClose = jest.fn();
const handleDelete = jest.fn();

describe('ConfirmDeleteDocumentModal', () => {
    it('can render without crashing', () => {
        render(
            <ConfirmDeleteDocumentModal
                documentToDelete={{ id: 'passport', storageKey: 'passport.pdf' }}
                handleCancel={handleCancel}
                handleClose={handleClose}
                handleDelete={handleDelete}
                open={true}
            />
        );

        const title = screen.getByText('Delete document');

        expect(title).toBeInTheDocument;
    });

    it('can call handleDelete callback on delete button click', () => {
        render(
            <ConfirmDeleteDocumentModal
                documentToDelete={{ id: 'passport', storageKey: 'passport.pdf' }}
                handleCancel={handleCancel}
                handleClose={handleClose}
                handleDelete={handleDelete}
                open={true}
            />
        );

        const confirmButton = screen.getByText('Delete');

        fireEvent.click(confirmButton);

        expect(handleDelete).toHaveBeenCalledWith('passport', 'passport.pdf');
    });

    it('can call handleCancel callback on cancel button click', () => {
        render(
            <ConfirmDeleteDocumentModal
                documentToDelete={{ id: 'passport', storageKey: 'passport.pdf' }}
                handleCancel={handleCancel}
                handleClose={handleClose}
                handleDelete={handleDelete}
                open={true}
            />
        );

        const confirmButton = screen.getByText('Cancel');

        fireEvent.click(confirmButton);

        expect(handleCancel).toHaveBeenCalled();
    });
});
