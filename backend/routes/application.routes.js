const express = require("express");
const sendMail = require("../utils/sendMail");
const storeAttatchment = require("../utils/storeattatchment");
const validateCaptchaToken = require("../utils/validateToken");
const router = express.Router();
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

router.post("/", storeAttatchment, async (req, res) => {
    const { name, email, message, token, startDate, phone, id } = req.body;
    const { file } = req;

    try {
        const captchaResponse = await validateCaptchaToken(token);

        if (!captchaResponse.data.success) {
            return res.status(200).json({ message: "Invalid captcha token" });
        }

        const mail = {
            to: process.env.APPLICATION_EMAIL,
            subject: "Application Form",
            message: {
                text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\nStart Date: ${startDate}\nPhone: ${phone} \n ID: ${id}`,
                html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p><p>Start Date: ${startDate}</p><p>ID: ${id}</p>`,
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
        res.status(500).json({ message: "Something went wrong" });
    }
});

module.exports = router;
