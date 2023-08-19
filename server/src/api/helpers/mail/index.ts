const nodemailer = require("nodemailer");

export const mailInstance = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.HOST_MAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});
