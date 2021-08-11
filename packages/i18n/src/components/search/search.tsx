import React, { ReactElement } from 'react';

import data from '../../../locales/en/application.json';

type Props = {
    search: string;
    handleChange: any;
};

function Search({ search, handleChange }: Props): ReactElement {
    return (
        <div>
            <span>Clé :</span>
            <input type="text" value={search} onChange={handleChange} />
            <div>
                <span>Valeur :</span>
                <div>
                    {Object.keys(data)
                        .filter((data) => data === search)
                        .map((key, i) =>
                            search ? (
                                <span key={i}>
                                    {key} {data[key]}
                                </span>
                            ) : (
                                ' '
                            )
                        )}
                </div>
            </div>
        </div>
    );
}

// getStaticProps

export default Search;
