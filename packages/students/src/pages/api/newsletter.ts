import mailchimp from '@mailchimp/mailchimp_marketing';
import type { NextApiRequest, NextApiResponse } from 'next';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
});

export default async (req: NextApiRequest, res: NextApiResponse<any>): Promise<any> => {
    const { email } = JSON.parse(req.body);

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: 'subscribed'
        });

        return res.status(200);
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};
