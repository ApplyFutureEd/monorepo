import TabsItem from '@components/tabs/TabsItem';
import TabsPanel from '@components/tabs/TabsPanel';
import { FC } from 'react';

type Props = {
    selected: string;
};

const TabsView: FC<Props> = (props) => {
    const { selected } = props;
    return (
        <div>
            <TabsPanel selected={selected === 'All'}>
                <TabsItem file={'all'} />
            </TabsPanel>
            <TabsPanel selected={selected === 'Account'}>
                <TabsItem file={'account'} />
            </TabsPanel>
            <TabsPanel selected={selected === 'Application'}>
                <TabsItem file={'application'} />
            </TabsPanel>
            <TabsPanel selected={selected === 'Auth'}>
                <TabsItem file={'auth'} />
            </TabsPanel>
        </div>
    );
};

export default TabsView;
