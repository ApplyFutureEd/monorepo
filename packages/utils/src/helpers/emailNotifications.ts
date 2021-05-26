import { SupportedLocale } from '@applyfuture/models';
import { API } from 'aws-amplify';

type Options = {
    id: string;
    language: SupportedLocale;
    recipients: string[];
    variables: {
        program: any;
        student: any;
        school: any;
    };
};

export const sendEmailNotification = async (options: Options): Promise<void> => {
    const { id, language, recipients, variables } = options;
    try {
        await API.post('rest', '/email-notification', {
            body: { id, language, recipients, variables }
        });
    } catch (error) {
        console.log(error);
    }
};
