const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "zero1code.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SYSTEM_EMAIL, // generated ethereal user
        pass: process.env.SYSTEM_PASSWORD, // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false,
    },
});

module.exports = transporter;
