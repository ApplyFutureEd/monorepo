import { Translation } from '@pages/index';
import React, { CSSProperties, FC } from 'react';

import TranslationForm from './TranslationForm';

type Props = {
    index: number;
    translations: Translation[];
    selected: string;
    style: CSSProperties;
};

const Row: FC<Props> = (props) => {
    const { index, selected, translations, style } = props;

    return (
        <div style={style}>
            <TranslationForm
                newForm={false}
                selected={selected}
                translationKey={translations[index].key}
                value={translations[index].values}
            />
        </div>
    );
};

export default Row;
