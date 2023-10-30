const express = require("express");
const router = express.Router();
const storeAttatchment = require("../utils/storeattatchment");
const sendMail = require("../utils/sendMail");
const dotenv = require("dotenv");
const fs = require("fs");
const validateCaptchaToken = require("../utils/validateToken");

dotenv.config();

router.post("/", storeAttatchment, async (req, res) => {
    const { name, email, message, token } = req.body;
    const { file } = req;

    try {
        const captchaResponse = await validateCaptchaToken(token);

        if (!captchaResponse.data.success) {
            return res.status(200).json({ message: "Invalid captcha token" });
        }

        const mail = {
            to: process.env.CONTACT_EMAIL,
            subject: "Contact Form",
            message: {
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
                attachments: file ? [{ filename: file.originalname, path: file.path }] : null,
            },
        };

        res.status(200).json({ message: "Message sent successfully" });

        await sendMail(mail.to, mail.subject, mail.message);
        if (file) {
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

module.exports = router;
