'use server';

interface SendEmailParams {
  mailBody: string;
  mailSubject: string;
}

export const sendEmail = async ({ mailSubject, mailBody }: SendEmailParams): Promise<any> => {
  console.log(mailSubject, mailBody);
  var postmark = require("postmark");
  const client =  new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);
  const mailOptions = {
    From: 'cyayu@connect.hku.hk',
    To: 'cyayu@connect.hku.hk',
    Subject: mailSubject,
    HtmlBody: `<strong>${mailSubject}</strong><br/>${mailBody}`,
    TextBody: mailBody,
  };

  try {
    await client.sendEmail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};