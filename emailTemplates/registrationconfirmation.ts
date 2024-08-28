const RegistrationConfirmation = ({
  userName,
  regNumber,
}: {
  userName: string;
  regNumber: string;
}) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>
      Welcome to CM KPK Initiative for Generative AI and Cloud Computing
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Montserrat", sans-serif;
        background-color: #eff9f8;
        margin: 0;
        padding: 0;
        color: #333;
      }
      .container {
        max-width: 700px;
        margin: 40px auto;
        padding: 30px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      .pg-name {
        color: #1eb2a6;
      }
      img {
        width: 50px;
        height: 50px;
        margin-right: 5px;
      }
      .logo {
        text-align: center;
        margin-bottom: 30px;
      }
      .logo img {
        width: 120px;
        height: 120px;
        object-fit: contain;
      }
      .greeting {
        font-size: 1.1em;
        margin-bottom: 20px;
      }
      .content {
        line-height: 1.6;
        margin-bottom: 30px;
      }
      .content a {
        color: #3b82f6;
        text-decoration: none;
      }
      .content a:hover {
        text-decoration: underline;
      }
      .social-links {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: 50px;
      }
      .footer {
        margin-top: 30px;
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
          width: 100px;
          height: 100px;
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
      <div class="greeting">Dear ${userName},</div>
      <div class="content">
        <p>
          Thank you for registering for the
          <strong class="pg-name"
            >CM KPK Initiative for Generative AI and Cloud Computing</strong
          >
          program in Peshawar!
        </p>
        <p>
          We’re thrilled to have you join us in this collaborative effort
          between the Government of Khyber Pakhtunkhwa, PIAIC, and Panacloud.
          This initiative is designed to equip participants with cutting-edge
          skills in Generative AI and Cloud Computing, contributing to national
          development.
        </p>
        <p>
          We have successfully received your registration. Please note down your
          <br />
          <strong> Registration # : ${regNumber}. </strong>
        </p>
        <p>
          We will keep you updated on the program schedule, Examination, venue,
          and other important details. In the meantime, we encourage you to
          start preparing by exploring the basics of Generative AI and Cloud
          Computing.
        </p>
        <p>
          You can find more resources and information about the program on our
          website:
          <a href="https://cmkpk.org" target="_blank" rel="noopener noreferrer"
            >cmkpk.org</a
          >
        </p>
        <p>
          If you have any questions or need assistance, please don't hesitate to
          reach out to us at
          <a href="mailto:khubaib.mk@gmail.com" target="_blank"
            >khubaib.mk@gmail.com</a
          >.
        </p>
        <p>Thank you for being a part of this nation-building journey.</p>
      </div>
      <div class="social-links">
        <a
          href="https://www.facebook.com/panaverse.dao"
          class=""
          target="_blank"
          ><img
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt="Facebook"
        /></a>
        <a href="https://www.youtube.com/@panaverse" class="" target="_blank">
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
            alt="YouTube"
        /></a>
        <a
          href="https://www.linkedin.com/company/panaverse/"
          class=""
          target="_blank"
          ><img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn"
        /></a>
        <a
          href="https://www.whatsapp.com/channel/0029ValzkrOJ93wMzwkBWl2r"
          class=""
          target="_blank"
          ><img
            src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
            alt="WhatsApp"
        /></a>
      </div>
      <div class="footer">
        <p>&copy; 2024 CM KPK Initiative. All rights reserved.</p>
        <p>
          You are receiving this email because you registered for the CM KPK
          Initiative.
        </p>
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
};

export default RegistrationConfirmation;
