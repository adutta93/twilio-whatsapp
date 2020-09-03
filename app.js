const accountSid = 'ACe8f0045551d895781bb905f2145a2109';
const authToken = '048a4ce4807fdcd167545bc77635d1d2';
const client = require('twilio')(accountSid, authToken);
const cronJob = require('cron').CronJob;
const stackOverflow = 'https://stackoverflow.com/users/13562953/akash-dutta';
const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

//code to send the msg

var textJob = new cronJob(
  '11 05 * * *',
  () => {
    client.messages.create(
      {
        body: `Visir StackOverflow for points by clicking ${stackOverflow}`,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+919748796418',
      },
      function (err, data) {}
    );
  },
  null,
  true
);

var numbers = ['+919748796418'];
for (var i = 0; i < numbers.length; i++) {
  client.messages.create(
    {
      body: `Visir StackOverflow for points by clicking ${stackOverflow}`,
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+919748796418',
    },
    function (err, data) {
      console.log(data.body);
    }
  );
}
//express setup
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post('/message', function (req, res) {
  var resp = new MessagingResponse();
  resp.message('Thanks for subscribing!');
  res.writeHead(200, {
    'Content-Type': 'text/xml',
  });
  res.end(resp.toString());
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});

// setTimeout(() => {
//   client.messages
//     .create({
//       body: `Visir StackOverflow for points by clicking ${stackOverflow}`,
//       from: 'whatsapp:+14155238886',
//       to: 'whatsapp:+919748796418',
//     })
//     .then((message) => console.log(message.sid));
// }, 1000);
