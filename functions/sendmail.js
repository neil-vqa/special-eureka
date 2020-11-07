const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = process.env


exports.handler = async (event, context, callback) => {
  
  const msg = { 
    to: 'nvq.alino@gmail.com',
    from: 'nvqa.business@gmail.com',
    subject: 'test serverless sendmail'
  }
  
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);
    await sgMail.send(msg);
    console.log('sent!');

    return {
      statusCode: 200,
      body: 'Message sent'
    }
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message
    }
  }
}
