import { Translation } from '@pages/index';
import React, { CSSProperties, FC } from 'react';

import TranslationForm from './TranslationForm';

type Props = {
    index: number;
    selected: string;
    style: CSSProperties;
    translations: Translation[];
};

const Row: FC<Props> = (props) => {
    const { index, selected, style, translations } = props;

    return (
        <div style={style}>
            <TranslationForm
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
