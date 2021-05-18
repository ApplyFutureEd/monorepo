import { GetApplicationQuery, GetDocumentByStudentQuery } from '@applyfuture/graphql';
import { Loader, Timeline } from '@applyfuture/ui';
import Tabs from '@components/applications/content/tabs/Tabs';
import Documents from '@components/applications/documents/Documents';
import { config } from '@components/applications/timeline/config';
import cx from 'classnames';
import React, { FC, useState } from 'react';

type Props = {
    applicationData: GetApplicationQuery;
    documentsData: GetDocumentByStudentQuery;
    isLoading: boolean;
};

const Content: FC<Props> = (props) => {
    const { applicationData, documentsData, isLoading } = props;
    const application = applicationData?.getApplication;
    const [currentTab, setCurrentTab] = useState(0);

    const handleCurrentTab = (index: number) => {
        setCurrentTab(index);
    };

    const baseClasses = 'px-4 py-4 sm:px-6 hidden';
    const activeClasses = 'px-4 py-4 sm:px-6 block';

    return (
        <div className="w-full bg-white shadow overflow-hidden sm:rounded-lg md:w-2/3">
            <Tabs currentTab={currentTab} handleCurrentTab={handleCurrentTab} />
            <div
                className={cx({
                    [`${baseClasses}`]: currentTab !== 0,
                    [`${activeClasses}`]: currentTab === 0
                })}>
                {isLoading && !application?.steps ? (
                    <div className="inset-1/2 w-full h-64">
                        <Loader />
                    </div>
                ) : (
                    <Timeline application={application} config={config} />
                )}
            </div>
            <div
                className={cx({
                    [`${baseClasses}`]: currentTab !== 1,
                    [`${activeClasses}`]: currentTab === 1
                })}>
                {isLoading ? (
                    <div className="inset-1/2 w-full h-64">
                        <Loader />
                    </div>
                ) : (
                    <Documents data={documentsData} />
                )}
            </div>
        </div>
    );
};

export default Content;
