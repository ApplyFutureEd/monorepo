import TranslationForm from '@components/translation/TranslationForm';
import { Translation, Values } from '@pages/index';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';

// handleOpen function
// handleClose function
// handleDisplayAlert function
// handleHideAlert function
// handleScroll function

// Je veux tester que mon composant render bien lorsque newform = true et newform = false
// Je veux tester l'ajout d'une nouvelle trad
// Je veux tester l'update d'une trad existante
// Je veux tester le delete d'une trad existante

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

    const onSubmit = jest.fn();

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

    it('can call the onSubmit callback for adding a new translation', () => {
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

        expect(onSubmit).toHaveBeenCalled();
    });

    it.skip('can call callback function for updating an existing translation when input is dirty', async () => {
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

        await waitFor(() => {
            userEvent.type(input[2], 'hello');
        });

        expect(onSubmit).toHaveBeenCalled();
    });
});
