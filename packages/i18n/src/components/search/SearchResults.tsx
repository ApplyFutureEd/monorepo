import { Filter } from '@pages/index';
import React, { FC } from 'react';

import data from './data.json';

interface Props {
    search: string;
    filter: Filter;
}

const SearchResults: FC<Props> = (props) => {
    const { search, filter } = props;
    const displaySearch = search ? `Recherche: ${search}` : '';
    const filterSearch = (key: string) => !search || key.includes(search);
    const filterTranslated = (key: string, item: any) =>
        filter !== 'TRANSLATED' ? key.includes(search) : item.en !== '' && item.es !== '';
    const filterUntranslated = (key: string, item: any) =>
        filter !== 'UNTRANSLATED' ? key.includes(search) : item.en === '' || item.es === '';
    return (
        <div>
            <span style={{ fontStyle: 'italic' }}>{displaySearch}</span>
            {Object.entries(data)
                .filter(([key]) => filterSearch(key))
                .filter(([key, item]) => filterTranslated(key, item))
                .filter(([key, item]) => filterUntranslated(key, item))
                .map(([key, item], i) => (
                    <div key={i}>
                        <span style={{ fontWeight: 'bold' }}>Key: {key}</span> <br />
                        <span>EN: {item.en}</span> <br />
                        <span>ES: {item.es}</span>
                    </div>
                ))}
        </div>
    );
};

export default SearchResults;
