import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import ConfirmDeleteTranslationModal from './ConfirmDeleteTranslationModal';

describe('ConfirmDeleteTranslationModal', () => {
    const handleClose = jest.fn();
    const handleDelete = jest.fn();
    const open = true;
    const values = {
        chineseTranslation: 'XX',
        englishTranslation: 'hello',
        frenchTranslation: 'bonjour',
        namespace: 'namespace',
        translationKey: 'hello'
    };

    it('can display a modal without crashing', () => {
        render(
            <ConfirmDeleteTranslationModal
                handleClose={handleClose}
                handleDelete={handleDelete}
                open={open}
                values={values}
            />
        );

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can call the handleDelete callback without crashing', async () => {
        render(
            <ConfirmDeleteTranslationModal
                handleClose={handleClose}
                handleDelete={handleDelete}
                open={open}
                values={values}
            />
        );

        const button = screen.getAllByText(/Delete/)[1];
        await waitFor(() => {
            fireEvent.click(button);
        });

        expect(handleDelete).toHaveBeenCalledWith(values);
    });
});
