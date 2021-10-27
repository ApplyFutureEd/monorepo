import { Translation } from '@pages/index';
import React, { CSSProperties, FC } from 'react';

import TranslationForm from './TranslationForm';

type Props = {
    fetchAndSetAllNamespaces?: () => void;
    fetchAndSetNamespace?: (namespace: string) => void;
    index: number;
    selected: string;
    style?: CSSProperties;
    translations: Translation[];
};

const Row: FC<Props> = (props) => {
    const {
        fetchAndSetAllNamespaces,
        fetchAndSetNamespace,
        index,
        selected,
        style,
        translations
    } = props;

    return (
        <div style={style}>
            <TranslationForm
                fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                fetchAndSetNamespace={fetchAndSetNamespace}
                namespace={translations[index].namespace}
                newForm={false}
                selected={selected}
                translationKey={translations[index].key}
                values={translations[index].values}
            />
        </div>
    );
};

export default Row;
