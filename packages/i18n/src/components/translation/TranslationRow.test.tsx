import TranslationRow from '@components/translation/TranslationRow';
import { Translation, Values } from '@pages/index';
import { render, screen } from '@testing-library/react';

describe('Translation row', () => {
    const index = 1;
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

    it('can render without crashing', () => {
        render(<TranslationRow index={index} selected={selected} translations={translations} />);

        const label = screen.getByLabelText('Namespaces');

        expect(label).toBeInTheDocument();
    });
});
