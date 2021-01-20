import { date } from '@applyfuture/utils';
import React, { FC } from 'react';

type Props = {
    value: string;
};

const DateFormatter: FC<Props> = (props) => {
    const { value } = props;

    return <>{date({ value: value })}</>;
};

export default DateFormatter;
