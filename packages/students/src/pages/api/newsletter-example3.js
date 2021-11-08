/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const API_KEY = process.env.MAILCHIMP_API_KEY;
const API_SERVER = process.env.MAILCHIMP_API_KEY.split('-')[1];

export default async (req, res) => {
  const email = req.body || {};
  console.log(email);

  if (!email || !email.length) {
    return res.status(400).json({
      error: 'Email required',
    });
  }

  try {
    const data = {
      email_address: email,
      status: 'subscribed'
    };
    // {"email_address":"test@test.com","status":"subscribed"}

    // const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64');
    // YW55c3RyaW5nOmZkOWJiZWMwZGM3ZWYyYTJmNzA3MmY5YjA3MzYzOWUxLXVzNQ==

    const response = await axios.post(
      `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, data, {
        auth: { password: API_KEY, username: "anystring" }
      }
    );

    console.log(response);

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter`
      });
    }
    return res.status(201).json({error: ''});

  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({error: error.message});
  }  
};