//@ts-nocheck
import nodemailer from "nodemailer";
import {
  GMAIL_EMAIL,
  GMAIL_APP_PASSWORD,
  CONTACT_EMAIL,
} from "$env/static/private";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_APP_PASSWORD,
  },
});

// const validate = () => {
//   if (quote.name && quote.email && quote.service && quote.message) {
//     return true;
//   }

//   return false;
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   if (!validate()) {
//     return;
//   }

//   const mailOptions = {
//     from: quote.email,
//     replyTo: quote.email,
//     to: CONTACT_EMAIL,
//     subject: `Quote Request | ${quote.name} | ${quote.service}`,
//     text: quote.message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email: ", error);
//     } else {
//       console.log("Email sent: ", info.response);
//     }
//   });
// };
export const actions = {
  default: async ({ request }) => {
    try {
      const formData = await request.formData();
      const email = formData.get("email");
      const name = formData.get("name");
      const message = formData.get("message");
      // const service = formData.get("service");

      const mailOptions = {
        from: email,
        replyTo: email,
        to: CONTACT_EMAIL,
        subject: `Quote Request | ${name}`,
        text: message,
      };

      const sendEmail = async (payload) => {
        await new Promise((resolve, reject) => {
          transporter.sendMail(payload, (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(info);
            }
          });
        });
      };

      await sendEmail(mailOptions);

      return {
        success: "Email is sent",
      };
    } catch (error) {
      console.error(error);
    }
  },
};
