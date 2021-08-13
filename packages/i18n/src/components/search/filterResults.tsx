import React, { FC } from 'react';

import data from './test.json';

interface Props {
    variable: any;
}

const FilterResults: FC<Props> = (props) => {
    const { variable } = props;
    console.log(`variable à filtrer: ${variable}`);
    return (
        <div>
            {/* <div>{JSON.stringify(data)}</div> */}
            {Object.keys(data)
                .filter((data) => data.includes(variable))
                .map((key, i) =>
                    variable ? (
                        <div>
                            <span key={i} style={{ fontWeight: 'bold' }}>
                                {key} :
                            </span>{' '}
                            <br />
                            <span>{data[key]}</span>
                        </div>
                    ) : (
                        ' '
                    )
                )}
        </div>
    );
};

export default FilterResults;
