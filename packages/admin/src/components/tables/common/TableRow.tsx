import { Table } from '@devexpress/dx-react-grid-material-ui';
import { FC, useState } from 'react';

type Props = {
    handleContextMenu?: (event: React.MouseEvent, row: any) => void;
    row: any;
};

const TableRow: FC<Props & Table.DataRowProps> = ({ handleContextMenu, row, ...rest }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const style = {
        backgroundColor: isHovered
            ? 'rgba(238, 242, 255, 1)'
            : Number(rest.tableRow.rowId) % 2
            ? 'rgba(243, 244, 246, 1)'
            : 'rgba(255, 255, 255, 1)'
    };

    return (
        <Table.Row
            {...rest}
            row={row}
            style={style}
            onContextMenu={(event: React.MouseEvent) => {
                handleContextMenu && handleContextMenu(event, row);
            }}
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
        />
    );
};

export default TableRow;
