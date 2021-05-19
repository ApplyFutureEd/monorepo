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
    refetch: () => void;
};

const Content: FC<Props> = (props) => {
    const { applicationData, documentsData, isLoading, refetch } = props;
    const application = applicationData?.getApplication;
    const documents = documentsData?.getDocumentByStudent;

    const [currentTab, setCurrentTab] = useState(0);

    const handleCurrentTab = (index: number) => {
        setCurrentTab(index);
    };

    return (
        <div className="w-full bg-white shadow overflow-hidden sm:rounded-lg md:w-2/3">
            <Tabs currentTab={currentTab} handleCurrentTab={handleCurrentTab} />
            <div
                className={cx({
                    ['px-4 py-4 sm:px-6 block']: currentTab === 0,
                    ['px-4 py-4 sm:px-6 hidden']: currentTab !== 0
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
                    ['py-4 block']: currentTab === 1,
                    ['py-4 hidden']: currentTab !== 1
                })}>
                {isLoading && !documents ? (
                    <div className="inset-1/2 w-full h-64">
                        <Loader />
                    </div>
                ) : (
                    <Documents data={documentsData} refetch={refetch} />
                )}
            </div>
        </div>
    );
};

export default Content;
