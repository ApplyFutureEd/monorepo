import { Completion } from '@applyfuture/utils';
import { FC } from 'react';

import Tabs from '../tabs/Tabs';
import TabsSkeleton from '../tabs/TabsSkeleton';

type Props = {
    completion: Completion;
    isLoading?: boolean;
};

const Navigation: FC<Props> = (props) => {
    const { completion, isLoading } = props;

    return (
        <div className="bg-white overflow-hidden">
            <div
                className="pt-2 px-4 bg-white border-b border-gray-200 sm:px-6"
                id="profile-nav-container">
                <div className="sm:flex-nowrap flex flex-wrap items-center justify-between -ml-4 -mt-2">
                    <div className="ml-4 mt-2">
                        <div className="border-b border-gray-200">
                            {isLoading ? <TabsSkeleton /> : <Tabs completion={completion} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
