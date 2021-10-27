import { Translation, Values } from '@pages/index';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';

import TranslationsList from './TranslationsList';

describe('TranslationList', () => {
    const fetchAndSetAllNamespaces = jest.fn();
    const fetchAndSetNamespace = jest.fn();
    const isLoading = false;
    const selected = 'namespace';
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
    const ref = createRef();

    it('can display skeleton without crashing when loading is true', () => {
        const { container } = render(
            <TranslationsList
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                filter={null}
                isLoading={true}
                listRef={ref}
                search=""
                selected={selected}
                translations={translations}
            />
        );

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });

    it('can render a list of translation row without crashing', () => {
        render(
            <TranslationsList
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                filter={null}
                isLoading={isLoading}
                listRef={ref}
                search=""
                selected={selected}
                translations={translations}
            />
        );

        const translationList = screen.getByText('bonjour');

        expect(translationList).toBeInTheDocument();
    });

    it('can render a list of untranslated translation row', () => {
        render(
            <TranslationsList
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                filter="UNTRANSLATED"
                isLoading={isLoading}
                listRef={ref}
                search=""
                selected={selected}
                translations={translations}
            />
        );

        const translationList = screen.getByText('goodbye');

        expect(translationList).toBeInTheDocument();
    });

    it('can render a list of translated translation row', () => {
        render(
            <TranslationsList
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                filter="TRANSLATED"
                isLoading={isLoading}
                listRef={ref}
                search=""
                selected={selected}
                translations={translations}
            />
        );

        const translationList = screen.getByText('bonjour');

        expect(translationList).toBeInTheDocument();
    });

    it('can render a list of translation row corresponding to a search string', () => {
        render(
            <TranslationsList
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                filter={null}
                isLoading={isLoading}
                listRef={ref}
                search="bonjour"
                selected={selected}
                translations={translations}
            />
        );

        const translationList = screen.getByText('bonjour');

        expect(translationList).toBeInTheDocument();
    });

    it('can render a list of untranslated translation row corresponding to a search string', () => {
        render(
            <TranslationsList
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                filter="UNTRANSLATED"
                isLoading={isLoading}
                listRef={ref}
                search="goodbye"
                selected={selected}
                translations={translations}
            />
        );

        const translationList = screen.getByText('goodbye');

        expect(translationList).toBeInTheDocument();
    });
});
