import { FC, ReactNode } from 'react';

type Props = {
    selected: boolean;
    children: ReactNode;
};

const TabsPanel: FC<Props> = ({ selected, children }) => {
    return <>{selected && children}</>;
};

export default TabsPanel;
