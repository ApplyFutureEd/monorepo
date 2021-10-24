import TranslationForm from '@components/translation/TranslationForm';
import { Translation, Values } from '@pages/index';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { API } from 'aws-amplify';
import { createRef } from 'react';

// handleOpen function => confirmation modal
// handleClose function => confirmation modal
// handleDisplayAlert function => alert for existing translation
// handleHideAlert function => alert for existing translation
// handleScroll function

describe('TranslationForm', () => {
    const fetchAndSetAllNamespaces = jest.fn();
    const fetchAndSetNamespace = jest.fn();
    const handleToggleDisplayForm = jest.fn();
    const listRef = createRef();
    const selected = 'namespace';
    const index = 0;
    const translations = [
        {
            key: 'bonjour',
            namespace: 'namespace',
            values: { en: 'hello', fr: 'bonjour', zh: '你好' } as Values
        },
        {
            key: 'au revoir',
            namespace: 'namespace',
            values: { en: 'goodbye', fr: 'au revoir', zh: '' } as Values
        }
    ] as Translation[];

    jest.mock('aws-amplify');

    API.post = jest.fn();

    it('can render existing translations without crashing', () => {
        render(
            <TranslationForm
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                namespace={translations[index].namespace}
                newForm={false}
                selected={selected}
                translationKey={translations[index].key}
                values={translations[index].values}
            />
        );

        const translationForm = screen.getByText('Delete');

        expect(translationForm).toBeInTheDocument();
    });

    it('can render translation form for new form', () => {
        render(
            <TranslationForm
                newForm
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                handleToggleDisplayForm={handleToggleDisplayForm}
                listRef={listRef}
                translations={translations}
            />
        );

        const translationForm = screen.getByText('Add');

        expect(translationForm).toBeInTheDocument();
    });

    it('can call the onSubmit callback for adding a new translation', async () => {
        render(
            <TranslationForm
                newForm
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                handleToggleDisplayForm={handleToggleDisplayForm}
                listRef={listRef}
                translations={translations}
            />
        );

        const button = screen.getByText('Add');

        userEvent.click(button);

        await waitFor(() => {
            expect(API.post).toHaveBeenCalled();
        });
    });

    it('can call callback function for updating an existing translation when input is dirty', async () => {
        render(
            <TranslationForm
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                namespace={translations[index].namespace}
                newForm={false}
                selected={selected}
                translationKey={translations[index].key}
                values={translations[index].values}
            />
        );

        const input = screen.getAllByRole('textbox');

        userEvent.type(input[2], 'hello');

        await waitFor(() => {
            expect(API.post).toHaveBeenCalled();
        });
    });

    it('can call callback function for deleting a translation', async () => {
        render(
            <TranslationForm
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                namespace={translations[index].namespace}
                newForm={false}
                selected={selected}
                translationKey={translations[index].key}
                values={translations[index].values}
            />
        );

        const button = screen.getByText('Delete');

        userEvent.click(button);

        await waitFor(() => {
            expect(API.post).toHaveBeenCalled();
        });
    });

    it.skip('can display an alert into newform if translation key exists', () => {
        render(
            <TranslationForm
                newForm
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                handleToggleDisplayForm={handleToggleDisplayForm}
                listRef={listRef}
                translations={translations}
            />
        );

        const alert = screen.getByText(/This translation key already exists/);
        const input = screen.getAllByRole('textbox');

        userEvent.type(input[1], 'namespace');

        expect(alert).toBeInTheDocument();
    });
});
