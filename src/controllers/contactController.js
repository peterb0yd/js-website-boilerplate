var mailer = require('../lib/mailers/contactMailer');

// Display Contact Page
exports.contact_page = (req, res) => {
  res.render('contact', { title: '<name> | Contact'})
}

// Send Contact Email
exports.contact_form = (req, res) => {
  let contact = req.body.contact
  mailer.sendEmail(contact).then(() => {
    return res.sendStatus(204)
  }, () => {
    return res.status(400).json({ mailError: true })
  })
}
