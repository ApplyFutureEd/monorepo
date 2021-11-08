/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import mailchimp from '@mailchimp/mailchimp_marketing';

const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const API_KEY = process.env.MAILCHIMP_API_KEY;
const API_SERVER = process.env.MAILCHIMP_API_KEY.split('-')[1];

export default async (req, res) => {

  mailchimp.setConfig({
    apiKey: API_KEY,
    server: API_SERVER
  });
  
  const email = req.body || {}; // JSON.parse(JSON.stringify())
  console.log(email);

  if (!email || !email.length) {
    return res.status(400).json({
      error: 'Email required',
    });
  }

  try {
    await mailchimp.lists.addListMember(AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed'
    });

    return res.status(201).json({error: ''});
  } catch (error) {
    return res.status(error.statusCode || 500).json({error: error.message});
  }  
};