var nodemailer = require('nodemailer');

// Set up a SMTP transporter
const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'elian54@ethereal.email',
        pass: 'kDVdVjMHu7YdT55ccV'
    }
});

// Handle send email on POST.
exports.mail_send = function(req, res) {
    const message = {
        from: req.body.from,
        to: 'contact@example.com',
        subject: req.body.subject,
        text: req.body.text
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
            res.send(err);
        } else {
            res.send(info);
        }
    });
};
