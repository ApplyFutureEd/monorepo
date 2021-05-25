import { Button } from '@applyfuture/ui';
import { sendEmailNotification } from '@applyfuture/utils';
import React, { FC } from 'react';

const TestPage: FC = () => {
    const handleOnClick = async () => {
        await sendEmailNotification('post-submission', 'pcailly@pm.me');
    };

    return (
        <div>
            <Button onClick={handleOnClick}>Send</Button>
        </div>
    );
};

export default TestPage;
