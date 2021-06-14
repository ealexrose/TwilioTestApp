const accountSid =  'AC7571c34759c2ad3b108705fc3eebd018';//process.env.TWILIO_ACCOUNT_SID;
const authToken = '64a333720cfe728350ede9444b203858'//process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '14088004378',
     to: '+16827064034'
   })
  .then(message => console.log(message.sid));
