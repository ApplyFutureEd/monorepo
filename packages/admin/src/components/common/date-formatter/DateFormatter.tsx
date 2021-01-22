import { date, DateOptions } from '@applyfuture/utils';
import { DataTypeProvider } from '@devexpress/dx-react-grid';
import React, { FC } from 'react';

export const DateFormatter: FC<DateOptions & DataTypeProvider.ValueFormatterProps> = (props) => {
    const { scheme, value } = props;

    return <>{date({ scheme, value })}</>;
};

export default DateFormatter;
