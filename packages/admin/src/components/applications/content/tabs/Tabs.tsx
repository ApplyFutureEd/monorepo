import cx from 'classnames';
import { FC } from 'react';

type Props = {
    currentTab: number;
    handleCurrentTab: (index: number) => void;
};

const Tabs: FC<Props> = (props) => {
    const { currentTab, handleCurrentTab } = props;

    const baseClasses =
        'px-1 py-4 text-gray-500 hover:text-gray-700 focus:text-gray-700 whitespace-no-wrap text-sm font-medium leading-5 border-b-2 hover:border-gray-300 focus:border-gray-300 border-transparent focus:outline-none cursor-pointer';
    const activeClasses =
        'px-1 py-4 text-indigo-600 focus:text-indigo-800 whitespace-no-wrap text-sm font-medium leading-5 border-b-2 border-indigo-500 focus:border-indigo-700 focus:outline-none cursor-pointer';

    return (
        <div className="px-4 border-b border-gray-200 sm:px-6">
            <div className="flex -mb-px space-x-4">
                <button
                    className={cx({
                        [`${baseClasses}`]: currentTab !== 0,
                        [`${activeClasses}`]: currentTab === 0
                    })}
                    onClick={() => handleCurrentTab(0)}>
                    Timeline
                </button>
                <button
                    className={cx({
                        [`${baseClasses}`]: currentTab !== 1,
                        [`${activeClasses}`]: currentTab === 1
                    })}
                    onClick={() => handleCurrentTab(1)}>
                    Documents
                </button>
            </div>
        </div>
    );
};

export default Tabs;
