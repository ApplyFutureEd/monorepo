import TabsItem from '@components/tabsItem/TabsItem';
import TabsPanel from '@components/tabsPanel/TabsPanel';
import { FC, useState } from 'react';

const Tabs: FC = () => {
    const [selected, setSelected] = useState('All');

    const baseClasses =
        'flex items-center px-1 py-4 text-gray-500 hover:text-indigo-700 focus:text-indigo-700 whitespace-no-wrap text-base font-medium leading-5 border-b-2 hover:border-indigo-300 focus:border-indigo-300 border-transparent focus:outline-none cursor-pointer space-x-2';

    const tabs = [
        'All',
        'Account',
        'Application',
        'Auth',
        'Common',
        'Help',
        'Landing',
        'Navigation',
        'Profile',
        'Programs',
        'Recruiters',
        'Schools'
    ];

    return (
        <div className="shadow">
            <nav className="bg-white overflow-hidden">
                <div className="px-4 py-2 bg-white border-b border-gray-200 sm:px-6">
                    <div className="flex flex-wrap items-center justify-between sm:flex-no-wrap">
                        <div className="flex -mb-px space-x-4">
                            {tabs.map((tab, i) => (
                                <button
                                    key={i}
                                    className={baseClasses}
                                    onClick={() => setSelected(tab)}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
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
        </div>
    );
};

export default Tabs;
