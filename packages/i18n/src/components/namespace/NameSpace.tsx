import React, { ReactElement } from 'react';

type Props = {
    tabs: string;
};

function NameSpace({ tabs }: Props): ReactElement {
    return <p>{tabs}</p>;
}

export default NameSpace;
