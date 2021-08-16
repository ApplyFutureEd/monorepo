import React, { FC } from 'react';

import data from './data.json';

interface Props {
    search: string;
    translated: boolean;
    untranslated: boolean;
}

const SearchResults: FC<Props> = (props) => {
    const { search, translated, untranslated } = props;
    return (
        <div>
            <span style={{ fontStyle: 'italic' }}>{search ? `Recherche: ${search}` : ''}</span>
            {/* <div>{JSON.stringify(data)}</div> */}
            {Object.entries(data)
                .filter(([key]) => !search || key.includes(search))
                .filter(([key, item]) =>
                    !translated ? key.includes(search) : item.en !== '' && item.es !== ''
                )
                .filter(([key, item]) =>
                    !untranslated ? key.includes(search) : item.en === '' || item.es === ''
                )
                .map(([key, item], i) => (
                    <div key={i}>
                        <span style={{ fontWeight: 'bold' }}>Clé: {key}</span> <br />
                        <span>EN: {item.en}</span> <br />
                        <span>ES: {item.es}</span>
                    </div>
                ))}
        </div>
    );
};

export default SearchResults;
