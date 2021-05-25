import { API } from 'aws-amplify';

import { getEmailNotificationById } from '../constants/emailNotifications';

export const sendEmailNotification = async (id: string, email: string): Promise<void> => {
    try {
        const emailNotification = getEmailNotificationById(id);
        await API.post('rest', '/email-notification', {
            body: { ...emailNotification, email, language: 'en' }
        });
    } catch (error) {
        console.log(error);
    }
};
