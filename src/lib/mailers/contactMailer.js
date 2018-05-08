var config = require('../config');
var mailer = require('./index');

exports.sendEmail = function(contact) {
  return new Promise((resolve, reject) => {
    const params = {
      Source: "Contact Form <<your_email>>",
      Destination: {
        ToAddresses: [ "<your_email>" ]
      },
      ReplyToAddresses: [
        contact.email
      ],
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: contact.message
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: `New Message from ${contact.name}`
        }
      },
    }

    // Send email to user
    mailer.sendEmail(params, function(err, data) {
     if (err) {
        console.log(err, err.stack) // an error occurred
        reject()
      } else {
        console.log(data)           // successful response
        resolve()
      }
    })
  })
}
