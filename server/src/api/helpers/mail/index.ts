const nodemailer = require("nodemailer");

export const mailInstance = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.DB,
    pass: process.env.HOST_MAIL,
  },
});
