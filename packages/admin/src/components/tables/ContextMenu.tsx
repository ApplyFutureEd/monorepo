import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Item, Menu } from 'react-contexify';

export type ContextMenuItem = {
    icon: IconProp;
    label: string;
    onClick: ({ event, props, triggerEvent, data }: any) => void;
};

type Props = {
    id: string;
    items: Array<ContextMenuItem>;
};

const ContextMenu: FC<Props> = (props) => {
    const { id, items } = props;

    return (
        <Menu id={id}>
            {items.map((item, index) => {
                return (
                    <Item key={index} onClick={item.onClick}>
                        <FontAwesomeIcon fixedWidth icon={item.icon} />
                        <span className="ml-2">{item.label}</span>
                    </Item>
                );
            })}
        </Menu>
    );
};

export default ContextMenu;
