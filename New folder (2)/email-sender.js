const nodemailer = require("nodemailer");

// transporter (طريقة الإرسال)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "YOUR_EMAIL@gmail.com",
    pass: "YOUR_APP_PASSWORD",
  },
});

// محتوى الإيميل
const mailOptions = {
  from: "YOUR_EMAIL@gmail.com",
  to: "YOUR_EMAIL@gmail.com",
  subject: "Hello from Node.js",
  text: "This email was sent using Node.js!",
};

// إرسال الإيميل
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
