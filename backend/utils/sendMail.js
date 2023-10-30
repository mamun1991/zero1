const nodemailer = require("nodemailer");

const transporter = require("../config/mail");

const sendMail = async (to, subject, message) => {
    try {
        await transporter.sendMail({
            from: `"Zero1Code" <${process.env.SYSTEM_EMAIL}>`, // sender address
            to, // list of receivers
            subject, // Subject line
            text: message?.text || null, // plain text body
            html: message?.html || null, // html body
            attachments: message?.attachments || null,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = sendMail;
