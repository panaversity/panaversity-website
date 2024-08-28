import nodemailer from "nodemailer";

if (!process.env.EMAIL_SECRET) {
  throw new Error("Missing EMAIL_SECRET");
}

if (!process.env.USER_EMAIL) {
  throw new Error("Missing USER_EMAIL");
}

if (!process.env.EMAIL_SERVICE) {
  throw new Error("Missing EMAIL_SERVICE");
}

if (!process.env.EMAIL_HOST) {
  throw new Error("Missing EMAIL_HOST");
}

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.EMAIL_SECRET,
  },
});

const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
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
