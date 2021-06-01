import { SupportedLocale } from '@applyfuture/models';
import { API } from 'aws-amplify';

type Body = {
    ctaLink?: string;
    id: string;
    language: SupportedLocale;
    recipients: Array<string | null | undefined>;
    variables?: any;
};

export const sendEmailNotification = async (body: Body): Promise<void> => {
    try {
        await API.post('rest', '/email-notification', {
            body: { ...body }
        });
    } catch (error) {
        console.log(error);
    }
};
