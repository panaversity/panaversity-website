import nodemailer from "nodemailer";

const transporter = process.env.EMAIL_SECRET && process.env.USER_EMAIL && process.env.EMAIL_SERVICE && process.env.EMAIL_HOST 
  ? nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.EMAIL_SECRET,
      },
    })
  : null;

const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  if (!transporter) {
    console.error("Transporter not initialized. Missing environment variables.");
    throw new Error("Email service not configured.");
  }

  const mailOptions = {
    from: process.env.USER_EMAIL,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error("Failed to send email");
  }
};

export default sendEmail;
