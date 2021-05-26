import { Button } from '@applyfuture/ui';
import { sendEmailNotification } from '@applyfuture/utils';
import React, { FC } from 'react';

const TestPage: FC = () => {
    const handleOnClick = async () => {
        await sendEmailNotification({
            id: 'post-submission',
            language: 'fr',
            recipients: ['pcailly@pm.me'],
            variables: {
                program: {
                    name: 'Amazing Master in Awesomeness'
                },
                school: {
                    name: 'Awesome school'
                },
                student: {
                    firstName: 'Paul'
                }
            }
        });
    };

    return (
        <div>
            <Button onClick={handleOnClick}>Send</Button>
        </div>
    );
};

export default TestPage;
