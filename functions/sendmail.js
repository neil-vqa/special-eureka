const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


exports.handler = async (event, context, callback) => {
  
  const msg = { 
    to: 'nvq.alino@gmail.com',
    from: 'eureka@neilvqa.host',
    subject: 'test serverless sendmail',
  };
  
  try {
    console.log('processing...');
    await sgMail.send(msg);
    console.log('sent!');

    return {
      statusCode: 200,
      body: 'Message sent'
    }
  } catch (e) {
  	console.log(e.message);
    return {
      statusCode: e.code,
      body: e.message
    }
  }
}
