import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

export class EmailService {
  constructor() {}
  async sendMail(message: string, email: string) {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: 'admin@email.com',
      to: email,
      subject: 'Photo uploaded',
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }
}
