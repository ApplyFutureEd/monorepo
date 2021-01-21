import { date } from '@applyfuture/utils';
import { DataTypeProvider } from '@devexpress/dx-react-grid';
import React, { FC } from 'react';

const DateFormatter: FC<DataTypeProvider.ValueFormatterProps> = (props) => {
    const { value } = props;

    return <>{date({ value: value })}</>;
};

export default DateFormatter;
