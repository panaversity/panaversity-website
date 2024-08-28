function sendEmailtemplate(code: number) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Montserrat", sans-serif;
        background-color: #EFF9F8;
        margin: 0;
        padding: 0;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        padding: 30px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border: 1px solid #ddd;
      }
      .logo {
        text-align: center;
        margin-bottom: 30px;
      }
      .logo img {
        width: 100px;
        height: 100px;
        object-fit: contain;
      }
      .heading {
        color: #1eb2a6;
        margin-top: 0;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
      }
      .main-header {
        color: #1eb2a6;
        font-size: 36px;
        font-weight: bold;
        text-align: center;
        margin: 20px 0;
      }
      .otp {
        color: #333;
        font-size: 36px;
        font-weight: bold;
        text-align: center;
        margin: 20px 0;
      }
      .message {
        color: #666;
        font-size: 16px;
        line-height: 1.6;
        text-align: center;
      }
      .footer {
        margin-top: 40px;
        text-align: center;
        font-size: 0.9em;
        color: #777;
      }
      .footer a {
        color: #3b82f6;
        text-decoration: none;
      }
      .footer a:hover {
        text-decoration: underline;
      }
      @media (max-width: 600px) {
        .container {
          margin: 20px;
          padding: 20px;
        }
        .logo img {
          width: 80px;
          height: 80px;
        }
        .heading {
          font-size: 20px;
        }
        .otp {
          font-size: 30px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">
        <img
          src="https://kp.gov.pk/design_section/front/upgrade/resources/assets/KP_logo.png"
          alt="CM KPK Initiative Logo"
        />
      </div>
      <h1 class="otp">
        CM KPK Initiative for Generative AI and Cloud Computing
      </h1>
      <h2 class="heading">Verify Your Email</h2>
      <p class="message">
        Enter the OTP below to verify your email address and confirm your
        registration for the
        <strong>CM KPK Initiative for Generative AI and Cloud Computing</strong
        >.
      </p>
      <h1 class="otp">${code}</h1>
      <p class="message">If you didn't request this email, please ignore it.</p>
      <div class="footer">
        <p>&copy; 2024 CM KPK Initiative. All rights reserved.</p>
        <p>
          For any inquiries, visit
          <a href="https://cmkpk.org" target="_blank">cmkpk.org</a> or contact
          us at
          <a href="mailto:khubaib.mk@gmail.com" target="_blank"
            >khubaib.mk@gmail.com</a
          >.
        </p>
      </div>
    </div>
  </body>
</html>
`;
}

export default sendEmailtemplate;
