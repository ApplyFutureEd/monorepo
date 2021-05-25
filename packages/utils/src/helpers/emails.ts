import { API } from 'aws-amplify';

import { getEmailById } from './../constants/emails';

export const sendEmail = async (id: string): Promise<void> => {
    try {
        const email = getEmailById(id);
        await API.post('rest', '/email', {
            body: email
        });
    } catch (error) {
        console.log(error);
    }
};
