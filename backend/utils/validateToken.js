const axios = require("axios");

const validateCaptchaToken = async (token) => {
    try {
        const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${token}`);
        return response;
    } catch (err) {
        return err;
    }
};

module.exports = validateCaptchaToken;
